import styles from "./StudentSearch.module.css"
import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx"
function StudentSearch()
{
  return (
    <div className={styles.searchpage}>
      <div className={styles.heading}>
        <Header/>
      </div>
      <div className={styles.page}>
        <div className={styles.sidebar}>
          <Sidebar/>
        </div>
        <div className={styles.box}>
          <div className={styles.Search}>
            <p> Search A Student </p>
          </div>
          <div className={styles.name}>
            <p> Name </p>
          </div>
          <div className={styles.stuform}>
             <form>
             <input type="text" id="studentname" placeholder="Enter name"/>
             </form>
          </div>
          <div className={styles.or}>
            <p> Or </p>
          </div>
          <div className={styles.name}>
            <p> College Email </p>
          </div>
          <div className={styles.stuform}>
             <form>
             <input type="text" id="studentname" placeholder="Email"/>
             </form>
          </div>
          <div className={styles.proceed}>
            <p className={styles.textproceed}> Proceed </p>
          </div>
        </div>
      </div>
    </div>

  )
}
export default StudentSearch;