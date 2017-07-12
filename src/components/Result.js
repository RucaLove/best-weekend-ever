import React from 'react'

const Result = ({result}) => {
  return (

    <div className="collection-item">
      <div className="row">
        <div className="col s8">{result.event}</div>
        <div className="col s2">{result.points}</div>
      </div>
    </div>
  )
}

export default Result
