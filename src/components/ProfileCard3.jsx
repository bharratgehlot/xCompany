import { useState } from 'react';
import style from './ProfileCard.module.css'

function ProfileCard3(){

  // amazonq-ignore-next-line
  const [emailButton, setEmailButton] = useState(false)

 function toggleEmail() {
    setEmailButton(!emailButton);
  };

  return <div className={style.profilecard}>
    <h2>Profile Card</h2>
    <img src="profilephoto3.jpg" alt='Vishkanya'/>
    <p>Name: Vishkanya</p>
    <p>Age: 20</p>
    <p>BIO: Vishkanya I liked creating and managing UI and dashboard, My father name is Nagesh. I love playing with snakes</p>
    <button onClick={toggleEmail}>{emailButton ? "Hide Email " : "Show Email"}</button>
    {emailButton && <span>vishkanya323@gmail.com</span>}
  </div>
}

export default ProfileCard3;