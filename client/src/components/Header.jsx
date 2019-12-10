import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header class="header">
      <div id="quips-on-chips-header">
        <h1><Link to='/' onClick={props.resetForm}>Quips on Chips</Link></h1>
      </div>
      <div class="login-button-header">
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
            onClick={props.handleLoginButton}>Login/Register</button>
        }
      </div>
    </header>
  )
}