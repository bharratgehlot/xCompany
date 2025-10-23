import { useState } from 'react';
import style from './ProfileCard.module.css'

function ProfileCard(){

  // amazonq-ignore-next-line
  const [emailButton, setEmailButton] = useState(false)
  const [likeButton, setLikeButton] = useState(0)
  const [showSkills, setShowSkills] = useState(false)
  const [onlineStatus, setOnlineStatus] = useState(false)

 function toggleEmail() {
    setEmailButton(!emailButton);
  };

  function likeIncrement() {
    setLikeButton(likeButton+1)
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

  return <div className={style.profilecard}>
    <button className={style.likeButton} onClick={likeIncrement}>❤️ {likeButton}</button>
    
    <h2>Ankita Sharma</h2>
    <img className={style.image} src="profilephoto.jpg" alt='Ankita Sharma'/>
    
    <div className={style.info}>
      <p><strong>Age:</strong> 24</p>
      <p><strong>Role:</strong> HR Professional</p>
    </div>
    
    <div className={style.bio}>
      I'm Ankita Sharma, 8 years experienced HR Professional currently working at Fellwell Company
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
        <strong>Skills:</strong> human resources, payroll management, employee retention, onboarding, interview
      </div>
    )}

    {emailButton && (
      <div className={style.email}>
        📧 ankitasharma877@gmail.com
      </div>
    )}
  </div>
}

export default ProfileCard;