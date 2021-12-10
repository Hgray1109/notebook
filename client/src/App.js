import UnAuthenticatedApp from './not-logged-in/UnAuthenticatedApp'
import AuthenticatedApp from './logged-in/AuthenticatedApp'
import React, { useState, useEffect } from 'react'

import './App.css';






function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [rerender])
  

  if (!authChecked) { return <div><h1>loading...</h1></div> }
  return (
    <div className="container">




      {currentUser ? (
        <AuthenticatedApp
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          rerender={rerender}
          setRerender={setRerender}
        />
      ) : (
        <UnAuthenticatedApp
          setCurrentUser={setCurrentUser}
        />
      )
      }
    </div>
  );
}

export default App;
