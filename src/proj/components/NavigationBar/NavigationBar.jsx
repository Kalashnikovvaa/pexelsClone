import React from 'react';

import './NavigationBar.css';
import classnames from 'classnames';

import Search from '../../containers/Search';

function NavigationBar({ className }) {
  return (
    <div className={classnames('nav', className)}>
        <div className={classnames('navigation-bar', className)}>
      <a href=".">
        <img className="navigation-bar__icon" src="https://pbs.twimg.com/profile_images/1267556513650016258/VhYtxtLE_400x400.jpg" />
        <p className="navigation-bar__title">Pexels</p>
      </a>
        </div>
      <Search className="nav-search" />
    </div>
  );
}

export default NavigationBar;
