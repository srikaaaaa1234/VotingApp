import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './screens/Main'
import BaseForm from './components/BaseForm'
import Vote from './components/Vote'
const tableobj = {
  "Heading" : ["Name","Has Voted"]
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Main/> */}
      {/* <BaseForm/> */}
      <Vote/>
    </>
  )
}

export default App
