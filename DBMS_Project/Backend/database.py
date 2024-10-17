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
    password VARCHAR(255),
    college_email VARCHAR(255),
    date_registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    otp VARCHAR(6)
)
""")

# Commit changes and close the connection
mydb.commit()
cursor.close()
mydb.close()

print("Database and users table with college_id created successfully.")