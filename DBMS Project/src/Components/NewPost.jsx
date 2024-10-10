import styles from "./NewPost.module.css"
import Header from "./Header.jsx"
import Coremembersidebar from "./Coremembersidebar.jsx"
import Scroll from "./Scroll.jsx"
import SubClubHeader from "./SubClubHeader.jsx"
import Coremembermanage from "./Coremembermanage.jsx"
import upload from "../assets/upload.png"
import people1 from "../assets/people1.png"
import arrow from "../assets/arrow.png"

function NewPost()
{
    return (
        <div className={styles.galleryevents}>
            <header className={styles.header}>
                <Header></Header>
            </header>
            <div className={styles.galleryeventscontent}>
                <div className={styles.sidebar}>
                   <Coremembersidebar/>
                </div>
                <div>
                   <SubClubHeader></SubClubHeader>
                   <div className={styles.content}>
                       <div>
                           <Scroll></Scroll>
                           <div className={styles.uploadimage}>
                                <img className={styles.image} width="200px" src={upload}/>
                                <p className={styles.text}>Upload</p>
                           </div>
                           <div>
                               <p className={styles.text1}>Description</p>
                               <hr/>
                               <textarea className={styles.text2}>type here</textarea>
                           </div>
                           <div className={styles.tagpeople}>
                               <img width="30px" height="30px" src={people1}/>
                               <p className={styles.text3}>Tag people</p>
                               <img width="15px" height="20px" className={styles.image1} src={arrow}/>
                           </div>
                           <button type="button" className={`${styles.btn} ${styles.btn1} ${styles.contact}`}>Post</button>
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

export default NewPost;
