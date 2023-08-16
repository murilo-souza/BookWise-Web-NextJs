import { useState } from 'react'

import { Login } from './Login'
import Home from './home/index.page'

export default function Landing() {
  const [logged, setLogged] = useState(true)

  return <>{logged ? <Home /> : <Login />}</>
}
