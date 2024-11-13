import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3000/user")
      .then((res) => {
        setData(res.data); 
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <div>
    <h1>
    
    {data}
    </h1>
    </div>
  );
}

export default App;
