import Header from "./Header.jsx";
import profilebg from "../assets/profilebg.png"
import styles from "./Profile.module.css"
import wbbadge from "../assets/wbbadge.png"
import trendle from "../assets/trendle.png"
import gdscbadge from "../assets/gdscbadge.png"
import apporv from "../assets/apporv.png"
import event from "../assets/event.png"
function ProfilePage()
{
    return (
        <div className={styles.profilepage}>
            <header>
                <Header></Header>
            </header>
            <div className={styles.profile}>
                <img src={profilebg} width="100%" alt="profilebg"/>
                <img/>
                <p className={styles.name}>Drummer Aditya</p>
                <p className={styles.rno}>2023BEC0038</p>
                <p className={styles.club}>WildBeats Member - Trendles Member</p>

                <div className={styles.badges}>
                
                <div className="card" style={{margin: "20px 0 0 0",background: "black",width: "10rem"}}>
                <img src={wbbadge} className={styles.cardimg} alt="wildbeatsbadge"/>
                <div className="card-body">
               <p className="card-text" style={{color: "white"}}>Wildbeats Badge</p>
               </div>
               </div>
                 
                <div className="card" style={{margin: "20px 0 0 0",background: "black",width: "10rem"}}>
                <img src={trendle} className={styles.cardimg} alt="trendlebadge"/>
                <div className="card-body">
               <p className="card-text" style={{color: "white"}}>Trendles Badge</p>
               </div>
               </div>

                <div className="card" style={{margin: "20px 0 0 0",background: "black",width: "10rem"}}>
                <img src={gdscbadge} className={styles.cardimg} alt="gdscbadge"/>
                <div className="card-body">
               <p className="card-text" style={{color: "white"}}>GDSC Badge</p>
               </div>
               </div>

                <div className="card" style={{margin: "20px 0 0 0",background: "black",width: "10rem"}}>
                <img src={apporv} className={styles.cardimg} alt="apporvbadge"/>
                <div className="card-body">
               <p className="card-text" style={{color: "white"}}>Apoorv Volunteer</p>
               </div>
               </div>
               
               
               </div>
                
            </div>
            <div className={styles.about}>
                <p>About</p>
            </div>
            <div className={styles.desc}>
                <p style={{color: "white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                <div className={styles.details}>
                    <p className={styles.detailstext}>Mail:</p>
                    <p className={styles.detailstext}>Mobile Number:</p>
                    <p className={styles.detailstext}>Website:</p>
                    <p className={styles.detailstext}>Resume:</p>
                </div>
            </div>
            <div className={styles.about}>
                <p>Past Experiences</p>
            </div>
            <div className={styles.event}>
                <img src={event} alt="event"/>
                <div className={styles.eventcontent}>
                    <p className={styles.bigtext}>Event Name</p>
                    <p className={styles.smalltext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;