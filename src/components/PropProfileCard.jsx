import { useState } from "react";
import style from "./ProfileCard.module.css";

function PropProfileCard(props) {
  const [emailButton, setEmailButton] = useState(false);

  const [likeButton, setLikeButton] = useState(() => {
    return parseInt(localStorage.getItem(`profile${props.id}-likes`)) || 0;
  });

  const [showCurrentOpening, setshowCurrentOpening] = useState(false);

  const [onlineStatus, setOnlineStatus] = useState(() => {
    return JSON.parse(localStorage.getItem(`saved-status${props.id}`)) || false;
  });

  function toggleEmail() {
    setEmailButton(!emailButton);
  }

  function likeIncrement() {
    const newLikes = likeButton + 1;
    setLikeButton(newLikes);
    localStorage.setItem(`profile${props.id}-likes`, newLikes);
  }

  const toggleshowCurrentOpening = () => {
    setshowCurrentOpening(!showCurrentOpening);
  };

  const toggleOnlineStatus = () => {
    const saveOnlineStatus = !onlineStatus;
    setOnlineStatus(saveOnlineStatus);
    localStorage.setItem(
      `saved-status${props.id}`,
      JSON.stringify(saveOnlineStatus)
    );
  };

  function showStatus() {
    if (onlineStatus) {
      return <span>🟢Online</span>;
    } else {
      return <span>🔴Busy</span>;
    }
  }

  return (
    <div className={style.profilecard}>
      <div className={style.bannerContainer}>
        <img
          className={style.bannerImage}
          src={props.banner}
          alt={`${props.name} banner`}
        />

        <button className={style.likeButton} onClick={likeIncrement}>
          ❤️ {likeButton}
        </button>
      </div>

      <div className={style.profileContent} >

      
      <img className={style.image} src={props.image} alt={props.alt} />
       <h2>{props.name}</h2>
      <div className={style.info}>
        <p>
          <strong>Founded:</strong> {props.founded}
        </p>
        <p>
          <strong>Employees:</strong> {props.employees}
        </p>

        <p>
          <strong>Type:</strong> {props.type}
        </p>

        <p>
          <strong>Location:</strong> {props.location}
        </p>

        <p>
          <strong>Website:</strong>{" "}
          <a href={props.website} target="_blank" rel="noopener noreferrer">
            {props.website}
          </a>
        </p>
      </div>

      <div className={style.bio}>{props.about} </div>

      <div className={style.buttonContainer}>
        <button className={style.statusButton} onClick={toggleOnlineStatus}>
          Status: {showStatus()}
        </button>

        <button
          className={style.skillsButton}
          onClick={toggleshowCurrentOpening}
        >
          Current Openings: {showCurrentOpening ? "Hide" : "Show"}
        </button>

        <button className={style.emailButton1} onClick={toggleEmail}>
          {emailButton ? "Hide Email" : "Show Email"}
        </button>
      </div>

      {showCurrentOpening && (
        <div className={style.skillsList}>
          <strong>Current Openings:</strong> {props.currentOpening}
        </div>
      )}

      {emailButton && <div className={style.email}>{props.email}</div>}
      </div>
    </div>
  );
}

export default PropProfileCard;
