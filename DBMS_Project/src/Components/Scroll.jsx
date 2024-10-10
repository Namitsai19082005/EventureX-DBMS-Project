import styles from "./Scroll.module.css"
import { useNavigate } from "react-router-dom"
function Scroll()
{
    const  navigate=useNavigate();

    const handleevents=()=>{
        navigate('/ClubEvents');
    }

    const handleposts=()=>{
        navigate('/Post');
    }

    const handleCoreTeam=()=>{
        navigate('/CoreTeam');
    }

    const handlegallery=()=>{
        navigate('/Gallery');
    }

    return (
        <div className={styles.scroll}>
            <a className={styles.items} onClick={handleevents}>Club Events</a>
            <a className={styles.items} onClick={handleposts}>Posts</a>
            <a className={styles.items} onClick={handleCoreTeam}>Club Core Team</a>
            <a className={styles.items} onClick={handlegallery}>Gallery</a>
        </div>
    );
}

export default Scroll;