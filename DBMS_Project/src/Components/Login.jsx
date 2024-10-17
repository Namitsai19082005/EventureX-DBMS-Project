import styles from "./login.module.css"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
function Login()
{
   const [college_id, setCollegeId] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const navigate = useNavigate();

   const handleregister=()=>{
      navigate('/');
   }
   
   const handleLogin = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    console.log("Login data:", { college_id, password }); // Debugging line

    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            college_id: college_id,
            password: password
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Response from server:", data); // Debugging line

        if (data.message === 'Login successful') {
            alert('Login successful!'); // Optional alert
            navigate('/Home'); // Navigate to the Home page
        } else {
            alert('Error: ' + data.error); // Show error message
            setError(data.error);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred during login.');
    });
};


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
                  <form onSubmit={handleLogin}>
                  <input className={styles.mail} type="text" id="collegeid" name="College Id" placeholder="College ID" value={college_id} 
                        onChange={(e) => setCollegeId(e.target.value)}  required/><br/>
                  <input className={styles.pass} type="password" id="password" name="password" placeholder="password" value={password} 
                        onChange={(e) => setPassword(e.target.value)} required/><br/>
                 <div className={styles.options}>
                    <div className={styles.remember}>
                       <input type="checkbox"/>
                       <p className={styles.down}>Remember</p>
                    </div>
                    <a>Forgot Password</a>
                 </div>
                 <button className={styles.continue} type="submit">CONTINUE</button>
                  </form>
                  {error && <p className={styles.error}>{error}</p>} {/* Show error message if any */}
              </div>
          </div>
      </div>
    );
}

export default Login;