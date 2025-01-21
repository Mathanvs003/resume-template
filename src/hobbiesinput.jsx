function Hobbiesinput(props) {
    return (  
        <div className="proinput">
          <h3>Hobbies Portion</h3>
            <label htmlFor="hob1">Hobbies1</label>
            <input type="text"  id="hob1" placeholder="Reading Books"  onChange={(e) => props.handlehob1Change(e.target.value)}/>

            <label htmlFor="hob2">Hobbies2</label>
            <input type="text"  id="hob2" placeholder="Playing Games" onChange={(e) => props.handlehob2Change(e.target.value)}/>

            <label htmlFor="hob3">Hobbies3</label>
            <input type="text"  id="hob3" placeholder="Listening Music" onChange={(e) => props.handlehob3Change(e.target.value)}/>

          <h3>Personal Portion</h3>
            
            <label htmlFor="info1">Info1</label>
            <input type="text"  id="info1" placeholder="Autodidact" onChange={(e) => props.handleper1Change(e.target.value)}/>

            <label htmlFor="info2">Info2</label>
            <input type="text"  id="info2" placeholder="Self-Motivation" onChange={(e) => props.handleper2Change(e.target.value)}/>

            <label htmlFor="info3">info3</label>
            <input type="text"  id="info3" placeholder="Adaptability" onChange={(e) => props.handleper3Change(e.target.value)}/>
        </div>
    );
  }
  
  export default Hobbiesinput;
  