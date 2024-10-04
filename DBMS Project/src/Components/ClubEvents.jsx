import styles from "./ClubEvents.module.css"
import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx"
import Scroll from "./Scroll.jsx"
import ClubHeader from "./ClubHeader.jsx"
import SubClub from "./SubClub.jsx"
function ClubEvents()
{
    return (
        <div className={styles.clubevents}>
            <header>
                <Header></Header>
            </header>
            <div className={styles.clubeventscontent}>
                <Sidebar></Sidebar>
                <div>
                   <ClubHeader></ClubHeader>
                   <div className={styles.content}>
                       <div>
                           <Scroll></Scroll>
                            <div className={styles.performance}>
                            <div className={styles.bandimg}>
                            <div className={styles.textrunaway}>
                                <h1> RUNAWAY </h1>
                                <h1> REGS </h1>
                            </div>
                            </div>
                            </div>
                            <div className={styles.participate}>
                            <div className={styles.pink1}>
                                <a href=""> <h2 style={{marginTop:`5px`}}> RSVP </h2> </a>
                            </div>
                            <div className={styles.pink2}>
                                <a href=""> <h3 style={{marginTop:`10px`}}> VOLUNTEER </h3> </a>
                            </div>
                            </div>
                            <div className={styles.performance}>
                            <div className={styles.bandimg}>
                            <div className={styles.textrunaway}>
                                <h1> RUNAWAY </h1>
                                <h1> REGS </h1>
                            </div>
                            </div>
                            </div>
                            <div className={styles.participate}>
                            <div className={styles.pink1}>
                                <a href=""> <h2 style={{marginTop:`5px`}}> RSVP </h2> </a>
                            </div>
                            <div className={styles.pink2}>
                                <a href=""> <h3 style={{marginTop:`10px`}}> VOLUNTEER </h3> </a>
                            </div>
                            </div>
                       </div>
                       <div>
                           <SubClub></SubClub>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default ClubEvents;
