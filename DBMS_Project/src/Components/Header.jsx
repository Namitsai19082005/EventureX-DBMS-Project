import { useState } from "react";
import styles from "./Header.module.css"
import logo from "../assets/logo.png"
import notification from "../assets/notification.png"
import setting from "../assets/setting.png"
import profile from "../assets/profile.png"
import searchicon from "../assets/searchicon.png"
import { useNavigate } from "react-router-dom"
function Header()
{
    const navigate=useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const handlenotification=()=>{
        navigate('/Notification');
    }

    const handlesetting=()=>{
        navigate('/Settings');
    }

    const handleprofile=()=>{
        navigate('/Profile');
    }

    const handlehome=()=>{
        navigate('/Home');
    }
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            // Send search query to Flask backend
            try {
                const response = await fetch(`http://localhost:5000/search`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ query: searchQuery }),
                });
                const result = await response.json();
                if (result.success) {
                    // Navigate to the event or club page based on the response
                    navigate(result.redirectUrl);
                } else {
                    // Handle no results or error
                    console.error("No results found");
                }
            } catch (error) {
                console.error("Error while searching:", error);
            }
        }
    };
    return (
        <div className={styles.HeaderPage}>
             <header className={styles.headhome}>                              
                 <div className={styles.logo}>
                    <img src={logo} width="260px" height="67px"  onClick={handlehome} alt="logo"/>
                 </div>
                 <form className={styles.searchbar} onSubmit={handleSearchSubmit}>
                    <div>
                        <img className={styles.searchicon} src={searchicon} alt="searchicon" />
                    </div>
                    <div>
                        <input
                            className={styles.searchinput}
                            type="text"
                            name="search"
                            placeholder="Search events or clubs"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </form>
                 <div className={styles.notifications}>
                    <img className={styles.images}  src={notification} onClick={handlenotification} alt="notification"/>
                 </div>
                 <div className={styles.settings}>
                    <img className={styles.images} src={setting} onClick={handlesetting} alt="setting"/>
                 </div>
                 <div className={styles.profile}>
                    <img className={styles.images} src={profile} onClick={handleprofile} height="50px" alt="profile"/>
                 </div>
             </header>
        </div>
    );
}

export default Header;
