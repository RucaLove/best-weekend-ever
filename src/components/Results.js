import React from 'react'

import Result from './Result';


const Results = ({
  user
}) => {
  return (
    <div className="collection">{ user.map((result,i) => <Result key={ i } result={ result } />) }</div>
  )
}

export default Results
