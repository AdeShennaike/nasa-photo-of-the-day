import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY, BASE_URL } from "./constants/nasa";

function App() {
  const [nasa, setNasa] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => 
      console.log(res)
      )
    .catch(err =>
      console.error(err)
    )
  },[])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <img src='{prop.data.url}' alt='The Nebula'/>
    </div>
  );
}

export default App;
