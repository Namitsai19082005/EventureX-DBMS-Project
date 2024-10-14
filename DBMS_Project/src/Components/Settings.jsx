import Header from "./Header.jsx"
import styles from "./Settings.module.css"
import plus from "../assets/plus.png"
import resumeimg from "../assets/resumeimg.png"
import { useState } from "react"
import { useEffect } from "react"
function Settings({ profileInfo, updateProfileInfo })
{
  const [username, setUsername] = useState(profileInfo.username);
  const [mobile, setMobile] = useState(profileInfo.mobile);
  const [description, setDescription] = useState(profileInfo.description || "");
  const [skills, setSkills] = useState(profileInfo.skills || []);
  const [newSkill, setNewSkill] = useState("");
  const [resume, setResume] = useState(profileInfo.resume || null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedMobile = localStorage.getItem('mobile');
    const storedDescription = localStorage.getItem('description');
    const storedSkills = JSON.parse(localStorage.getItem('skills') || '[]');
    const storedResume = localStorage.getItem('resume');

    if (storedUsername) {
      setUsername(storedUsername);
    }
    if (storedMobile) {
      setMobile(storedMobile);
    }

    if (storedDescription) {
      setDescription(storedDescription);
    }
    if (storedResume) 
    {
      setResume(storedResume);
    }

    if (storedSkills) 
      {
        setSkills(storedSkills);
      }
  }, []);

  const handleSave = () => {
    updateProfileInfo({ username, mobile, description, skills, resume });
    localStorage.setItem('username', username);
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('description', description);
    localStorage.setItem('skills', JSON.stringify(skills));
    if (resume) {
        localStorage.setItem('resume', resume);
    }
};


  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };


  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setResume(fileURL); // Store resume file URL (or handle it on the server)
    }
  };


  const handleRemoveResume = () => {
    setResume(null);
    localStorage.removeItem("resume"); // Clear from local storage
  };


  return (
    <div className={styles.settingsPage}>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.profileSettings}>
        <p> Profile Settings </p>
      </div>
      <div className={styles.username}>
        <div className={styles.name}>
          <p> User name </p>
        </div>
        <div className={styles.userform}>
          <form>
          <input type="text" id="username"  value={username}
              onChange={(e) => setUsername(e.target.value)}/>
          </form>
        </div>
      </div>
      <div className={styles.personalmobile}>
        <div className={styles.name}>
          <p> Personal Mobile </p>
        </div>
        <div className={styles.userform}>
          <form>
          <input type="text"
              id="username"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}/>
          </form>
        </div>
      </div>
      <div>
      <p className={styles.text1}>Description</p>
      <hr/>
      <textarea className={styles.text2} value={description}
          onChange={(e) => setDescription(e.target.value)}>type here</textarea>
      </div>                                                                          
      <div className={styles.name}> Skills </div>
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.singer} onClick={() => handleRemoveSkill(index)}>
            <h2 style={{ color: `white` }}>
              <pre><p className={styles.singertext}>{skill}</p></pre>
            </h2>
          </div>
        ))}
      </div>
      <div className={styles.form}>
        <div className={styles.userform}>
        <input type="text" id="username"value={newSkill} placeholder="Type a skill"
            onChange={(e) => setNewSkill(e.target.value)} />
        </div>
        <div className={styles.img2} onClick={handleAddSkill}>
        <img src={plus} width="35px" height="35px"/>
        </div>
      </div>
      <div className={styles.name}> Resume </div>
      <div className={styles.nameform2}>
        <div className={styles.resumeform}>
          <div className={styles.image}>
          <img src={resumeimg} width="30px" height="30px"/>
          </div>
          <div className={styles.resumetext}>
          {resume ? (
        <>
          <p>resume.pdf</p>
          <button
            type="button"
            className={styles.removeButton}
            onClick={handleRemoveResume}
          >
            Remove
          </button>
        </>
      ) : (
        <p>No resume uploaded</p>
      )}
          </div>
          <div className={styles.resumeedit}>
          <label htmlFor="resume-upload" className={styles.editLabel}>
              Edit
            </label>
            <input
              type="file"
              id="resume-upload"
              style={{ display: 'none' }}
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
            />
          </div>
        </div>

      </div>
      <button type="button" className={`${styles.btn} ${styles.btn1}`} onClick={handleSave}>Save</button>
    </div>
  )
}
export default Settings;