import { useState } from "react";
import style from "./ProfileCard.module.css";

function PropProfileCard(props) {
  const [emailButton, setEmailButton] = useState(false);


  const [likeButton, setLikeButton] = useState(()=> {
    return parseInt(localStorage.getItem(`profile${props.id}-likes`))  || 0
  })
  
 
  const [showSkills, setShowSkills] = useState(false);


 const [onlineStatus, setOnlineStatus] = useState(()=> {
    return JSON.parse(localStorage.getItem(`saved-status5${props.id}`)) || false
  })

  function toggleEmail() {
    setEmailButton(!emailButton);
  }

   function likeIncrement() {
    const newLikes = likeButton + 1
    setLikeButton(newLikes)
    localStorage.setItem(`profile${props.id}-likes`, newLikes)
  }

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

    const toggleOnlineStatus = () => {
    const saveOnlineStatus = !onlineStatus
    setOnlineStatus(saveOnlineStatus)
    localStorage.setItem(`saved-status5${props.id}`, JSON.stringify(saveOnlineStatus))
  }
  

  function showStatus() {
    if (onlineStatus) {
      return <span>🟢Online</span>;
    } else {
      return <span>🔴Busy</span>;
    }
  }

  return (
    <div className={style.profilecard}>
      <button className={style.likeButton} onClick={likeIncrement}>
        ❤️ {likeButton}
      </button>

      <h2>{props.name}</h2>
      <img className={style.image} src={props.image} alt={props.alt} />

      <div className={style.info}>
        <p>
          <strong>Age:</strong> {props.age}
        </p>
        <p>
          <strong>Role:</strong> {props.role}
        </p>
      </div>

      <div className={style.bio}>{props.bio} </div>

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
          <strong>Skills:</strong> {props.skills}
        </div>
      )}

      {emailButton && <div className={style.email}>{props.email}</div>}
    </div>
  );
}

export default PropProfileCard;
