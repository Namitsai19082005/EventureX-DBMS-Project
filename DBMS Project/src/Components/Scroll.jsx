import styles from "./Scroll.module.css"
function Scroll()
{
    return (
        <div className={styles.scroll}>
            <a className={styles.items}>Club Events</a>
            <a className={styles.items}>Posts</a>
            <a className={styles.items}>Club Core Team</a>
            <a className={styles.items}>Gallery</a>
        </div>
    );
}

export default Scroll;