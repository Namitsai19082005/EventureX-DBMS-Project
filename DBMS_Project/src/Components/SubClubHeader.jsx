import styles from "./SubClubHeader.module.css"
import wildbeats from "../assets/wildbeats.png"
function SubClubHeader()
{
    return (
        <div className={styles.clubheader}>
            <div className={styles.image}>
                <img src={wildbeats} height="100px" alt="wildbeats"/>
            </div>
            <div className={styles.content}>
                <p className={styles.bigtext}>Music Club of IIITK</p>
            </div>
        </div>
    );
}

export default SubClubHeader;