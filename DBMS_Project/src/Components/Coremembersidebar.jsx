import styles from "./Coremembersidebar.module.css"
import home from "../assets/home.png"
import club from "../assets/club.png"
import community from "../assets/community.png"
import wildbeatslogo from "../assets/wildbeatslogo.png"
import logout from "../assets/logout.png"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
function Coremembersidebar()
{
  const navigate=useNavigate();

  const handleClubs=()=>{
    navigate('/Club');
  }

  const handlelogout=()=>{
      navigate('/login');
  }

  const handlehome=()=>{
      navigate('/Home');
  }

    return (
        <div className={styles.SidebarPage}>
             <div className="d-flex flex-column flex-shrink-0 p-3" style={{width: "280px"}}>
         <ul className="nav nav-pills flex-column mb-auto">
         <li className={styles.items}>
          <img className={styles.sidebarimages} onClick={handlehome} src={home}/>
          <Link to="/Home"><a href="" className={styles.home}>Home</a></Link>
      </li>
      <li className={styles.items}>
      <img className={styles.sidebarimages} src={community}/>
      <Link to=""><a href="" className={styles.home}>Communities</a></Link>
      </li>
      <li className={styles.items}>
      <img className={styles.sidebarimages} onClick={handleClubs} src={club}/>
      <Link to="/Club"><a href="" className={styles.home}>Clubs</a></Link>
      </li>
      <br/><br/><br/>
      <div className={styles.box}>
          <p className={styles.text1}>Your Club</p>
          <img className={styles.image} src={wildbeatslogo}/>
          <p className={styles.text2}>Music</p>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <li className={styles.items}>
      <img className={styles.sidebarimages} src={logout} onClick={handlelogout}/>
      <Link to="/Login"><a href="" className={styles.home}>Logout</a></Link>
      </li>
    </ul>
</div>

        </div>
    );
}

export default Coremembersidebar;