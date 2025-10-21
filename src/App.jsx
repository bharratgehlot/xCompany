import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
// amazonq-ignore-next-line
import ProfileCard2 from "./components/ProfileCard2";
import ProfileCard3 from "./components/ProfileCard3";

function App() {
  return (
    <>
      <div>
        <p>Hire top talent in the industry at affordable cost. </p>
        <h1>THE PROFESSIONALS</h1>
        <div className="card-container">
        <ProfileCard />
        <ProfileCard2/> 
        <ProfileCard3/>
        </div>
      </div>
      <div>
        <p>We deliver projects faster then babies</p>
      </div>
    </>
  );
}

export default App;
