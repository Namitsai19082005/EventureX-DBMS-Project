from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import smtplib
import random
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)
CORS(app) 

# Generate and store OTPs (in-memory storage for simplicity)

# Function to connect to the database
def get_db_connection():
    try:
        return mysql.connector.connect(
            host="localhost",
            user="root",
            password="Namit#123",  # Replace with your MySQL password
            database="club_management"
        )
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None
    

# otp_storage = {}

# Generate and send OTP
@app.route('/send-otp', methods=['POST'])
def send_otp():
    data = request.json
    recipient_email = data.get('college_email')

    if not recipient_email:
        return jsonify({'success': False, 'message': 'Email is required'}), 400

    # Generate a 6-digit OTP
    otp = str(random.randint(100000, 999999))

    try:
        connection = get_db_connection()
        cursor = connection.cursor()

        # Check if user already exists by their email
        cursor.execute("SELECT * FROM users WHERE college_email = %s", (recipient_email,))
        user = cursor.fetchone()

        if user:
            # Update OTP if the user already exists
            cursor.execute("UPDATE users SET otp = %s,otp_verified = FALSE WHERE college_email = %s", (otp, recipient_email))
        else:
            # Insert new user record with OTP, rest of the info will be updated during final registration
            cursor.execute("INSERT INTO users (college_email, otp, otp_verified) VALUES (%s, %s, %s)", (recipient_email, otp, False))

        connection.commit()

        # Email settings
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        sender_email = "eventurex123@gmail.com"
        password = "wfkh fqeb hxam hfmv"

        # Create the email message
        message = MIMEMultipart()
        message["From"] = sender_email
        message["To"] = recipient_email
        message["Subject"] = "Your OTP for Registration"

        body = f"Your OTP is: {otp}. Please use it to complete your registration."
        message.attach(MIMEText(body, "plain"))

        # Send email using SMTP server
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, password)
        server.sendmail(sender_email, recipient_email, message.as_string())
        server.quit()

        return jsonify({'success': True, 'message': 'OTP sent successfully'})

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

    finally:
        cursor.close()
        connection.close()

@app.route('/register', methods=['POST'])
def register_user():
    data = request.json
    college_id = data.get('college_id')
    password = data.get('password')
    college_email = data.get('college_email')
    otp = data.get('otp')

    try:
        connection = get_db_connection()
        cursor = connection.cursor()

        # Check if the roll number (college_id) is allowed
        cursor.execute("SELECT * FROM allowed_roll_numbers WHERE college_id = %s", (college_id,))
        allowed_roll = cursor.fetchone()

        if not allowed_roll:
            return jsonify({"error": "Your roll number is not allowed to register."}), 403  # 403 Forbidden

        # Fetch the user to verify OTP
        cursor.execute("SELECT * FROM users WHERE college_email = %s", (college_email,))
        user = cursor.fetchone()

        if not user:
            return jsonify({"error": "User does not exist. Please request OTP again."}), 400

        stored_otp = user[4]  # Assuming OTP is in the 5th column
        if stored_otp != otp:
            return jsonify({"error": "Invalid OTP"}), 401

        # Store the password as it is
        # Update user details after OTP validation
        cursor.execute("""
            UPDATE users 
            SET college_id = %s, password = %s, otp_verified = TRUE 
            WHERE college_email = %s
        """, (college_id, password, college_email))
        
        connection.commit()
        return jsonify({"message": "User registered successfully"}), 201

    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500
    
    finally:
        cursor.close()
        connection.close()

        

@app.route('/login', methods=['POST'])
def login_user():
    data = request.json
    college_id = data.get('college_id')
    password = data.get('password')
    

    try:
        connection = get_db_connection()
        cursor = connection.cursor()

        # Fetch the user by college_id
        cursor.execute("SELECT * FROM users WHERE college_id=%s", (college_id,))
        user = cursor.fetchone()

        if user:
            stored_password = user[3]  # Assuming password is the fourth column
            stored_otp_verified = user[5] # Assuming otp_verified is the 6th column
            
            if not stored_otp_verified:
                return jsonify({"error": "OTP not verified. Please complete registration."}), 401

            # Compare the stored password with the one provided
            if password == stored_password:
                email=user[2]
                return jsonify({"message": "Login successful", "user": {"college_id": user[1], "email": email}}), 200
            else:
                return jsonify({"error": "Invalid College ID or password"}), 401
        else:
            return jsonify({"error": "Invalid College ID or password"}), 401

    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500

    finally:
        cursor.close()
        connection.close()

if __name__ == '__main__':
    app.run(debug=True)