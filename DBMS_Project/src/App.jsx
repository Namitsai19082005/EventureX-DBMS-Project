import Register from "./Components/Register.jsx"
import Login from "./Components/Login.jsx"
import Club from "./Components/Club.jsx"
import ProfilePage from "./Components/ProfilePage.jsx"
import HomePage from "./Components/HomePage.jsx"
import RunawayRegs from "./Components/RunawayRegs.jsx"
import ClubEvents from "./Components/ClubEvents.jsx"
import Gallery from "./Components/Gallery.jsx"
import WildbeatsCoreTeam from "./Components/WildbeatsCoreTeam.jsx"
import WildbeatsPosts from "./Components/WildbeatsPosts.jsx"
import Notification from "./Components/Notification.jsx"
import Settings from "./Components/Settings.jsx"
import NewPost from "./Components/NewPost.jsx"
import MusicClubEvents from "./Components/MusicClubEvents.jsx"
import ClubApplication from "./Components/ClubApplication.jsx"
import Community from "./Components/Community.jsx"
import StudentSearch from "./Components/StudentSearch.jsx"
import { useState } from "react"
import { useEffect } from "react"
import './App.css'
import { Route,Routes } from "react-router-dom"

function App()
{

  const [profileInfo, setProfileInfo] = useState({
    username: 'Drummer Aditya',
    mobile: '',
  });

  useEffect(() => {
    const storedProfileInfo = localStorage.getItem('profileInfo');
    if (storedProfileInfo) {
      setProfileInfo(JSON.parse(storedProfileInfo));
    }
  }, []);

  const updateProfileInfo = (newInfo) => {
    const updatedInfo = { ...profileInfo, ...newInfo };
    setProfileInfo(updatedInfo);
    localStorage.setItem('profileInfo', JSON.stringify(updatedInfo));
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const addEvent = (newEvent) => {
    const updatedEvents = [newEvent, ...events]; // Prepend the new event
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
};
  const deleteEvent = async (eventIndex) => {
    const updatedEvents = events.filter((_, index) => index !== eventIndex);
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  return (
        <Routes>
          <Route path = "/" element = {<Register/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/Home" element={<HomePage/>}/>
          <Route path="/Community" element={<Community/>}/>
          <Route path="/Club" element={<Club/>}/>
          <Route path="/Profile" element={<ProfilePage profileInfo={profileInfo}></ProfilePage>}/>
          <Route path="/RunawayRegs" element={<RunawayRegs/>}/>
          <Route path="/ClubEvents" element={<ClubEvents events={events} deleteEvent={deleteEvent} />} />
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/CoreTeam" element={<WildbeatsCoreTeam/>}/>
          <Route path="/Post" element={<WildbeatsPosts/>}/>
          <Route path="/Notification" element={<Notification/>}/>
          <Route path="/NewPost" element={<NewPost/>}/>
          <Route path="/Settings" element={<Settings profileInfo={profileInfo} updateProfileInfo={updateProfileInfo}></Settings>}/>
          <Route path="/MusicClub" element={<MusicClubEvents addEvent={addEvent} deleteEvent={deleteEvent} />} />
          <Route path="/Application" element={<ClubApplication/>}/>
          <Route path="/StudentSearch" element={<StudentSearch/>}/>
        </Routes>
  );
}

export default App;
