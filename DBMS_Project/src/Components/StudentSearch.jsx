import styles from "./StudentSearch.module.css"
import Header from "./Header.jsx"
import StudentSearchSidebar from "./StudentSearchSidebar.jsx"
function StudentSearch()
{
  return (
    <div className={styles.searchpage}>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.page}>
        <div className={styles.sidebar}>
          <StudentSearchSidebar/>
        </div>
        <div className={styles.box}>
          <div className={styles.Search}>
            <p> Search A Student </p>
          </div>
          <div className={styles.id}>
            <p> College ID of student </p>
          </div>
          <div className={styles.stuform}>
             <form>
             <input type="text" id="college_id" placeholder="Enter College ID"/>
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
