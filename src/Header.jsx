import React from 'react';
import 'react-dom';

class Header extends React.Component {
    render() {
        return(
            <>
    <nav>
      <div className="menu">
        <div className="leftmenu">
            <h1>Arjun</h1>
        </div>

        <div className="rightmenu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
        </div>
      </div>
    </nav>
            </>
        )
    }
}

export default Header;