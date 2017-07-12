import React from 'react'
import SingleEvent from './SingleEvent'

const Events = ({ events
}) => {
  return (
    <div>{events.map((oneevent) => <SingleEvent oneevent= {oneevent}/>)}

    </div>
  )
}

export default Events
