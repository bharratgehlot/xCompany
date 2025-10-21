import { useState } from 'react';
import style from './ProfileCard.module.css'

function ProfileCard2(){

  // amazonq-ignore-next-line
  const [emailButton, setEmailButton] = useState(false)

 function toggleEmail() {
    setEmailButton(!emailButton);
  };

  return <div className={style.profilecard}>
    <h2>Profile Card</h2>
    <img src="profilephoto2.jpg" alt='Anand Tripathi'/>
    <p>Name: Anand Tripathi</p>
    <p>Age: 29</p>
    <p>BIO: I'm Anand Tripath, Manager by professional and handle task efficiently, currently working at MaxWell Company</p>
    <button onClick={toggleEmail}>{emailButton ? "Hide Email " : "Show Email"}</button>
    {emailButton && <span>imanandtripath2323@gmail.com</span>}
  </div>
}

export default ProfileCard2;