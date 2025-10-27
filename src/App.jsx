import { useState } from "react";
import profileData from "./data/profiles.json";
// amazonq-ignore-next-line

import PropProfileCard from "./components/PropProfileCard";

function App() {

  return (
    <>
      <div>
        <p>Hire top talent in the industry at affordable cost. </p>
        <h1>THE PROFESSIONALS</h1>
        <div className="card-container">
          <PropProfileCard
            name="Radha"
            age="25"
            role="Fresh Talent"
            bio="Avika Gor, done many serials and shows, known for her acting skills along with her glamerous body"
            skills="acting, modeling, insta queen, tv acctress"
            email="avikagor2@gmail.com"
            image="profilephoto.jpg"
            alt="Manisha borana photo"
            id="1"
          />

          <PropProfileCard
            name="Patrika Varma"
            age="19"
            role="Fresh Talent"
            bio="Avika Gor, done many serials and shows, known for her acting skills along with her glamerous body"
            skills="acting, modeling, insta queen, tv acctress"
            email="avikagor2@gmail.com"
            image="profilephoto2.jpg"
            alt="Manisha borana photo"
            id="2"
          />

          <PropProfileCard
            name="Vishaka"
            age="28"
            role="Fresh Talent"
            bio="Avika Gor, done many serials and shows, known for her acting skills along with her glamerous body"
            skills="acting, modeling, insta queen, tv acctress"
            email="avikagor2@gmail.com"
            image="profilephoto3.jpg"
            alt="Manisha borana photo"
            id="3"
          />

          <PropProfileCard
            name="Komolika"
            age="35"
            role="Fresh Talent"
            bio="Avika Gor, done many serials and shows, known for her acting skills along with her glamerous body"
            skills="acting, modeling, insta queen, tv acctress"
            email="avikagor2@gmail.com"
            image="profilephoto4.jpg"
            alt="Manisha borana photo"
            id="4"
          />

          <PropProfileCard
            name="Madhvi"
            age="34"
            role="Fresh Talent"
            bio="Avika Gor, done many serials and shows, known for her acting skills along with her glamerous body"
            skills="acting, modeling, insta queen, tv acctress"
            email="avikagor2@gmail.com"
            image="profilephoto5.jpg"
            alt="Manisha borana photo"
            id="5"
          />

          <PropProfileCard
            name="Kiran Verma"
            age="23"
            role="HR Manager"
            bio="Hello, Im Kiran Verma from Banaras. Im married and HR PRofessional in my company"
            skills="Human Resources, Payroll, Employee Management, Pimp"
            email="kiranverma343@gmail.com"
            image="profilephoto6.jpg"
            alt="Kiran verna photo"
            id="6"
          />

          <PropProfileCard
            name="Manisha Borana"
            age="20"
            role="Software Engineer"
            bio="Hello, Im Software Engineer by Mistake. I write code by Mistake"
            skills="Code Review, Data Anaysis, Code Writing, Software Development"
            email="manishab321@gmail.com"
            image="profilephoto7.jpg"
            alt="Manisha borana photo"
            id="7"
          />

          <PropProfileCard
            name="Shardha Kapoor"
            age="25"
            role="Actress"
            bio="Shradha Kapoor, top quality acctress by professional. Knows how to deal with producers and directors"
            skills="acting, modeling, brand promotion, good figure, babydoll, itemsongs"
            email="shardhakapoor323@gmail.com"
            image="profilephoto8.jpg"
            alt="Shardha Kapoor photo"
            id="8"
          />

          <PropProfileCard
            name="Avika Gor"
            age="22"
            role="Fresh Talent"
            bio="Avika Gor, done many serials and shows, known for her acting skills along with her glamerous body"
            skills="acting, modeling, insta queen, tv acctress"
            email="avikagor2@gmail.com"
            image="profilephoto9.jpg"
            alt="Manisha borana photo"
            id="9"
          />
        </div>
      </div>
      <div>
        <p>We deliver projects faster then babies</p>
      </div>
    </>
  );
}

export default App;
