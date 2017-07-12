import React from 'react'
import SingleEvent from './SingleEvent'

const Events = ({ events
}) => {
  return (
    <div className="container">
    <div className="row">
      {events.map((oneevent) => <SingleEvent oneevent= {oneevent}/>)}
    </div>
    </div>
  )
}

export default Events
