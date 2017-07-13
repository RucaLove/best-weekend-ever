import React from 'react'

const Result = ({ result }) => {
  return (
    <div className="collection-item row">
        <div className="col s6">{result.name}</div>
        <div className="col s6">{result.points*result.count}</div>
    </div>
  )
}

export default Result
