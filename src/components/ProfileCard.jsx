import { useState } from 'react';
import style from './ProfileCard.module.css'

function ProfileCard(){

  // amazonq-ignore-next-line
  const [emailButton, setEmailButton] = useState(false)

 function toggleEmail() {
    setEmailButton(!emailButton);
  };

  return <div className={style.profilecard}>
    <h2>Profile Card</h2>
    <img src="profilephoto.jpg" alt='Ankita Sharma'/>
    <p>Name: Ankita Sharma</p>
    <p>Age: 24</p>
    <p>BIO: I'm Ankita sharma, 8 years exprienced HR Professional currently working at Fellwell Company</p>
    <button onClick={toggleEmail}>{emailButton ? "Hide Email " : "Show Email"}</button>
    {emailButton && <span>ankitasharma877@gmail.com</span>}
  </div>
}

export default ProfileCard;