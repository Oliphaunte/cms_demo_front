import React    from 'react';
import { Link } from 'react-router-dom';

import { slide as Menu }    from 'react-burger-menu'

let Hamburger_Menu = () => (
  <Menu width={'100%'} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right isOpen={ false } >
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
  </Menu>
)

module.exports = Hamburger_Menu;