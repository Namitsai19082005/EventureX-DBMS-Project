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
import StudentSearch from "./Components/StudentSearch.jsx"
import './App.css'
import { Route,Routes } from "react-router-dom"

function App()
{
  return (
        <Routes>
          <Route path = "/" element = {<Register/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/Home" element={<HomePage/>}/>
          <Route path="/Club" element={<Club/>}/>
          <Route path="/Profile" element={<ProfilePage/>}/>
          <Route path="/RunawayRegs" element={<RunawayRegs/>}/>
          <Route path="/ClubEvents" element={<ClubEvents/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/CoreTeam" element={<WildbeatsCoreTeam/>}/>
          <Route path="/Post" element={<WildbeatsPosts/>}/>
          <Route path="/Notification" element={<Notification/>}/>
          <Route path="/NewPost" element={<NewPost/>}/>
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/ClubEvents" element={<MusicClubEvents/>}/>
          <Route path="/ClubApplication" element={<ClubApplication/>}/>
        </Routes>
  );
}

export default App;
