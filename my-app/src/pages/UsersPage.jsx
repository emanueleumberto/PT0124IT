import React from 'react'
import { Link } from 'react-router-dom'

export default function UsersPage() {
  return (
    <>
      <h1 className="text-center">Users Page</h1>
      <ul>
        <li><Link to="/users/123/Mario" >Users 123</Link></li>
        <li><Link to="/users/456/GIuseppe" >Users 456</Link></li>
        <li><Link to="/users/789/Francesca" >Users 789</Link></li>
      </ul>
    </>
  )
}
