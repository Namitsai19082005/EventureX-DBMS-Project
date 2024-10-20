import styles from "./login.module.css"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
function Login()
{
   const [college_id, setCollegeId] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
   const navigate = useNavigate();

   const handleregister=()=>{
      navigate('/');
   }
   
   const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from refreshing
    setLoading(true); // Set loading state
    console.log("Login data:", { college_id, password });
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
        setLoading(false); // Remove loading state
        if (data.message === 'Login successful') {
            localStorage.setItem('college_id', college_id);
            localStorage.setItem('email', data.user.email);
            alert('Login successful!');
            navigate('/Home');
        } else {
            setError(data.error || 'Login failed');
        }
    })
    .catch((error) => {
        setLoading(false);
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
                <button type="button" className={`${styles.btn} ${styles.btn1} ${styles.contact}`} onClick={() => window.location.href = 'mailto:eventurex123@gmail.com'}>Contact us</button>
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
                    <a href="/forgot-password">Forgot Password?</a> {/* Update with real link */}
                 </div>
                 <button className={styles.continue} type="submit" disabled={loading}>
                 {loading ? 'Logging in...' : 'CONTINUE'}
                </button>

                  </form>
                  {error && <p className={styles.error}>{error}</p>} {/* Show error message if any */}
              </div>
          </div>
      </div>
    );
}

export default Login;