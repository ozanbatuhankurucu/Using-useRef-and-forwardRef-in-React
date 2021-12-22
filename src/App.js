import React, { useRef, useEffect } from 'react'
import Input from './components/Input'
import './App.css'

function App() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const loginButtonRef = useRef()

  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const handleSubmit = () => {
    alert(
      JSON.stringify({
        username: usernameRef.current.type
      })
    )
  }

  const handleKeyPress = (keyPress, inputName) => {
    if (keyPress.key === 'Enter') {
      switch (inputName) {
        case 'username':
          passwordRef.current.focus()
          break
        case 'password':
          loginButtonRef.current.focus()
          break
        default:
          break
      }
    }
  }

  return (
    <div className='App'>
      <div className='container'>
        <Input
          onKeyPress={(keyPress) => handleKeyPress(keyPress, 'username')}
          ref={usernameRef}
          type='text'
          placeholder='username'
        />
        <Input
          onKeyPress={(keyPress) => handleKeyPress(keyPress, 'password')}
          ref={passwordRef}
          type='password'
          placeholder='password'
        />
        <button ref={loginButtonRef} onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  )
}

export default App
