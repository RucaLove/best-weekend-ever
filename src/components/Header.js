import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import scoreReduce from './function.js'



const Header = ({ score, }) => {

score = scoreReduce(score)

  return (
    <nav>
      <div className="nav-wrapper amber darken-2">
        <div className="col s12">
          <span className="right highscore">Highscore: {score.total}</span>
          <a href="#" className="brand-logo animated flip left">Best Weekend Ever!</a>
        </div>
      </div>
    </nav>
  )
}

export default Header
