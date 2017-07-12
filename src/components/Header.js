import React from 'react'

import Nav from './Nav';


const Header = ({
}) => {
  return (
    <nav>
      <div className="nav-wrapper yellow lighten-2">
        <div className="col s12">
          <a href="#" className="brand-logo center">Gameify Yo Summah</a>
          <Nav />
        </div>
      </div>
    </nav>
  )
}

export default Header
