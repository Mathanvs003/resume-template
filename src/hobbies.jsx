
const data = [
    {title:'Hobbies',items:["Reading Books","Playing Games","Listening Music"]},
    {title:'Personal Info',items:["Autodidact","Self-Motivation","Adaptability"]}
]

const Hobbiesinfo = () => {      
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
