import styles from "./NewPost.module.css"
import Header from "./Header.jsx"
import Coremembersidebar from "./Coremembersidebar.jsx"
import Scroll from "./Scroll.jsx"
import SubClubHeader from "./SubClubHeader.jsx"
import Coremembermanage from "./Coremembermanage.jsx"

function NewPost()
{
    return (
        <div className={styles.galleryevents}>
            <header>
                <Header></Header>
            </header>
            <div className={styles.galleryeventscontent}>
                <Coremembersidebar></Coremembersidebar>
                <div>
                   <SubClubHeader></SubClubHeader>
                   <div className={styles.content}>
                       <div>
                           <Scroll></Scroll>
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
