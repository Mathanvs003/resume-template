
function Header(props) {
    return (
            <div className="top">
                <header id="header">
                    <div className="topone">
                    <img src={props.images} alt="User profile" />
                    </div>
                    <div className="toptwo">
                    <h2>{props.inputName}</h2>
                    <h5>{props.inputMail}</h5>
                    <h5>{props.phoneNum}</h5>
                    <h5>{props.link}</h5>
                    </div>
                </header>
        </div>
    );
  }

  export default Header;
      