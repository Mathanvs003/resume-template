function Intrestinput(props) {
    return (  
        <div className="areainput">
          <h3>Area Of Interest Portion</h3>
            <label htmlFor="int1">Interest1</label>
            <input type="text"  id="int1" placeholder="Game Developer"  onChange={(e) => props.handleInt1Change(e.target.value)}/>

            <label htmlFor="int2">Interest2</label>
            <input type="text"  id="int2" placeholder="Software Developer" onChange={(e) => props.handleInt2Change(e.target.value)}/>

            <label htmlFor="int3">Interest3</label>
            <input type="text"  id="int3" placeholder="Database Administration" onChange={(e) => props.handleInt3Change(e.target.value)}/>

            
        </div>
    );
  }
  
  export default Intrestinput;
  