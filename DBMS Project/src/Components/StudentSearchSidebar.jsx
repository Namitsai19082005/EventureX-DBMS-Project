import styles from "./StudentSearchSidebar.module.css"
import home from "../assets/home.png"
import club from "../assets/club.png"
import community from "../assets/community.png"
import logout from "../assets/logout.png"
import students from "../assets/students.png"
function StudentSearchSidebar()
{
    return (
        <div className={styles.SidebarPage}>
             <div className="d-flex flex-column flex-shrink-0 p-3" style={{width: "280px"}}>
         <ul className="nav nav-pills flex-column mb-auto">
          <li className={`nav-item ${styles.items}`}>
          <img className={styles.sidebarimages} src={home}/>
          <a className={`nav-link ${styles.home}`} aria-current="page">
          Home
          </a>
      </li>
      <li className={styles.items}>
      <img className={styles.sidebarimages} src={community}/>
        <a className={`nav-link ${styles.community}`}>
          Communities
        </a>
      </li>
      <li className={styles.items}>
      <img className={styles.sidebarimages} src={club}/>
        <a className={`nav-link ${styles.club}`}>
          Clubs
        </a>
      </li>
      <li className={styles.items}>
      <img className={styles.sidebarimages} src={students}/>
        <a className={`nav-link ${styles.students}`}>
          Students
        </a>
      </li>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <li className={styles.items}>
      <img className={styles.sidebarimages} src={logout}/>
        <a className={`nav-link ${styles.club}`}>
          Logout
        </a>
      </li>
    </ul>
</div>

        </div>
    );
}

export default StudentSearchSidebar;