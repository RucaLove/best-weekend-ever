import React from 'react'
import {Button, Card, CardTitle, Row, Col} from 'react-materialize';

const SingleEvent = ({oneevent}) => {
  return (
		<Col s={12} m={4}>
    <Card header={< CardTitle image = {oneevent.img} >{oneevent.event}</CardTitle>} actions={[ < a href = '#' > This is a Link < /a>]}>
    </Card>
    </Col>
  )
}

export default SingleEvent
