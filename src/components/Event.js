import React from 'react'
import { Button, Card, CardTitle, Col, Icon } from 'react-materialize';

const Event = ({ addPoints, event, user }) => {
  return (
		<Col s={12} m={4}>
      <Card header={
        <CardTitle image = {event.img} ></CardTitle>} actions={[
          <div>
            <h5 className="event-points">
            {event.points}pts
            </h5>
            <Button  floating large className='blue add-event-button' waves='light' onClick={() => addPoints(event)}><Icon>add</Icon></Button>
          </div>]}>
        <h5 className="card-title">
        {event.name}
        </h5>
      </Card>
    </Col>
  )
}



export default Event
