function EducationSection(props) {
    return (
      <div className="edu">
        <h4>EDUCATION</h4>
        <EducationItem 
          institution={props.clg}
          degree={props.degree}
          duration={props.period}
          location={props.loc1}
        />
        <EducationItem 
          institution={props.schl1}
          degree="HSS" 
          duration={props.ped1}
          location={props.loc2}
        />
        <EducationItem 
          institution={props.schl2}
          degree="SSLC" 
          duration={props.ped2}
          location={props.loc3}
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