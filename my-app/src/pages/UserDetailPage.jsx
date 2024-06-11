import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function UserDetailPage() {
  const {id, name} = useParams();
  const navigate = useNavigate();
  console.log(id, name)

  

  return (
    <>
    <h1 className="text-center">User Detail Page</h1>
    <p>Ciao {name} id: {id}</p>
    <Link className="nav-link" to="/users">Back to Users</Link>
    <Button onClick={() => navigate('/users')}> Back to Users</Button>
    </>
  )
}
