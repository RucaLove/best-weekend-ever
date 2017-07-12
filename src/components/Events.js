import React from 'react'
import SingleEvent from './SingleEvent'

const Events = ({ events,user
}) => {
  return (
    <div className="container">
    <div className="row">
      {events.map((oneevent) => <SingleEvent oneevent= {oneevent} user={user}/>)}
    </div>
    </div>
  )
}

export default Events
