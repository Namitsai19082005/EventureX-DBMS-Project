import styles from "./Sidebar.module.css"
import home from "../assets/home.png"
import club from "../assets/club.png"
import community from "../assets/community.png"
import logout from "../assets/logout.png"
import { useNavigate } from "react-router-dom"
function Sidebar()
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
          <button className={`nav-link ${styles.home}`} onClick={handlehome}>Home</button>
      </li>
      <li className={styles.items}>
      <img className={styles.sidebarimages} src={community}/>
        <button className={`nav-link ${styles.community}`}>Communities</button>
      </li>
      <li className={styles.items}>
      <img className={styles.sidebarimages} onClick={handleClubs} src={club}/>
        <button className={`nav-link ${styles.club}`} onClick={handleClubs}>Clubs</button>
      </li>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <li className={styles.items}>
      <img className={styles.sidebarimages} src={logout} onClick={handlelogout}/>
        <button className={`nav-link ${styles.club}`} onClick={handlelogout}>Logout</button>
      </li>
    </ul>
</div>

        </div>
    );
}

export default Sidebar;