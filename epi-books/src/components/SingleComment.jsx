import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'

export default function SingleComment({comment}) {

  const removeComment = (comment) => {
    /* console.log(comment) */
    fetch('https://striveschool-api.herokuapp.com/api/comments/' + comment._id, {
      method: 'DELETE',
      headers: { 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTcxNjAzMTcsImV4cCI6MTcxODM2OTkxN30.bqrIYq7VrpiQgG5X885HS2AfENPgUz0dSGUkrW357Ek' 
      }
    }).then(response => response.json())
      .then(data => {
        // se tutto va a buon fine
        console.log(data)
        alert('Il commento è stato eliminato!!!!')
      })
      .catch(error => console.error(error))
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="outline-danger" className='float-end' onClick={() => removeComment(comment)}>x</Button>  
    </ListGroup.Item>
  )
}
