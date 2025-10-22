import { useState } from "react";
import style from "./ProfileCard.module.css";

function ProfileCard3() {
  // amazonq-ignore-next-line
  const [emailButton, setEmailButton] = useState(false);
  const [likeButton, setLikeButton] = useState(0);
  const skillArrray = ["frontend design", "UI/UX", "Snake hunter", "design trainee"]
  const [showSkills, setShowSkills] = useState(false)
    const [onlineStatus, setOnlineStatus] = useState(false)




  function toggleEmail() {
    setEmailButton(!emailButton);
  }

  function likeIncrement() {
    setLikeButton(likeButton + 1);
  }


  const toggleSkills = () => {
    setShowSkills(!showSkills)
  }

  
  const toggleOnlineStatus = () => {
    setOnlineStatus(!onlineStatus)
  }

  function showStatus(){
    if (onlineStatus) {
      return <span>🟢Online</span>
    } else {
      return <span>🔴Busy</span>
    }
  }


  return (
    <div className={style.profilecard}>
      <button className={style.likeButton} onClick={likeIncrement}>
        ❤️ {likeButton}
      </button>
      
      <h2>Vishkanya</h2>
      <img src="profilephoto3.jpg" alt="Vishkanya" />
      
      <div className={style.info}>
        <p><strong>Age:</strong> 20</p>
        <p><strong>Role:</strong> UI/UX Designer</p>
      </div>
      
      <div className={style.bio}>
        Vishkanya loves creating and managing UI and dashboards. My father's name is Nagesh. I love playing with snakes
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
          <strong>Skills:</strong> {skillArrray.join(", ")}
        </div>
      )}

      {emailButton && (
        <div className={style.email}>
          📧 vishkanya323@gmail.com
        </div>
      )}
    </div>
  );
}

export default ProfileCard3;
