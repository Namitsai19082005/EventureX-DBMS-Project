import styles from "./Sidebar.module.css"
import home from "../assets/home.png"
import club from "../assets/club.png"
import community from "../assets/community.png"
import logout from "../assets/logout.png"
function Sidebar()
{
    return (
        <div className={styles.SidebarPage}>
             <div className="d-flex flex-column flex-shrink-0 p-3" style={{width: "280px"}}>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className={`nav-item ${styles.items}`}>
        <img className={styles.sidebarimages} src={home}/>
        <a className={`nav-link ${styles.home}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li className={styles.items}>
      <img className={styles.sidebarimages} src={club}/>
        <a className={`nav-link ${styles.community}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Communities
        </a>
      </li>
      <li className={styles.items}>
      <img className={styles.sidebarimages} src={community}/>
        <a className={`nav-link ${styles.club}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          Clubs
        </a>
      </li>
    </ul>
    <div className={`nav-link ${styles.logout}`}>
        <img className={styles.logoutimage} src={logout}/>
        <p className={styles.logouttext}>Logout</p>
    </div>
</div>

        </div>
    );
}

export default Sidebar;