import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx"
import styles from "./Club.module.css"
function Club()
{
    return (
        <div className={styles.ClubPage}>
            <Header/>
            <Sidebar/>
        </div>
    );
}

export default Club;