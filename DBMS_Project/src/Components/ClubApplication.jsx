import styles from "./ClubApplication.module.css"
import Header from "./Header.jsx"
import Coremembersidebar from "./Coremembersidebar.jsx"
import Scroll from "./Scroll.jsx"
import SubClubHeader from "./SubClubHeader.jsx"
import Coremembermanage from "./Coremembermanage.jsx"
import person1 from "../assets/person1.png"
import uploadr from "../assets/uploadr.png"
function ClubApplication(){
    return(
        <div className={styles.clubapp}>
            <header className={styles.header}>
                <Header></Header>
            </header>
            <div className={styles.Clubcontent}>
                <div className={styles.sidebar}>
                   <Coremembersidebar/>
                </div>
                <div>
                   <SubClubHeader></SubClubHeader>
                   <div className={styles.content}>
                       <div>
                           <Scroll></Scroll>
                           <div className={styles.participant}>
                            <div className={styles.name}>
                                <div style={{margin: `18px 18px 18px 18px `}}><img src={person1} height="71px" width="71px"/></div>
                                <div style={{margin:`18px 18px 18px 18px`}}>
                                    <h2><b>Drummer Aditya</b></h2>
                                    <h4><b>2023BCS0176</b></h4>
                                    <div className={styles.sk}><h3>Skills :</h3>
                                    <div className={styles.res}><h3>Resume :</h3><img src={uploadr} width="25px" height="25px" style={{margin:`8px 10px 0px 30px`}}/><p className={styles.pdf}>resume.pdf</p><div className={styles.pink1}>
            <a href=""> <h2 style={{marginTop:`0px`,marginLeft:`30px`}}> Approve </h2> </a>
          </div></div></div>
                                </div>
                            </div>
                            <div className={styles.det}></div>
                           </div>
                        </div>
                       <div>
                           <Coremembermanage></Coremembermanage>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    );
}
export default ClubApplication;