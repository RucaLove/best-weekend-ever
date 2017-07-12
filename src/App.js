import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const App = ({
  text
}) => {
  return (
    <div className="container">
      <div className="row">
        <Header />
        // <nav>
        //   <div className="nav-wrapper teal lighten-2">
        //     <div className="col s12">
        //       <a href="#" className="brand-logo">Example Component</a>
        //       <ul id="nav-mobile" className="right hide-on-med-and-down">
        //         <li><a href="#">React</a></li>
        //         <li><a href="#">Redux</a></li>
        //         <li><a href="#">React Router</a></li>
        //       </ul>
        //     </div>
        //   </div>
        // </nav>
      </div>
      <div className="row">
        <div className="col s12">
          <p>
            The message is:
          </p>
          <blockquote>
            {text}
          </blockquote>
        </div>
      </div>

    </div>
  )
}

export default App;
