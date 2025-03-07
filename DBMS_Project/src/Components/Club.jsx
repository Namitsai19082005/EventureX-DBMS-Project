import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx"
import styles from "./Club.module.css"
import trendles from "../assets/trendles.png"
import GDU from "../assets/GDUlogo.png"
import CSY from "../assets/CSYLogo.png"
import wildbeats from "../assets/wildbeats.png"
import sporttec from "../assets/sporttec.png"
import betalabs from "../assets/betalabs.png"
import insta from "../assets/insta.png"
import GDSC from "../assets/GDSC.jpg"
import youtube from "../assets/youtube.png"
import { useNavigate } from "react-router-dom"
function Club()
{
    const  navigate=useNavigate();

    const handleClubs=()=>{
        navigate('/ClubEvents');
    }

    const handleyoutube=()=>{
        window.open("https://www.youtube.com/@wildbeatsiiitkculturalclub1335*");
    }

    const handleinsta=()=>{
        window.open("https://www.instagram.com/wildbeats_iiitk/");
    }

    return (
        <div className={styles.ClubPage}>
            <header className={styles.header}>
                <Header></Header>
            </header>
            <div className={styles.clubcontent}>
                <div className={styles.sidebar}>
                   <Sidebar/>
                </div>
               <div>
                   <div className={styles.clubs} onClick={handleClubs}>
                       <div className={styles.image}>
                           <img src={wildbeats} alt="wildbeats"/>
                       </div>
                       <div>
                           <p className={styles.bigtext}>WildBeats<br/> Cultural Club of IIITK</p>
                           <p className={styles.smalltext}>Wildbeats, the cultural club of IIIT Kottayam, celebrates India's diverse
                           festivals and promotes cultural activities. It includes a vibrant dance and music club, a drama club that brings storytelling to life, and an art club that fosters creativity in various forms, making it a hub of artistic expression</p>
                           <div className={styles.media}> 
                              <img src={youtube} onClick={handleyoutube}/>
                              <img src={insta} onClick={handleinsta}/>
                           </div>
                       </div>
                   </div>
                   <div className={styles.clubs} onClick={handleClubs}>
                       <div className={styles.image}>
                          <img src={trendles} alt="trendles"/>
                       </div>
                       <div>
                          <p className={styles.bigtext}>Trendles<br/>Social Club of IIITK</p>
                          <p className={styles.smalltext}> Trendles Club fosters personal growth through diverse activities, helping students pursue their dreams. Under its umbrella, clubs cater to photography (Chitrachaya), literature (Litsoc, Literary Club), design, PR, finance, outreach, social impact, and entrepreneurship, offering hands-on experience, creativity, and skill development across multiple domains.</p>
                          <div className={styles.media}> 
                              <img src={youtube}/>
                              <img src={insta}/>
                           </div>
                       </div>
                   </div>
                   <div className={styles.clubs} onClick={handleClubs}>
                       <div className={styles.image}>
                           <img src={sporttec} alt="sporttec"/>
                       </div>
                       <div>
                          <p className={styles.bigtext}>Sportec<br/>Sports Club of IIITK</p>
                          <p className={styles.smalltext}> Sportec handles all the details for team sports like table tennis chess as well as individual competitions like cricket, soccer, football, and volleyball. Be aware that Sportec is going to sparkle when the whistle blows and when voices can be heard hundreds of meters from the stadium!</p>
                          <div className={styles.media}> 
                              <img src={youtube}/>
                              <img src={insta}/>
                           </div>
                       </div>
                   </div>
                   <div className={styles.clubs} onClick={handleClubs}>
                       <div className={styles.image}>
                           <img src={betalabs} alt="betalabs"/>
                       </div>
                       <div>
                          <p className={styles.bigtext}>Betalabs<br/>Technical Club of IIITK</p>
                          <p className={styles.smalltext}>The Beta Labs at IIIT Kottayam are a thriving group of like-minded people who are enthusiastic about technology and its endless possibilities.</p>
                          <div className={styles.media}> 
                              <img src={youtube}/>
                              <img src={insta}/>
                           </div>
                       </div>
                   </div>
                   <div className={styles.clubs} onClick={handleClubs}>
                       <div className={styles.image}>
                           <img src={GDSC} alt="GDSC"/>
                       </div>
                       <div>
                          <p className={styles.bigtext}>GDSC<br/>Google Dev of IIITK</p>
                          <p className={styles.smalltext}>Google Developer Groups (GDG) offer a platform to connect with developers and technologists from diverse backgrounds and industries. Participants can learn new skills through hands-on workshops, training, and events, both online and in person.</p>
                          <div className={styles.media}> 
                              <img src={youtube}/>
                              <img src={insta}/>
                           </div>
                       </div>
                   </div>
                   <div className={styles.clubs} onClick={handleClubs}>
                       <div className={styles.image}>
                           <img src={CSY} alt="CSY"/>
                       </div>
                       <div>
                          <p className={styles.bigtext}>Cyber Security Club of IIITK</p>
                          <p className={styles.smalltext}>The Cyber Security Club of IIIT Kottayam is the largest departmental club, boasting a community of over 100 members dedicated to cybersecurity awareness and skill development.</p>
                          <div className={styles.media}> 
                              <img src={youtube}/>
                              <img src={insta}/>
                           </div>
                       </div>
                   </div>
                   <div className={styles.clubs} onClick={handleClubs}>
                       <div className={styles.image}>
                           <img src={GDU} alt="GDU"/>
                       </div>
                       <div>
                          <p className={styles.bigtext}>GDU<br/>Game Dev Club of IIITK</p>
                          <p className={styles.smalltext}>Game Dev Utopia (GDU) is a vibrant community of passionate developers and designers, specializing in game creation with Unity and Godot, while mastering tools like Blender, Aseprite, and frameworks</p>
                          <div className={styles.media}> 
                              <img src={youtube}/>
                              <img src={insta}/>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    );
}

export default Club;