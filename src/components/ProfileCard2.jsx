import { useState } from 'react';
import style from './ProfileCard.module.css'

function ProfileCard2(){

  // amazonq-ignore-next-line
  const [emailButton, setEmailButton] = useState(false)

  const [likeButton, setLikeButton] = useState(()=>{
    return parseInt(localStorage.getItem('profile-card2-likes')) || 0 
  })

  const skillArrray = ["employee management","team lead", "mentor"," Project Manager"]
  const [showSkills, setShowSkills] = useState(false)


const [onlineStatus, setOnlineStatus] = useState(()=> {
    return JSON.parse(localStorage.getItem('saved-status2')) || false
  })




 function toggleEmail() {
    setEmailButton(!emailButton);
  };

  
  const toggleSkills = () => {
    setShowSkills(!showSkills)
  }


   function likeIncrement() {
    const newLikes = likeButton + 1
    setLikeButton(newLikes)
    localStorage.setItem('profile-card2-likes' ,newLikes)
  }

  
  const toggleOnlineStatus = () => {
    const saveOnlineStatus = !onlineStatus
    setOnlineStatus(saveOnlineStatus)
    localStorage.setItem('saved-status2', JSON.stringify(saveOnlineStatus))
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
    
    <h2>Anand Tripathi</h2>
    <img className={style.image} src="profilephoto2.jpg" alt='Anand Tripathi'/>
    
    <div className={style.info}>
      <p><strong>Age:</strong> 29</p>
      <p><strong>Role:</strong> Manager</p>
    </div>
    
    <div className={style.bio}>
      I'm Anand Tripathi, Manager by profession and handle tasks efficiently, currently working at MaxWell Company
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
        <strong>Skills:</strong>
        <ul>
          {skillArrray.map((skills, index) => (
            <li key={index}>{skills}</li>
          ))}
        </ul>
      </div>
    )}

    {emailButton && (
      <div className={style.email}>
        📧 imanandtripath2323@gmail.com
      </div>
    )}
  </div>
}

export default ProfileCard2;