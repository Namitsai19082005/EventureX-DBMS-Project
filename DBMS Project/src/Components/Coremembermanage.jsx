import styles from "./Coremembermanage.module.css"
import plus from "../assets/plus.png"
import resumeimg from "../assets/resumeimg.png"
import { useNavigate } from "react-router-dom"
function Coremembermanage()
{
    const navigate=useNavigate();

    const handleNewPost=()=>{
     navigate('/NewPost');
   }

   const handleNewEvent=()=>{
     navigate('/MusicClub');
   }

   const handleApplication=()=>{
     navigate('/Application');
   }

    return (
        <div className={styles.subclub}>
            <p className={styles.heading}>Manage</p>
            <div>
                 <img className={styles.circleimg2} src={plus} width="35px" height="35px"/>
                 <a className={styles.text} onClick={handleNewPost}>New Post</a>
            </div>
            <div>
                 <img className={styles.circleimg2} src={plus} width="35px" height="35px"/>
                 <a className={styles.text} onClick={handleNewEvent}>New Event</a>
            </div>
            <div>
                 <img className={styles.image} src={resumeimg} width="35px" height="30px"/>
                 <a className={styles.text} onClick={handleApplication}>Club Application</a>
            </div>
            <div>
                 <img className={styles.image} src={resumeimg} width="35px" height="30px"/>
                 <a className={styles.text} onClick={handleApplication}>Volunteer Application</a>
            </div>
        </div>
    );
}

export default Coremembermanage;