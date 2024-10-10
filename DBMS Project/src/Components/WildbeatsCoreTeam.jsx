import styles from "./WildbeatsCoreTeam.module.css"
import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx"
import person1 from "../assets/person1.png"
import person2 from "../assets/person2.png"
import SubClub from "./SubClub.jsx"
import Scroll from "./Scroll.jsx"
import ClubHeader from "./ClubHeader.jsx"
function WildbeatsCoreTeam()
{
    return(
        <div className={styles.WildbeatsCoreTeamPage}>
            <header className={styles.header}>
                <Header></Header>
            </header>
            <div className={styles.WildbeatsCoreTeamContent}>
                <div className={styles.sidebar}>
                   <Sidebar/>
                </div>
               <div className={styles.display}>
                <div className={styles.head}>
                    <ClubHeader></ClubHeader>
                </div>
                <div className={styles.brief}>
                    <div className={styles.headings}>
                        <Scroll></Scroll>
                        <div className={styles.desc}>
                            <div className={styles.names}>
                                <div>
                                    <div className={styles.name1}><b>Drummer Aditya</b></div>
                                    <div className={styles.position}>Lead</div>
                                </div>
                                <div className={styles.profileimg}><img src={person1} width="100px" height="100px"/></div>
                            </div>
                            <div className={styles.names}>
                                 <div>
                                    <div className={styles.name2}><b>Namith Sai</b></div>
                                    <div className={styles.position}>Core Member</div>
                                </div>
                                <div className={styles.profileimg}><img src={person2} width="100px" height="100px"/></div>
                            </div>
                            <div className={styles.names}>
                                <div>
                                    <div className={styles.name3}><b>Pavan Sai</b></div>
                                    <div className={styles.position}>Core Member</div>
                                </div>
                                <div className={styles.profileimg}><img src={person2} width="100px" height="100px"/></div>
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
export default WildbeatsCoreTeam;