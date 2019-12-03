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
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>logout</button>
          </>
          :
          <button onClick={props.handleLoginButton}>Login/register</button>
        }
      </div>
    </header>
  )
}