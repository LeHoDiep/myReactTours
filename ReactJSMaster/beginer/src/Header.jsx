//cú pháp viết tắt là rfc:react function component
import logo from './logo.svg'
import React from 'react'

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Tui là 1 functional component
      </a>
    </header>
  )
}

//giờ mình sẽ qua app dùng cái header bên trong app
