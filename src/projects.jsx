function Projectsinfo(props) {
    const titles = [props.pro1,props.pro2,props.pro3];
    const dates = [props.date1,props.date2,props.date3];

    return (
        <div className="projects">
            <h4>PROJECTS</h4>
            {titles.map((title, index) => (
                <Projectitems key={index} title={title} date={dates[index]} />
            ))}
        </div>
    );
}

function Projectitems({ title, date }) {
    return (
        <div className="procnt">
            <div className="headingpro">
                <h5>{title}</h5>
            </div>
            <div className="due">
                <p>{date}</p>
            </div>
        </div>
    );
}

export default Projectsinfo;
