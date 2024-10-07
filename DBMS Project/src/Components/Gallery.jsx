import styles from "./Gallery.module.css"
import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx"
import Scroll from "./Scroll.jsx"
import ClubHeader from "./ClubHeader.jsx"
import SubClub from "./SubClub.jsx"
import gal1 from '../assets/gal1.png'
import gal2 from '../assets/gal2.png'
import gal4 from '../assets/gal4.png'
import gal5 from '../assets/gal5.png'
import gal6 from '../assets/gal6.png'

function Gallery()
{
    return (
        <div className={styles.galleryevents}>
            <header>
                <Header></Header>
            </header>
            <div className={styles.galleryeventscontent}>
                <Sidebar></Sidebar>
                <div>
                   <ClubHeader></ClubHeader>
                   <div className={styles.content}>
                       <div>
                           <Scroll></Scroll>
                            <div className={styles.gallery}>
                            <div className={styles.photos1}>
                            <img src={gal1} width="400px" height="250px" className={styles.img}/>
                            <img src={gal2} width="400px" height="250px" className={styles.img}/>
                            </div>
                            <div className={styles.photos1}>
                            <img src={gal4} width="250px" height="250px" className={styles.img}/>
                            <img src={gal5} width="350px" height="250px" className={styles.img}/>
                            <img src={gal6} width="350px" height="250px" className={styles.img}/>
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

export default Gallery;
