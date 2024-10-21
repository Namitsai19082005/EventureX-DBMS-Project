import { useState, useEffect } from "react";
import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx"
import styles from "./HomePage.module.css"
import hero_container1 from "../assets/hero_container1.jpg";
import hero_container2 from "../assets/hero_container2.jpg";
import hero_container3 from "../assets/hero_container3.jpg";
import hero_container4 from "../assets/hero_container4.jpg";
import hero_container5 from "../assets/hero_container5.jpg";
import more from "../assets/more.png"
import post1 from "../assets/post1.jpg"
import wildbeatslogo from "../assets/wildbeatslogo.png"
import { useNavigate } from "react-router-dom"

function HomePage({ events, posts}) {
    const navigate = useNavigate();

    const handleevents = () => {
        navigate('/ClubEvents');
    }

    const handleposts = () => {
        navigate('/Post');
    }
    
    // Array of images for the hero container
  const images = [
    hero_container1,
    hero_container2,
    hero_container3,
    hero_container4,
    hero_container5
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to swap images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

    return (
        <div className={styles.Homepage}>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.displayx}>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.content}>
                    <div className={styles.events}>
                    <div className={styles.PastEvents}>
                    <img src={images[currentImageIndex]} width="900px" height="492px" alt="event"/>
                   </div>
                        <div className={styles.textbox} onClick={handleevents}>
                            <p className={styles.text}>Upcoming Events</p>
                        </div>

                        <div className={styles.upcomingevents}>
                            {events.length > 0 ? (
                                events.map((event, index) => (
                                    <div
                                        key={index}
                                        className={`card ${styles.card1}`}
                                        style={{ background: `black`, width: `250px`, height: `175px`, margin: `0px 0px 0px 25px` }}
                                    >
                                        <img src={event.coverImage || more} className="cardimg" alt={event.title} />
                                        <div className={`card-body ${styles.card_body}`}>
                                            <h5 className="card-title">
                                                <div className={styles.card_title}>{event.title}</div>
                                            </h5>
                                            <p className={`card-text ${styles.card_text}`}>
                                                <div className={styles.date}>{event.date}</div>
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className={styles.text2}>No upcoming events</p>
                            )}
                        </div>
                    </div>
                    <div className={styles.BlackBG}>
                        <div className={styles.posts}>
                        <h2 onClick={handleposts}>Posts</h2>
                        </div>
                        {posts.length > 0 ? (
                            posts.map((post, index) => (
                                <div key={index} className={styles.post}>
                                    <img src={post.image || post1} width="600px" height="450px" alt="Post" />
                                    <div className={styles.text1}>
                                        <div className={styles.head1}>
                                            <img src={wildbeatslogo} width="48px" height="48px" alt="wildbeats logo"/>
                                            <pre className={styles.name1}>  Wildbeats  </pre> 
                                        </div>
                                        <div className={styles.text2}>
                                            <p className={styles.desc}>{post.description}</p>
                                        </div>
                                        <div onClick={handleposts}><a href="" style={{marginLeft:"10px"}}>view more...</a></div>
                                        
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className={styles.text3}>No posts available</p>
                        )}
                    </div>
                    </div>
                </div>  
            </div>
     )
}

export default HomePage;
