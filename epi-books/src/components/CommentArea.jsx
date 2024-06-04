import React, { useEffect, useState } from 'react'
import AddComment from './AddComment';
import CommentList from './CommentList';
import { Spinner } from 'react-bootstrap';


const URLCommentsAPI = 'https://striveschool-api.herokuapp.com/api/books/';

export default function CommentArea({ asin }) {

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
        fetch(URLCommentsAPI+asin+"/comments/", {
            headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTcxNjAzMTcsImV4cCI6MTcxODM2OTkxN30.bqrIYq7VrpiQgG5X885HS2AfENPgUz0dSGUkrW357Ek' }
        }).then( response => response.json() )
          .then( data => {
                  setComments(data)
                  setIsLoading(false);
                })

                
    }, [asin])

  return (
    <div>
        {isLoading && <Spinner animation="border" role="status" /> }
        <AddComment elementId={asin} />
        <CommentList comments={comments} />
    </div>
  )
}
