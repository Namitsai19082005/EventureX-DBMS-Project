import styles from "./ClubHeader.module.css"
import wildbeats from "../assets/wildbeats.png"
function ClubHeader()
{
    const handleJoinClick = () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSf5fHfAavbTRWmX95sPPEiLreqmWAP3-oDUkCR-xJIZ31Edow/viewform?usp=sf_link", "_blank");
      };
    return (
        <div className={styles.clubheader}>
            <div className={styles.image}>
                <img src={wildbeats} height="100px" alt="wildbeats"/>
            </div>
            <div className={styles.content}>
                <p className={styles.bigtext}>WildBeats<br/> Cultural Club of IIITK</p>
            </div>
            <div>
            <button type="button" className={`${styles.btn} ${styles.btn1}`} onClick={handleJoinClick}>Join</button>
            </div>
        </div>
    );
}

export default ClubHeader;