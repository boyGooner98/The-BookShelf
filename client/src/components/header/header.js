import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import NavBar from './navbar';
import '../../styleAll.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  state = {
    showNav: false,
  };

  onHideNav = () => {
    this.setState({ showNav: false });
  };

  render() {
    return (
      <header className='headerContainer'>
        <div className = "head">
          <FontAwesomeIcon
            icon={faBars}
            style={{
              color: 'white',
              marginLeft: '5px',
            }}
            onClick={() => this.setState({ showNav: true })}
          />
          <NavBar
            showNav={this.state.showNav}
            onHideNav={() => this.onHideNav()}
          />
          <span className='headerSpan'>
            <Link to='/' className='HeadLink'>
              The Book Shelf
            </Link>
          </span>
        </div>
      </header>
    );
  }
}
export default Header;
