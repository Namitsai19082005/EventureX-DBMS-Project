import styles from "./StudentSearchSidebar.module.css"
import home from "../assets/home.png"
import club from "../assets/club.png"
import community from "../assets/community.png"
import logout from "../assets/logout.png"
import students from "../assets/students.png"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
function StudentSearchSidebar()
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

  const handleStudents=()=>{
    navigate('/StudentSearch');
  }

    return (
        <div className={styles.SidebarPage}>
             <div className="d-flex flex-column flex-shrink-0 p-3" style={{width: "280px"}}>
         <ul className="nav nav-pills flex-column mb-auto">
          <li className={`nav-item ${styles.items}`}>
          <img className={styles.sidebarimages} onClick={handlehome} src={home}/>
          <Link to="/Home"><a href="" className={styles.home}>Home</a></Link>
      </li>
      <li className={styles.items}>
      <img className={styles.sidebarimages} src={community}/>
      <Link to="/Community"><a href="" className={styles.home}>Communities</a></Link>
      </li>
      <li className={styles.items}>
      <img className={styles.sidebarimages} onClick={handleClubs} src={club}/>
      <Link to="/Club"><a href="" className={styles.home}>Clubs</a></Link>
      </li>
      <li className={styles.items}>
      <img className={styles.sidebarimages} src={students}/>
      <Link to="/StudentSearch"><a href="" className={styles.home}>Students</a></Link>
      </li>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <li className={styles.items}>
      <img className={styles.sidebarimages} src={logout} onClick={handlelogout}/>
      <Link to="/Login"><a href="" className={styles.home}>Logout</a></Link>
      </li>
    </ul>
</div>

        </div>
    );
}

export default StudentSearchSidebar;