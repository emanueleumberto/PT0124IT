import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import fantasy from '../books/fantasy.json';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import CommentArea from './CommentArea';

export default function BookDetail() {

    const { asin } = useParams();
    const book = fantasy.find( b => b.asin === asin); // {} || undefined
    const navigate = useNavigate();

  return (
    <Row>
        <Col md={8}>
            <Row>
                <Col md={5}>
                    <Card style={{ width: "20rem"}}>
                        <Card.Img variant="top" src={book.img} />
                    </Card>
                </Col>
                <Col md={7}>
                    <h1>Book Details</h1>
                    <ListGroup>
                        <ListGroup.Item>Title: {book.title} </ListGroup.Item>
                        <ListGroup.Item>Category: {book.category} </ListGroup.Item>
                        <ListGroup.Item>Price: €{book.price}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Button variant="outline-dark" className='w-100 my-3' onClick={() => navigate('/')}>Back to Home</Button>  
        </Col>
        <Col md={4}>
            <CommentArea asin={asin}  />
        </Col>
    </Row>
  )
}
