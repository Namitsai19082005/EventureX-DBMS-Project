import React, { useState,useEffect } from 'react';
import styles from "./Register.module.css";
import logo from "../assets/logo.png";
import student from "../assets/student.png";
import faculty from "../assets/faculty.png";
import { useNavigate } from "react-router-dom";

function Register() 
{
  const [college_email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [college_id, setCollegeId] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpResendTimer, setOtpResendTimer] = useState(60);
  const navigate = useNavigate();
  
  // Timer for OTP resend
  useEffect(() => {
    let timer;
    if (otpSent && otpResendTimer > 0) {
      timer = setInterval(() => setOtpResendTimer((prevTimer) => prevTimer - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [otpSent, otpResendTimer]);

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (otpResendTimer === 0 || !otpSent) {
      // Send OTP request to backend
      fetch('http://localhost:5000/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ college_email: college_email }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setOtpSent(true);  // OTP sent successfully
            setOtpResendTimer(60);  // Reset the resend timer
            alert('OTP sent to your email!');
          } else {
            alert('Error: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate the form inputs
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Check if OTP has been sent and entered
  if (!otp || !otpSent) {
    alert('Please request and enter the OTP');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        college_id: college_id,
        password: password,
        college_email: college_email,
        otp: otp
      }),
    });

    const data = await response.json();

    if (response.status === 201) {
      alert('User registered successfully!');
      navigate('/login');
    } else {
      alert('Error: ' + data.error);
    }
  } catch (err) {
    console.error('Error:', err);
  }
};
    
const handleEmailChange = (e) => {
  setEmail(e.target.value);
  setOtpSent(false); // Reset OTP sent state when email is changed
  setOtpResendTimer(60); // Reset timer when email is changed
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
          <button type="button" className={`${styles.btn} ${styles.btn1} ${styles.contact}`} onClick={() => window.location.href = 'mailto:eventurex123@gmail.com'}>Contact us</button>
        </div>
        <div className={styles.details}>
          <p className={styles.register}>Register</p>
          <div className={styles.role}>
            <div className={styles.pass}>
              <img src={student} alt="student"/>
              <p>Student</p>
            </div>
            <div>
              <img src={faculty} alt="faculty" />
              <p>Faculty</p>
            </div>
          </div>
          <form>
            <input className={styles.mail} type="text" id="collegeid" name="college ID" placeholder="College ID" value={college_id} onChange={(e) => setCollegeId(e.target.value)} required /><br />
            <input 
              className={styles.mail} 
              type="email" 
              id="email"
              name="email" 
              placeholder="College Email" 
              required 
              value={college_email}
              onChange={handleEmailChange} 
            /><br/>
            <p 
              className={styles.otptext} 
              style={{ color: '#FF4081', marginLeft: '150px', cursor: 'pointer' }}
              onClick={handleSendOTP}
              disabled={otpSent && otpResendTimer > 0}  // Disable button while the timer is active
            >
              {otpResendTimer > 0 ? `Resend OTP in ${otpResendTimer}s`: 'Send OTP'}
            </p>
            <div className={styles.otpsec}>
              <input className={styles.otp} type="number" id="otp" name="otp" placeholder="OTP" value={otp}
                onChange={(e) => setOtp(e.target.value)} required /><br />
              <div>
                {otpSent ? <p className={styles.otptext}>We have sent you an OTP to your mail</p> : null}
                {otpResendTimer === 0 ? (
                <p className={styles.otptext} style={{ color: '#FF4081' }} onClick={handleSendOTP}>Resend OTP*</p>
              ) : null}
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