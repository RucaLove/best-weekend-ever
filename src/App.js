import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
import Results from './components/Results';
import Events from './components/Events';

class App extends React.Component {

  state = { events, user: [], score: [{ total: 0 }] };

  addPoints = (event) => {

    const newUsersEvents = this.state.user.concat([event]);

    this.setState({ user: newUsersEvents });
  }

  submitScore = (score) => {

    const newScore = this.state.score.concat([score]);

    this.setState({ score: newScore, user: [], });
  }

  render() {
    const { events, user, score } = this.state;

    return (
      <div className="body-container" id="body-container">
          <Header
            score={ score }/>
          <Results
            events={ events } 
            user ={ user }
            score={ score }
            submitScore={ this.submitScore }/>
          <Events
            events={ events }
            user={ user }
            addPoints={ this.addPoints }/>
      </div>
    )
  }
}

const events = [
  {name:'Swim',
  points:3,
  img: "http://media.istockphoto.com/photos/friends-enjoying-a-pool-party-picture-id524323159?k=6&m=524323159&s=612x612&w=0&h=_IBOSTI2_sR_pkaspsp28LyaguoTCZ_-VUhvoGWbLQs="},
  {name:'Run',
  points:4,
  img: "https://s-media-cache-ak0.pinimg.com/originals/9b/95/88/9b958800fc7f853ac84ff29800013c3d.jpg"},
  {name:'Hike',
  points:6,
  img: "http://i52.tinypic.com/m9t9cl.jpg"},
  {name:'Festival',
  points:10,
  img: "http://ampthemag.com/wp-content/uploads/2017/03/fest-girl.jpg"},
  {name:'BBQ',
  points:7,
  img: "http://i4.mirror.co.uk/incoming/article3533182.ece/ALTERNATES/s615/Raging-fire-from-charcoal-barbecue-grill.jpg"},
  {name: 'Rock Climbing',
  points: 8,
  img:"http://www.toptenz.net/wp-content/uploads/2013/05/Rock-Climbing.jpg"},
  {name: 'Movie Theater',
  points: 2,
  img:"http://timothywhite.com/sites/default/files/images/portfolio/pee-wee_herman.jpg"},
  {name: 'Party',
  points: 10,
  img:"http://now-here-this.timeout.com/wp-content/uploads/2013/12/House-party.jpg"},
  {name: 'Travel',
  points: 20,
  img:"http://marketingland.com/wp-content/ml-loads/2016/05/travel-search-suitcasebeach-ss-1920.png"}]

export default App;
