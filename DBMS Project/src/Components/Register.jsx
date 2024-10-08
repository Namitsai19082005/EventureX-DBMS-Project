import styles from "./Register.module.css"
import logo from "../assets/logo.png"
import googlelogo from "../assets/googlelogo.png"
import student from "../assets/student.png"
import faculty from "../assets/faculty.png"
import { useNavigate } from "react-router-dom"
function Register()
{
  const navigate=useNavigate();

   const handlelogin=()=>{
     navigate('/login');
   }
    return (
      <div className={styles.registerPage}>
          <header>                              
             <div className={styles.logo}>
                <img src={logo} width="260px" height="67px"  alt="logo"/>
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
                  <button className={styles.googlebutton}>
                    <img src={googlelogo} alt="google logo"/>
                    <p className={styles.googletext}>Continue in with Google</p>
                  </button>
                  <pre className={styles.orlog}>----------------      or login with email    ---------------</pre>
                  <div className={styles.role}>
                    <div className={styles.pass}>
                        <img src={student}/>
                        <p>Student</p>
                    </div>
                    <div>
                        <img src={faculty}/>
                        <p>Faculty</p>
                    </div>
                  </div>
                  <input className={styles.mail} type="id" id="collegeid" name="college ID" placeholder="College ID" required/><br/>
                  <input className={styles.mail} type="email" id="email" name="email" placeholder="College Email" required/><br/>
                  <div className={styles.otpsec}>
                    <input className={styles.otp} type="password" id="password" name="password" placeholder="OTP" required/><br/>
                    <div>
                        <p className={styles.otptext}>We have sent you an otp to your mail</p>
                        <p className={styles.otptext} style={{color: '#FF4081'}}>Resend OTP*</p>
                    </div>
                  </div>
                  <div className={styles.passsec}>
                     <input className={styles.pass} type="password" id="password" name="password" placeholder="password" required/><br/>
                     <input className={styles.reppass} type="password" id="password" name="password" placeholder="Repeat password" required/><br/>
                  </div>
                 <button className={styles.continue} onClick={handlelogin}>CONTINUE</button>
              </div>
          </div>
      </div>
    );
}

export default Register;