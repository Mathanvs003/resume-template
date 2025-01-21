


const Hobbiesinfo = (props) => {   
    const data = [
        {title:'Hobbies',items:[props.hob1,props.hob2,props.hob3]},
        {title:'Personal Info',items:[props.per1,props.per2,props.per3]}
    ]
    
        return <div className="hobbies">
            {data.map((item) =><>
            <h4>{item.title}</h4>
            <div className="hobbiescnt">
                {item.items.map((each) =>
                <li>{each}</li>
                )}
           </div>
           </>)}   
        </div> 
}

export default Hobbiesinfo
