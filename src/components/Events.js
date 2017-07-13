import React from 'react'
import Event from './Event'

const Events = ({ events, user, addPoints, }) => {
  return (
    <div className="events-container" id="events-container">
      <div className="row">
        <div className="col m8 offset-m2">
        {events.map((event,i) => (
          <Event
            addPoints={ addPoints }
            key={ i }
            event= { event }
            user={ user }
          />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Events
