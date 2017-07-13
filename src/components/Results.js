import React from 'react'
import { Button, Card, CardTitle, Col, Icon } from 'react-materialize';
import scoreReduce from './function.js'


import Result from './Result';

const Results = ({ user, score, submitScore }) => {

const filtered = [];
let total = 0;
const newUser = user.map(ele=>{
  total+=ele.points
  for (let key in filtered){
    if(filtered[key]==ele){
      return filtered[key].count+=1
    }
  }
  ele.count=1
  filtered.push(ele)
})

score = scoreReduce(score)

  return (
    <div className="results-container" id="results-container">
      <div className="collection" id="results-collection">
        <div className="collection-item row grey lighten-3">
          <div className="col s6">Event</div>
          <div className="col s6">Points</div>
        </div>
          { filtered.map((result,i) => <Result key={ i } result={ result }/>) }
        <div className="collection-item row grey lighten-3">
            <div className="col s6 offset-s1">{ total }</div>
            <div className="col s5 submit-score-div">
              <Button
                className="col s12 blue submit-score-button"
                waves='light'
                onClick={ () => submitScore({ total }) }>
                <Icon>add</Icon>
              </Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Results
