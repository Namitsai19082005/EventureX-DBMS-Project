from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
import random
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)
CORS(app) 

# Generate and store OTPs (in-memory storage for simplicity)
otp_storage = {}

@app.route('/send-otp', methods=['POST'])
def send_otp():
    data = request.json
    recipient_email = data.get('email')

    if not recipient_email:
        return jsonify({'success': False, 'message': 'Email is required'}), 400

    # Generate a 6-digit OTP
    otp = random.randint(100000, 999999)
    otp_storage[recipient_email] = otp

    # Email settings
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    sender_email = "namitsaivaddempudi19082005@gmail.com"
    password = "gyqf ewmk ohtr jfvt"

    # Create the email message
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = recipient_email
    message["Subject"] = "Your OTP for Registration"

    body = f"Your OTP is: {otp}. Please use it to complete your registration."
    message.attach(MIMEText(body, "plain"))

    try:
        # Send email using SMTP server
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, password)
        server.sendmail(sender_email, recipient_email, message.as_string())
        server.quit()

        return jsonify({'success': True, 'message': 'OTP sent successfully'})

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
