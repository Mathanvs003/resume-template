function Projectinput(props) {
    return (  
        <div className="proinput">
          <h3>Project Portion</h3>
            <label htmlFor="date1">Project1</label>
            <input type="text"  id="date1" placeholder="Hotel Reservation"  onChange={(e) => props.handlepro1Change(e.target.value)}/>

            <label htmlFor="period1">Date</label>
            <input type="text"  id="period1" placeholder="jan 2024" onChange={(e) => props.handledate1Change(e.target.value)}/>

            <label htmlFor="date2">Project2</label>
            <input type="text"  id="date2" placeholder="Otp Via Mail" onChange={(e) => props.handlepro2Change(e.target.value)}/>

            
            <label htmlFor="period1">Date</label>
            <input type="text"  id="period1" placeholder="may 2024" onChange={(e) => props.handledate2Change(e.target.value)}/>

            <label htmlFor="date3">Project3</label>
            <input type="text"  id="pro3" placeholder="Institution" onChange={(e) => props.handlepro3Change(e.target.value)}/>

            <label htmlFor="period1">Date</label>
            <input type="text"  id="period1" placeholder="nov 2024" onChange={(e) => props.handledate3Change(e.target.value)}/>
        </div>
    );
  }
  
  export default Projectinput;
  