import React from 'react'

const Result = ({result}) => {
  return (
    <div className="collection">
      <div className="event-title">
        {result.event}
      </div>
      <div className="event-points">
        {result.points}
      </div>
    </div>
  )
}

export default Result
