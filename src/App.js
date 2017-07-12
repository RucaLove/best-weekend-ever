import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
import Nav from './components/Nav';

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
        <Nav />
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
