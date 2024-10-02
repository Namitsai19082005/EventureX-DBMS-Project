import styles from "./Header.module.css"
import logo from "../assets/logo.png"
import notification from "../assets/notification.png"
import setting from "../assets/setting.png"
import profile from "../assets/profile.png"
function Header()
{
    return (
        <div className={styles.HeaderPage}>
             <header className={styles.headhome}>                              
                 <div className={styles.logo}>
                    <img src={logo} width="260px" height="67px"  alt="logo"/>
                 </div>
                 <div className={styles.searchbar}>
                    <div className={styles.searchicon}>
                        <i className="fa-solid fa-magnifying-glass"></i>   
                    </div>
                    <div>
                        <input className={styles.searchinput} type="text" name="search" placeholder="Search events or clubs"/>
                    </div>
                 </div>
                 <div className={styles.notifications}>
                    <img className={styles.images}  src={notification} alt="notification"/>
                 </div>
                 <div className={styles.settings}>
                    <img className={styles.images} src={setting} alt="setting"/>
                 </div>
                 <div className={styles.profile}>
                    <img className={styles.images} src={profile} height="50px" alt="profile"/>
                 </div>
             </header>
        </div>
    );
}

export default Header;