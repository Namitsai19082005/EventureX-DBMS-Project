import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx"
import styles from "./HomePage.module.css"
import hero_container from "../assets/hero_container.jpg"
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"
import card4 from "../assets/card4.png"
import post1 from "../assets/post1.jpg"
import wildbeatslogo from "../assets/wildbeatslogo.png"
import more from "../assets/more.png"
import Liking from "../assets/Liking.png"
import share from "../assets/share.png"
import { useNavigate } from "react-router-dom"
function HomePage()
{
    const  navigate=useNavigate();
    const handleevents=()=>{
        navigate('/ClubEvents');
    }

    const handleposts=()=>{
        navigate('/Post');
    }
     return(
        <div className={styles.Homepage}>
            <header className={styles.header}>
                <Header></Header>
            </header>
            <div className={styles.displayx}>
                <div className={styles.sidebar}>
                   <Sidebar/>
                </div>
                <div className={styles.events}>

                   <div className={styles.PastEvents}>
                        <img src={hero_container} width="1225px" height="492px" alt="debate and quizzing"/>
                   </div>
                   <div className={styles.textbox} onClick={handleevents}>
                        <p className={styles.text}>Upcoming Events</p>
                   </div>
                   <div className={styles.upcomingevents}>
                    <div className="card" style={{background:`black`,width:`250px`, height:`100%`, margin: `0px 0px 0px 25px `}}>
                        <img src={card1} className="cardimg" alt="Innovis ideathon"/>
                        <div className={`card-body ${styles.card_body}`}>
                            <h5 className="card-title"><div className={styles.card_title}> Innovis Ideathon</div></h5>
                            <p className={`card-text ${styles.card_text}`}>
                                <div className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-fire" viewBox="0 0 16 16">
  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
</svg></div>
                                <div className={styles.participant}>212 participants</div>
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{background:`black`,width:`250px`, height:`175px`, margin: `0px 0px 0px 25px `}}>
                        <img src={card2} className="cardimg" alt="Captute The Flag"/>
                        <div className={`card-body ${styles.card_body}`}>
                            <h5 className="card-title"><div className={styles.card_title}> Capture The Flag</div></h5>
                            <p className={`card-text ${styles.card_text}`}>
                                <div className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-fire" viewBox="0 0 16 16">
  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
</svg></div>
                                <div className={styles.participant}>212 participants</div>
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{background:`black`,width:`250px`, height:`175px`, margin: `0px 0px 0px 25px `}}>
                        <img src={card3} className="cardimg" alt="Runaway Regs"/>
                        <div className={`card-body ${styles.card_body}`}>
                            <h5 className="card-title"><div className={styles.card_title}> Runaway Regs</div></h5>
                            <p className={`card-text ${styles.card_text}`}>
                                <div className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-fire" viewBox="0 0 16 16">
  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
</svg></div>
                                <div className={styles.participant}>212 participants</div>
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{background:`black`,width:`250px`, height:`175px`, margin: `0px 0px 0px 25px `}}>
                        <img src={card4} className="cardimg" alt="Strings and Keys"/>
                        <div className={`card-body ${styles.card_body}`}>
                            <h5 className="card-title"><div className={styles.card_title}> Strings and Keys</div></h5>
                            <p className={`card-text ${styles.card_text}`}>
                                <div className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-fire" viewBox="0 0 16 16">
  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
</svg></div>
                                <div className={styles.participant}>212 participants</div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.posts} onClick={handleposts}>
                    Posts
                </div>
                <div className={styles.post}>
                    <img src={post1} width="600px" height="450px" alt="Wild beats post"/>
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
                            
                        </div>
                        <div onClick={handleposts}><a href="">view more...</a></div>
                    </div>


                </div>
            </div>  
 
        </div >
        </div>
     )
}

export default HomePage;
