import mysql.connector

# Connect to MySQL server
mydb = mysql.connector.connect(
  host="localhost",
  user="root",  # Replace with your MySQL username
  password="Namit#123"  # Replace with your MySQL password
)

# Create a database
cursor = mydb.cursor()
cursor.execute("CREATE DATABASE IF NOT EXISTS club_management")

# Switch to the newly created database
cursor.execute("USE club_management")


# Create a table for user registration and login with college_id instead of email
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    college_id VARCHAR(255) UNIQUE,
    college_email VARCHAR(255) ,
    password VARCHAR(255),
    otp VARCHAR(6),
    otp_verified BOOLEAN DEFAULT FALSE,
    date_registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
""")

# Commit changes and close the connection
mydb.commit()
cursor.close()


print("Database and users table with college_id created successfully.")

cursor = mydb.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS allowed_roll_numbers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    college_id VARCHAR(255) UNIQUE
)
""")

# Add some test roll numbers (you can replace these with actual roll numbers)
cursor.execute("INSERT IGNORE INTO allowed_roll_numbers (college_id) VALUES ('2023BCD0041'), ('2023BCD0065'), ('2023BCY0029'), ('2023BCS0176'), ('2023BCY0032')")

# Commit changes and close the connection
mydb.commit()
cursor.close()
mydb.close()

print("Table 'allowed_roll_numbers' created and sample roll numbers inserted successfully.")
