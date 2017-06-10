import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (<div> <nav className="indigo darken-4" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="#" className="brand-logo">Marvel Characters</a>
      </div>
    </nav>
    </div>
    )
  }
}

export default Header;