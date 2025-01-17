function Projectsinfo() {
    const titles = ["Hotel Reservation", "Otp Via Mail", "Institution"];
    const dates = ["Jan 2024", "May 2024", "Aug 2023"];

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
            <div className="heading">
                <h5>{title}</h5>
            </div>
            <div className="due">
                <p>{date}</p>
            </div>
        </div>
    );
}

export default Projectsinfo;
