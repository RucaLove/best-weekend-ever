import React from 'react'
import Event from './Event'

const Events = ({ events, user, addPoints, }) => {
  return (
    <div className="container" id="events-container">
      <div className="row">
        {events.map((event,i) => (
          <Event
            addPoints={addPoints}
            key={ i }
            event= {event}
            user={user}
          />
        ))}
      </div>
    </div>
  )
}

export default Events
