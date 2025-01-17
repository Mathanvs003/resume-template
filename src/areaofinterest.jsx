function Areaofintrest(){
    var roles=["Game Developer","Software Developer","Database Administration"]
    return(
        <div className="aofin">
            <h4>AREA OF INTEREST</h4>
            <div className="arealist">
                {roles.map((role,index) => <Areaitems key={index} role={role}/>)}
            </div>

        </div>
    );
}
function Areaitems({role}){
    return(
            <li>{role}</li>
    )
}
export default Areaofintrest