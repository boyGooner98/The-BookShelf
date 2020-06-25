import React from 'react';
import SideNav from 'react-simple-sidenav';
import Options from './options';
import '../../styleAll.css';

const NavBar = props => {
  return (
    <div>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
          background: '#242424',
          maxWidth: '230px'
        }}
          >
              <Options />
      </SideNav>
    </div>
  );
};

export default NavBar;
