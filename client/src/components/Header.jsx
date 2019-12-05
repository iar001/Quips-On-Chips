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
            <div id="login-shape">
              <div>
                <p>Hello, {props.currentUser.username}</p>
              </div>
              <div>
                <button
                  id="logout-button"
                  onClick={props.handleLogout}>Logout</button>
              </div>
            </div>


          </>
          :
          <button
            id="login-button"
            onClick={props.handleLoginButton}>Login or Register</button>
        }
      </div>
    </header>
  )
}