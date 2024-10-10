import styles from "./WildbeatsPosts.module.css"
import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx"
import post1 from "../assets/post1.jpg"
import Liking from "../assets/Liking.png"
import share from "../assets/share.png"
import wildbeatslogo from "../assets/wildbeatslogo.png"
import more from "../assets/more.png"
import ClubHeader from "./ClubHeader.jsx"
import Scroll from "./Scroll.jsx"
import SubClub from "./SubClub.jsx"
function WildbeatsPosts(){
  return (
    <div className={styles.wildbeatsposts}>
      <header className={styles.header}>
         <Header></Header>
      </header>
      <div className={styles.side}>
      <div className={styles.sidebar}>
          <Sidebar/>
      </div>
        <div className={styles.header1}>
          <div className={styles.head}>
              <ClubHeader> </ClubHeader>
          </div>
          <div className={styles.totaldiv}>
          <div className={styles.names}>
            <div className={styles.xyz}>
               <div className={styles.scroll}> 
                  <Scroll></Scroll>
               </div>
          </div>
        <div className={styles.total}>
        <div className={styles.post}>
                    <img src={post1} width="380px" height="350px" alt="Wild beats post"/>
                    <div className={styles.text1}>
                        <div className={styles.head1}>
                            <img src={wildbeatslogo} width="48px" height="48px" alt="wildbeats logo"/>
                            <pre className={styles.name1}>  Wildbeats                               </pre>
                            <div className={styles.more}> 
                                <img src={more} width="27.3px" height="5.85px"/>
                                </div>  
                        </div>
                        <div className={styles.text2}>
                            <p> Wildbeats, the cultural club of IIIT Kottayam, celebrates India's diverse festivals and promotes cultural activities. It includes a vibrant dance and music club, a drama club that brings storytelling to life, and an art club that fosters creativity in various forms, making it a hub of artistic expression.</p>
                        </div>
                        <div className={styles.logos}>
                            <div className={styles.Liking}>
                            <img src={Liking} width="35px" height="35px"/></div>
                            <div className={styles.share}><img src={share} width="35px" height="35px"/></div>
                        </div>
                        <div className={styles.textlike}><p> 100 Likes</p></div>
                    </div>

               </div>
               <div className={styles.post2}>
                    <img src={post1} width="380px" height="350px" alt="Wild beats post"/>
                    <div className={styles.text1}>
                        <div className={styles.head1}>
                            <img src={wildbeatslogo} width="48px" height="48px" alt="wildbeats logo"/>
                            <pre className={styles.name1}>  Wildbeats                               </pre>
                            <div className={styles.more}> 
                                <img src={more} width="27.3px" height="5.85px"/>
                                </div>  
                        </div>
                        <div className={styles.text2}>
                            <p> Wildbeats, the cultural club of IIIT Kottayam, celebrates India's diverse festivals and promotes cultural activities. It includes a vibrant dance and music club, a drama club that brings storytelling to life, and an art club that fosters creativity in various forms, making it a hub of artistic expression.</p>
                        </div>
                        <div className={styles.logos}>
                            <div className={styles.Liking}>
                            <img src={Liking} width="35px" height="35px"/></div>
                            <div className={styles.share}><img src={share} width="35px" height="35px"/></div>
                        </div>
                        <div className={styles.textlike}><p>100 Likes </p></div>
                    </div>


                </div>
                </div>
                </div>
                <div className={styles.subclub}> <SubClub></SubClub></div>
      </div>
      </div>
    </div>
    </div>
  )
}
export default WildbeatsPosts;