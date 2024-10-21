import { useState } from "react"; // Import useState
import { useNavigate } from "react-router-dom";
import styles from "./StudentSearch.module.css"
import Header from "./Header.jsx"
import StudentSearchSidebar from "./StudentSearchSidebar.jsx"
function StudentSearch()
{
  const [collegeId, setCollegeId] = useState(""); // State to store college ID
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent form submission
        if (collegeId) {
            // Navigate to the ProfilePage with the collegeId as a URL parameter
            navigate(`/Profile?college_id=${collegeId}`);
        }
    };

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
            <form onSubmit={handleSearch}> {/* Add onSubmit handler */}
                <input
                    type="text"
                    id="college_id"
                    placeholder="Enter College ID"
                    value={collegeId} // Bind value to state
                    onChange={(e) => setCollegeId(e.target.value)} // Update state on change
                 />
             </form>
          </div>
          <div className={styles.proceed} onClick={handleSearch}> {/* Proceed button */}
              <p className={styles.textproceed}> Proceed </p>
          </div>
        </div>
      </div>
    </div>

  )
}
export default StudentSearch;
