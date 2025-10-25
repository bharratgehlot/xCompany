import profileData from "../data/profiles.json"
import style from "./ProfileCard.module.css";
import { useState } from "react";

function ProfileCard4() {
  const profile = profileData[0]

  const [likeButton, setLikeButton] = useState(()=>{
    return parseInt(localStorage.getItem('profile-card4-likes')) || 0
  })

  const [emailButton, setEmailButton] = useState(false);
  const [showSkills, setShowSkills] = useState(false)

const [onlineStatus, setOnlineStatus] = useState(()=> {
    return JSON.parse(localStorage.getItem('saved-status4')) || false
  })

  function toggleEmail() {
    setEmailButton(!emailButton);
  }

  function likeIncrement() {
    const newLikes = likeButton + 1
    setLikeButton(newLikes);
    localStorage.setItem('profile-card4-likes', newLikes)
  }

  const toggleSkills = () => {
    setShowSkills(!showSkills)
  }

  const toggleOnlineStatus = () => {
    const saveOnlineStatus = !onlineStatus
    setOnlineStatus(saveOnlineStatus)
    localStorage.setItem('saved-status4', JSON.stringify(saveOnlineStatus))
  }
  

  function showStatus() {
    if (onlineStatus) {
      return <span>🟢Online</span>
    } else {
      return <span>🔴Busy</span>
    }
  }

  return <div className={style.profilecard}>
    <button className={style.likeButton} onClick={likeIncrement}>
      ❤️ {likeButton}
    </button>

    <h2>{profile.name}</h2>
    <img className={style.image} src={profile.image} alt="Neha Choursia" />

    <div className={style.info}>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Role:</strong> {profile.role}</p>
    </div>


    <div className={style.bio}>
      {profile.bio}
    </div>

    <div className={style.buttonContainer}>
      <button className={style.statusButton} onClick={toggleOnlineStatus}>
        Status: {showStatus()}
      </button>

      <button className={style.skillsButton} onClick={toggleSkills}>
        Skills: {showSkills ? "Hide" : "Show"}
      </button>

      <button className={style.emailButton1} onClick={toggleEmail}>
        {emailButton ? "Hide Email" : "Show Email"}
      </button>
    </div>


     {showSkills && (
        <div className={style.skillsList}>
          <strong>Skills:</strong>{profile.skills}
        </div>
      )}

      {emailButton && (
        <div className={style.email}>
        {profile.email}
        </div>
      )}



  </div>
}

export default ProfileCard4;