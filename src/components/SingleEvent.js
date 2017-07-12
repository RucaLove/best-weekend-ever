import React from 'react'
import {Button, Card, CardTitle, Col} from 'react-materialize';

const SingleEvent = ({oneevent,user}) => {
  return (
		<Col s={12} m={4}>
      <Card header={< CardTitle image = {oneevent.img} >{oneevent.event}</CardTitle>} actions={[ <Button floating large className='red' waves='light' icon='add' onClick={addPoints}/>]}>
      </Card>
    </Col>
  )
  function addPoints(){
    // console.log({oneevent},{user})
    for (let key in user){
      if(user[key].event==oneevent.event){
        console.log(user)
        return user[key].points += oneevent.points;
      }else if (key==user.length-1){
        console.log(user);
        return user.push({event:oneevent.event,points:oneevent.points});
      }
    }
  }
}



export default SingleEvent
