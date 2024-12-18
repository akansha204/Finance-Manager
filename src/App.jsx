import { useState } from 'react'
import Login from './components/Login'
import '@fontsource/poppins'; // Defaults to 400 weight
import '@fontsource/poppins/600.css'; // Import specific weights if needed


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-[#093030] text-4xl font-bold text-center pt-20 pb-20 font-poppins'>Welcome</h1>
      <Login></Login>
    </>
  )
}

export default App
