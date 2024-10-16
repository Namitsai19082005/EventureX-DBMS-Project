import Header from "./Header.jsx";
import profilebg from "../assets/profilebg.png"
import styles from "./Profile.module.css"
import wbbadge from "../assets/wbbadge.png"
import trendle from "../assets/trendle.png"
import gdscbadge from "../assets/gdscbadge.png"
import React, { useState, useEffect } from 'react';
import apporv from "../assets/apporv.png"
import event from "../assets/event.png"
function ProfilePage({ profileInfo })
{
    const [profileImage, setProfileImage] = useState(profilebg);

    useEffect(() => {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            setProfileImage(savedImage);
        }
    }, []);

   
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageData = reader.result;
                setProfileImage(imageData);
                localStorage.setItem('profileImage', imageData);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const triggerFileInput = (e) => {
        const inputElement = document.createElement('input');
        inputElement.type = 'file';
        inputElement.accept = 'image/*';
        inputElement.style.display = 'none';
        inputElement.onchange = handleImageChange;
        document.body.appendChild(inputElement); 
        inputElement.click();
        inputElement.remove();
    };

    return (
        <div className={styles.profilepage}>
            <header className={styles.header}>
                <Header></Header>
            </header>
            <div className={styles.profile}>
                <div className={styles.imageContainer}>
                    <img
                        src={profileImage}
                        alt="profilebg"
                        onClick={triggerFileInput} 
                        className={styles.profileImage}
                    />
                </div>
                <p className={styles.name}>{profileInfo.username}</p>
                <p className={styles.rno}>2023BCD0041</p>
                <p className={styles.club}>WildBeats Member - Trendles Member</p>

                <div className={styles.badges}>
                
                <div className="card" style={{margin: "20px 0 0 0",background: "black",width: "10rem"}}>
                <img src={wbbadge} className={styles.cardimg} alt="wildbeatsbadge"/>
                <div className="card-body">
               <p className="card-text" style={{color: "white"}}>Wildbeats Badge</p>
               </div>
               </div>
                 
                <div className="card" style={{margin: "20px 0 0 0",background: "black",width: "10rem"}}>
                <img src={trendle} className={styles.cardimg} alt="trendlebadge"/>
                <div className="card-body">
               <p className="card-text" style={{color: "white"}}>Trendles Badge</p>
               </div>
               </div>

                <div className="card" style={{margin: "20px 0 0 0",background: "black",width: "10rem"}}>
                <img src={gdscbadge} className={styles.cardimg} alt="gdscbadge"/>
                <div className="card-body">
               <p className="card-text" style={{color: "white"}}>GDSC Badge</p>
               </div>
               </div>

                <div className="card" style={{margin: "20px 0 0 0",background: "black",width: "10rem"}}>
                <img src={apporv} className={styles.cardimg} alt="apporvbadge"/>
                <div className="card-body">
               <p className="card-text" style={{color: "white"}}>Apoorv Volunteer</p>
               </div>
               </div>
               </div>
                
            </div>
            <div className={styles.about}>
                <p>About</p>
            </div>
            <div className={styles.desc}>
                <p style={{color: "white"}}>{profileInfo.description || "No description provided"}</p>
                <div className={styles.details}>
                    <p className={styles.detailstext}>Mail: <span className={styles.email}>namitsa23bcd41@iiitkottayam.ac.in</span></p>
                    <p className={styles.detailstext}>Mobile Number:  <span className={styles.email}>{profileInfo.mobile}</span></p>
                    <p className={styles.detailstext}>Skills: {profileInfo.skills && profileInfo.skills.length > 0 ? (
            <ul>
              {profileInfo.skills.map((skill, index) => (
                <li key={index} style={{ color: "white" }}><span className={styles.email}>{skill}</span></li>
              ))}
            </ul>
          ) : (
            <span className={styles.email}>No skills added yet</span>
          )}</p>
                <p className={styles.detailstext}>Resume: <span className={styles.email}>{profileInfo.resume ? <a href={profileInfo.resume} download>Download Resume</a> : "No resume uploaded"}</span></p>
                </div>
            </div>
            <div className={styles.about}>
                <p>Past Experiences</p>
            </div>
            <div className={styles.event}>
                <img src={event} alt="event"/>
                <div className={styles.eventcontent}>
                    <p className={styles.bigtext}>Event Name</p>
                    <p className={styles.smalltext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;