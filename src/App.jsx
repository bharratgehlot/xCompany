import PropProfileCard from "./components/PropProfileCard";

function App() {
  return (
    <>
      <div>
        <p>get hired in top companies easy the xCompany </p>
        <h1>GREAT COMPANIES FOR GREAT PROFESSIONALS</h1>
        <div className="card-container">

          <PropProfileCard
            name="TechNova Solutions Pvt. Ltd."
            about="TechNova Solutions is a global IT firm specializing in full-stack web and mobile development, cloud services, and AI-driven business automation for enterprises."
            founded="2015"
            employees="200+"
            location="Bangalore, India"
            email="contact@technova.in"
            website="https://technova.in"
            image="profilephoto.jpg"
            alt="TechNova company logo"
            id="201"
          />

          <PropProfileCard
            name="CloudEdge Technologies"
            about="CloudEdge Technologies empowers businesses to transition seamlessly to the cloud, leveraging AWS, Azure, and GCP platforms for scalability and automation."
            founded="2018"
            employees="120+"
            location="Hyderabad, India"
            email="info@cloudedge.tech"
            website="https://cloudedge.tech"
            image="profilephoto2.jpg"
            alt="CloudEdge Technologies logo"
            id="202"
          />

          <PropProfileCard
            name="NextGen IT Consulting"
            about="NextGen IT Consulting delivers enterprise-grade digital transformation, cybersecurity, and IT strategy services for clients across the finance and manufacturing sectors."
            founded="2012"
            employees="500+"
            location="Pune, India"
            email="connect@nextgenit.com"
            website="https://nextgenit.com"
            image="profilephoto3.jpg"
            alt="NextGen IT Consulting logo"
            id="203"
          />

          <PropProfileCard
            name="CodeWave Labs"
            about="CodeWave Labs helps startups design, develop, and launch products rapidly using MERN, Flutter, and Firebase. Recognized for modern UI/UX and agile delivery."
            founded="2021"
            employees="50+"
            location="Mumbai, India"
            email="hello@codewave.io"
            website="https://codewave.io"
            image="profilephoto4.jpg"
            alt="CodeWave Labs logo"
            id="204"
          />

          <PropProfileCard
            name="BlueCircuit Systems"
            about="BlueCircuit Systems focuses on embedded software development, IoT device integration, and firmware solutions for smart industries and automation."
            founded="2010"
            employees="300+"
            location="Chennai, India"
            email="support@bluecircuit.com"
            website="https://bluecircuit.com"
            image="profilephoto5.jpg"
            alt="BlueCircuit Systems logo"
            id="205"
          />

          <PropProfileCard
            name="QuantumBit Technologies"
            about="QuantumBit Technologies specializes in AI, ML, and data-driven analytics, helping organizations make intelligent business decisions through predictive insights."
            founded="2016"
            employees="180+"
            location="Delhi NCR, India"
            email="info@quantumbit.ai"
            website="https://quantumbit.ai"
            image="profilephoto6.jpg"
            alt="QuantumBit Technologies logo"
            id="206"
          />

          <PropProfileCard
            name="CyberNest Solutions"
            about="CyberNest Solutions provides end-to-end cybersecurity services including threat monitoring, penetration testing, and compliance management for global clients."
            founded="2013"
            employees="220+"
            location="Kolkata, India"
            email="security@cybernest.in"
            website="https://cybernest.in"
            image="profilephoto7.jpg"
            alt="CyberNest Solutions logo"
            id="207"
          />

          <PropProfileCard
            name="PixelSoft Technologies"
            about="PixelSoft Technologies builds enterprise mobile and web applications with a strong emphasis on performance, scalability, and clean user interfaces."
            founded="2014"
            employees="260+"
            location="Ahmedabad, India"
            email="contact@pixelsoft.co"
            website="https://pixelsoft.co"
            image="profilephoto8.jpg"
            alt="PixelSoft Technologies logo"
            id="208"
          />

          <PropProfileCard
            name="NeuralHub AI Pvt. Ltd."
            about="NeuralHub AI develops deep learning models, computer vision tools, and NLP systems that automate decision-making processes for healthcare and finance industries."
            founded="2019"
            employees="90+"
            location="Bangalore, India"
            email="hello@neuralhub.ai"
            website="https://neuralhub.ai"
            image="profilephoto9.jpg"
            alt="NeuralHub AI Pvt. Ltd. logo"
            id="209"
          />
        </div>
      </div>
      <div>
        <p>We deliver projects faster than babies</p>
      </div>
    </>
  );
}

export default App;
