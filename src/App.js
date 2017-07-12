import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
// import Nav from './components/Nav';
import Results from './components/Results';
import Events from './components/Events';

const events = [{event:'Swim',points:1, img: "http://media.istockphoto.com/photos/friends-enjoying-a-pool-party-picture-id524323159?k=6&m=524323159&s=612x612&w=0&h=_IBOSTI2_sR_pkaspsp28LyaguoTCZ_-VUhvoGWbLQs="},
{event:'Run',points:3},{event:'Hike',points:4},{event:'Festival',points:10},{event:'BBQ',points:4},]

const user = [{event:'Swim',points:1},{event:'Hike',points:4},{event:'Festival',points:10},{event:'BBQ',points:4}]

const App = ({
  text
}) => {
  return (
    <div className="container">
      <div className="row">
        <Header />
        <Events events={ events }/>
        <Results user ={ user }/>
      </div>
      <div className="row">
        <div className="col s12">

        </div>
      </div>

    </div>
  )
}

export default App;
