import React from "react";
import { useState } from "react";
import PropProfileCard_2 from "./components/PropProfileCard_2";

function App() {
  const [company, setCompany] = useState([
    {
      name: "Shardha Sharma",
      age: 23,
      place: "Mumbai",
      isPregnent: true,
      isMarried: true,
      profession: "Nurse",
      professional_experience: "2 Years",
    },

    {
      name: "Anushka",
      age: 18,
      place: "Indore",
      isPregnent: false,
      isMarried: true,
      profession: "Teacher",
      professional_experience: "1 Years",
    },

    {
      name: "Kavita Bairagi",
      age: 25,
      place: "Delhi",
      isPregnent: true,
      isMarried: false,
      profession: "App Developer",
      professional_experience: "4 Years",
    },

     {
      name: "Nishta Bua",
      age: 32,
      place: "Kerala",
      isPregnent: true,
      isMarried: false,
      profession: "Machine Developer",
      professional_experience: "10 Years",
    },

     {
      name: "Rupali X",
      age: 18,
      place: "Delhi",
      isPregnent: true,
      isMarried: false,
      profession: "Social Worker",
      professional_experience: "None",
    },

  ]);

  const [sortBy, setSortBy] = useState("name")

  const sortCompanies = [...company].sort((a,b) => {
    if (sortBy == "name") return a.name.localeCompare(b.name)
    if (sortBy == "age")  return a.age - b.age
    return 0;
  }

  )


  return (
    <div>
      <h1>Hello</h1>
      <label>Sort By: </label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name" >Name</option>
        <option value="age" >Age</option>
      </select>

      <PropProfileCard_2 companies={sortCompanies}/>
    </div>
  );
}

export default App;
