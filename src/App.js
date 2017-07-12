import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
import Results from './components/Results';
import Events from './components/Events';

const events = [{event:'Swim',points:3, img: "http://media.istockphoto.com/photos/friends-enjoying-a-pool-party-picture-id524323159?k=6&m=524323159&s=612x612&w=0&h=_IBOSTI2_sR_pkaspsp28LyaguoTCZ_-VUhvoGWbLQs="},
{event:'Run',points:2, img: "https://s-media-cache-ak0.pinimg.com/originals/9b/95/88/9b958800fc7f853ac84ff29800013c3d.jpg"},
{event:'Hike',points:4, img: "http://i52.tinypic.com/m9t9cl.jpg"},
{event:'Festival',points:10, img: "http://ampthemag.com/wp-content/uploads/2017/03/fest-girl.jpg"},
{event:'BBQ',points:4, img: "http://i4.mirror.co.uk/incoming/article3533182.ece/ALTERNATES/s615/Raging-fire-from-charcoal-barbecue-grill.jpg"},
{event: 'Rock Climbing', points: 5, img:"http://www.toptenz.net/wp-content/uploads/2013/05/Rock-Climbing.jpg"},
{event: 'Movie Theater', points: 1, img:"http://timothywhite.com/sites/default/files/images/portfolio/pee-wee_herman.jpg"},
{event: 'Party', points: 5, img:"http://now-here-this.timeout.com/wp-content/uploads/2013/12/House-party.jpg"},
{event: 'Travel', points: 15, img:"http://marketingland.com/wp-content/ml-loads/2016/05/travel-search-suitcasebeach-ss-1920.png"}]

const user = [{event:'Swim',points:1},{event:'Hike',points:4},{event:'Festival',points:10},{event:'BBQ',points:4}]

const App = ({
  text
}) => {
  return (
    <div className="container">
      <div className="row">
        <Header />
        <Events events={ events } user={ user }/>
      </div>
      <div className="row">
        <div className="col s12">
        <Results user ={ user }/>
        </div>
      </div>

    </div>
  )
}

export default App;
