import React, { useState } from 'react'
import { useEffect } from 'react';
import { Container, Form, ListGroup } from 'react-bootstrap';

const UrlUsersAPI = 'https://jsonplaceholder.typicode.com/users/';
const UrlPostsAPI = 'https://jsonplaceholder.typicode.com/posts/';

export default function MyComponentFunc() {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [userSelected, setUserSelected] = useState(0);

    useEffect(()=> {
        // ComponetDidMount
        // Invocato solo una volta dopo il caricamento del dom
        fetch(UrlUsersAPI)
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])

    useEffect(()=> {
        // ComponetDidMount + componentDidUpdate
        // Invocato dopo il caricamento del dom e dopo ogni cambiamento di userSelected
        fetch(UrlUsersAPI+userSelected+'/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [userSelected])

    
    const handleChangeUser = (e) => {
        /* console.log(e.target.value) */
        setUserSelected(e.target.value);
    }

    return (
        <Container>
            <h1>Users</h1>
            <Form.Select className='my-3' aria-label="Default select example" onChange={handleChangeUser}>
                <option>Open this select menu</option>
                {users.map(u => <option value={u.id}>{u.name}</option>)}
            </Form.Select>
            <Form.Select className='my-3' aria-label="Default select example">
                <option>Open this select menu</option>
                {posts.map(post => <option value={post.id}>{post.title}</option>)}
            </Form.Select>
            <ListGroup className='my-3'>
                {comments.map(comment => <ListGroup.Item>{comment.name} - {comment.email}</ListGroup.Item>)}
            </ListGroup>
        </Container>
    )
}
