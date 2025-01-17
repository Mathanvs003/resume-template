import pht from './user.png'

function Header() {
    return (
            <div className="top">
                <header id="header">
                    <div className="topone">
                    <img src={pht} alt="User profile" />
                    </div>
                    <div className="toptwo">
                    <h2>Maddy</h2>
                    <h5>mathans@insytix.com</h5>
                    <h5>74484 30019</h5>
                    <h5>Additional information can go here</h5>
                    </div>
                </header>
        </div>
    );
  }

  export default Header;
      