import { useState, useEffect } from 'react'
import { api } from './api'

function App() {

  useEffect(() => {

    async function apiTest() {
      const WAC_ID = 225000478;
      const url = `/home?wacId=${WAC_ID}`;

      const response = await api.get(url);
      console.log(response)

      const response2 = await api.get('/payments/initialize');
      console.log(response2)
    }
    
    apiTest()

  }, [])
  return (
    <div className="App">
      
    </div>
  )
}

export default App
