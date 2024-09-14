import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card userName="Shiva" places={["Kasi","SomaNath"]} imageURL="https://images.pexels.com/photos/7104962/pexels-photo-7104962.jpeg?auto=compress&cs=tinysrgb&w=400"/>
    <Card userName="Narayana" places={["Tirupathi","PadmaNabha"]} imageURL="https://images.pexels.com/photos/27958600/pexels-photo-27958600/free-photo-of-lord-krishna.jpeg?auto=compress&cs=tinysrgb&w=400"/>
    </>
  )
}

export default App
