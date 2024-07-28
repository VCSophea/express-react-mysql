import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from './constants/app';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/`)
      .then((data) => {
        console.log(data)
        setData(data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {data ? data : "No data"}
          {/* {data.map((item, index) => (
            <li key={index}>{item.your_column_name}</li>
          ))} */}
        </ul>
      </header>
    </div>
  );
}

export default App;
