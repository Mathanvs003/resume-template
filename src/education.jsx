function EducationSection() {
    return (
      <div className="edu">
        <h4>EDUCATION</h4>
        <EducationItem 
          institution="Merit Arts & Science College" 
          degree="BSC Computer Science" 
          duration="2021-2024" 
          location="Idaikal, Tirunelveli" 
        />
        <EducationItem 
          institution="Senaithalaivar Hr.Sec.School" 
          degree="HSS" 
          duration="2020-2024" 
          location="Vickramasingapuram, Tirunelveli" 
        />
        <EducationItem 
          institution="Senaithalaivar Hr.Sec.School" 
          degree="SSLC" 
          duration="2020-2024" 
          location="Vickramasingapuram, Tirunelveli" 
        />
      </div>
    );
  }
  
  function EducationItem({ institution, degree, duration, location }) {
    return (
      <div className="para">
        <div className="prt1">
          <h5>{institution}</h5>
          <p>{degree}</p>
        </div>
        <div className="prt2">
          <h5>{duration}</h5>
          <p>{location}</p>
        </div>
      </div>
    );
  }

  export default EducationSection