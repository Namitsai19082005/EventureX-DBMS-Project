import React, { useState } from 'react';
import styles from "./Register.module.css";
import logo from "../assets/logo.png";
import student from "../assets/student.png";
import faculty from "../assets/faculty.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [collegeId, setCollegeId] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    
    // Send OTP request to backend
    fetch('http://localhost:5000/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ college_email: email }),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setOtpSent(true);  // OTP sent successfully
        alert('OTP sent to your email!');
      } else {
        alert('Error: ' + data.message);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form inputs
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Send registration request to backend
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        college_id: collegeId,
        college_email: email,
        otp: otp,
        password: password,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Registration successful!');
        navigate('/login');  // Redirect to login page
      } else {
        alert('Error: ' + data.message);
        navigate('/login');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const handlelogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.registerPage}>
      <header>                              
        <div className={styles.logo}>
          <img src={logo} width="260px" height="67px" alt="logo" />
        </div>
        <div className={styles.logreg}>
          <button type="button" className={styles.btn} onClick={handlelogin}>Login</button>
          <button type="button" className={`${styles.btn} ${styles.btn1}`}>Register</button>
        </div>
      </header>
      <div className={styles.mainpage}>
        <div className={styles.clubphoto}>
          <p className={styles.where}>Where</p>
          <p className={styles.Club}>Clubs Meet</p>
          <p className={styles.iiitk}>IIITK'S CLUB Management Portal</p>
          <button type="button" className={`${styles.btn} ${styles.btn1} ${styles.contact}`}>Contact us</button>
        </div>
        <div className={styles.details}>
          <p className={styles.register}>Register</p>
          <div className={styles.role}>
            <div className={styles.pass}>
              <img src={student} alt="student" />
              <p>Student</p>
            </div>
            <div>
              <img src={faculty} alt="faculty" />
              <p>Faculty</p>
            </div>
          </div>
          <form>
            <input className={styles.mail} type="id" id="collegeid" name="college ID" placeholder="College ID" value={collegeId} onChange={(e) => setCollegeId(e.target.value)} required /><br />
            <input 
              className={styles.mail} 
              type="email" 
              id="email"
              name="email" 
              placeholder="College Email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            /><br />
            <p 
              className={styles.otptext} 
              style={{ color: '#FF4081', marginLeft: '150px', cursor: 'pointer' }}
              onClick={handleSendOTP}
            >
              Send OTP
            </p>
            <div className={styles.otpsec}>
              <input className={styles.otp} type="number" id="otp" name="otp" placeholder="OTP" value={otp}
                onChange={(e) => setOtp(e.target.value)} required /><br />
              <div>
                {otpSent ? <p className={styles.otptext}>We have sent you an OTP to your mail</p> : null}
                <p className={styles.otptext} style={{ color: '#FF4081' }} onClick={handleSendOTP}>Resend OTP*</p>
              </div>
            </div>
            <div className={styles.passsec}>
              <input className={styles.pass} type="password" id="password" name="password" placeholder="Password"  value={password}
                onChange={(e) => setPassword(e.target.value)} required /><br />
              <input className={styles.reppass} type="password" id="repeatpassword" name="password" placeholder="Repeat password" value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} required /><br />
            </div>
            <button className={styles.continue} onClick={handleSubmit}>CONTINUE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
