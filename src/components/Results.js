import React from 'react'

import Result from './Result';

const Results = ({
  user
}) => {
  return (
    <div className="container">
      <div className="collection">
        <div className="collection-item row grey lighten-3">
          <div className="col s8">Event</div>
          <div className="col s2">Points</div>
        </div>
          { user.map((result,i) => <Result key={ i } result={ result } />) }
      </div>
    </div>
  )
}

export default Results
