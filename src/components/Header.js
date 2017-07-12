import React from 'react'

const Header = ({
}) => {
  return (
    <nav>
      <div className="nav-wrapper teal lighten-2">
        <div className="col s12">
          <a href="#" className="brand-logo">Example Component</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">React</a></li>
            <li><a href="#">Redux</a></li>
            <li><a href="#">React Router</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
