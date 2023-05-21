import { useState } from 'react'
import './App.css'

import AuthPage from "./AuthPage"
import ChatPage from "./ChatPage"

function App() {
  const [user, setUser] = useState(undefined)

  if (!user) {
    console.log('1')
    return <AuthPage onAuth = {(user) => setUser(user)}/>
  } else {
    console.log('2')
    return <ChatPage user = {user} />
  }
}

export default App
