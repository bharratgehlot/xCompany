function PropProfileCard_2({ companies }) {
  return (
    <div>
      {companies.map((company, index) => (
        <div key={index}style={{ border: "1px solid gray", margin: "10px", padding: "10px", background:"red"}}>
          <h1>{company.age}</h1>
          <p>Name: {company.name}</p>
          <p>Place: {company.place}</p>
          <p>Profession: {company.profession}</p>
          <p>Experience: {company.professional_experience}</p>
          <p>Married: {company.isMarried ? "Yes" : "No"}</p>
          <p>Pregnant: {company.isPregnent ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default PropProfileCard_2;
