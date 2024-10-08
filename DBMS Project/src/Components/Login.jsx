import styles from "./login.module.css"
import logo from "../assets/logo.png"
import googlelogo from "../assets/googlelogo.png"
import { useNavigate } from "react-router-dom"
function Login()
{
   const navigate=useNavigate();
   const handleregister=()=>{
      navigate('/');
   }

   const movetohomepage=()=>{
      navigate('/Home');
   }

    return (
      <div className={styles.loginPage}>
          <header>                              
             <div className={styles.logo}>
                <img src={logo} width="260px" height="67px"  alt="logo"/>
             </div>
             <div className={styles.logreg}>
                <button type="button" className={`${styles.btn} ${styles.btn1}`}>Login</button>
                <button type="button" className={styles.btn} onClick={handleregister}>Register</button>
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
                  <p className={styles.login}>Login</p>
                  <button className={styles.googlebutton}>
                    <img src={googlelogo} alt="google logo"/>
                    <p className={styles.googletext}>Continue in with Google</p>
                  </button>
                  <pre className={styles.orlog}>----------------      or login with email    ---------------</pre>
                  <input className={styles.mail} type="email" id="email" name="email" placeholder="Email" required/><br/>
                  <input className={styles.pass} type="password" id="password" name="password" placeholder="password" required/><br/>
                 <div className={styles.options}>
                    <div className={styles.remember}>
                       <input type="checkbox"/>
                       <p className={styles.down}>Remember</p>
                    </div>
                    <a>Forgot Password</a>
                 </div>
                 <button className={styles.continue} onClick={movetohomepage}>CONTINUE</button>
              </div>
          </div>
      </div>
    );
}

export default Login;