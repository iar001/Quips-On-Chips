import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header class="header">
      <div>
        <h1><Link to='/' onClick={props.resetForm}>Quips on Chips</Link></h1>
      </div>
      <div>
        {props.currentUser
          ?
          <>
            <p>UserName: {props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </>
          :
          <button onClick={props.handleLoginButton}>Login or Register</button>
        }
      </div>
    </header>
  )
}