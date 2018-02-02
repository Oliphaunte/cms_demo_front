import React from 'react'
import { Link } from 'react-router-dom';

import Hamburger_Menu from './hamburger'

const Header = () => (
  <header>
    <aside>
      <Link to="/"> 
        <img src={require('@/app/assets/images/logo.svg')} />
      </Link>
    </aside>

    <aside>
      <p>212.555.5555</p>
      <p>login</p>

      <Hamburger_Menu></Hamburger_Menu>
    </aside>
  </header>
)

export default Header