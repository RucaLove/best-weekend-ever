import React from 'react'
import {Button, Card, CardTitle, Col} from 'react-materialize';

const Event = ({ addPoints, event, user }) => {
  return (
		<Col s={12} m={4}>
      <Card header={
        <CardTitle image = {event.img} ></CardTitle>} actions={[
        <Button floating large className='red' waves='light' icon='add' onClick={() => addPoints(event)}/>]}>
        <div className="card-title">
        {event.name} {event.points}pts
        </div>
      </Card>
    </Col>
  )
}



export default Event
