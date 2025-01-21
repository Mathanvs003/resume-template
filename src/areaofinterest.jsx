function Areaofintrest(props){
    var roles=[props.int1,props.int2,props.int3]
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