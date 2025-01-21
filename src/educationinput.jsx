function Educationinput(props) {
    return (  
        <div className="educationinput">
          <h3>Education Portion</h3>
            <label htmlFor="clgname">College</label>
            <input type="text"  id="clgname" placeholder="Merit Arts & Science College"  onChange={(e) => props.handleCollegeChange(e.target.value)}/>

            <label htmlFor="degree">Degree</label>
            <input type="text"  id="degree" placeholder="BSC Computer Science" onChange={(e) => props.handleDegreeChange(e.target.value)}/>

            <label htmlFor="period1">Period</label>
            <input type="text"  id="period1" placeholder="2021-2024" onChange={(e) => props.handlePeriod1Change(e.target.value)}/>

            <label htmlFor="loc1">Location</label>
            <input type="text"  id="loc1" placeholder="Idaikal, Tirunelveli" onChange={(e) => props.handleLocation1Change(e.target.value)}/>

            <label htmlFor="hss">School</label>
            <input type="text"  id="hss" placeholder="Senaithalaivar Hr.Sec.School" onChange={(e) => props.handleSchool1Change(e.target.value)}/>

            <label htmlFor="period2">Period</label>
            <input type="text"  id="period2" placeholder="2019-2021" onChange={(e) => props.handlePeriod2Change(e.target.value)}/>

            <label htmlFor="loc2">Location</label>
            <input type="text"  id="loc2" placeholder="Vickramasingapuram, Tirunelveli" onChange={(e) => props.handleLocation2Change(e.target.value)}/>

            <label htmlFor="sslc">School</label>
            <input type="text"  id="sslc" placeholder="Senaithalaivar Hr.Sec.School" onChange={(e) => props.handleSchool2Change(e.target.value)}/>

            <label htmlFor="period3">Period</label>
            <input type="text"  id="period3" placeholder="2018-2019" onChange={(e) => props.handlePeriod3Change(e.target.value)}/>

            <label htmlFor="loc3">Location</label>
            <input type="text"  id="loc3" placeholder="Vickramasingapuram, Tirunelveli"  onChange={(e) => props.handleLocation3Change(e.target.value)}/>
        </div>
    );
  }
  
  export default Educationinput;
  