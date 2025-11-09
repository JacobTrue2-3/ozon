import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '@components/UI/Header'

const API_URL = import.meta.env.VITE_API_URL;


function App() {
  const [items, setItems] = useState([])

  const tempText = "Hello World!"
  const h1Click = () => { 
    console.log("Нажали на h1")
  }

  useEffect(() => {
    axios.get(`${API_URL}/api/items/`)
      .then(response => setItems(response.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <Header />
      <h1 onClick={h1Click} onMouseEnter={() => console.log("Навели курсор на h1")}>Список Items {tempText}</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App