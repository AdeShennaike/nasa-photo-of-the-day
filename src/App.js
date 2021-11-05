import React, {useState, useEffect} from "react";
import "./App.css"
import axios from 'axios'
import Footer from "./components/footer";
import Body from './components/body'
import Button from './components/Button'
import { API_KEY, BASE_URL } from "./constants/nasa";

function App() {
  const [nasa, setNasa] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => 
      setNasa(res.data)
      )
    .catch(err =>
      console.error(err)
    )
  },[])
  return (
    <div className="App">
      <p>{nasa.date}</p>
      <img src={nasa.hdurl} alt='The nebula'/>
      {/* <ToggleExpl/> could have also used this*/}
      <Button explanation = {nasa.explanation}/>
      <h1>{nasa.title}</h1>
      <Footer copyright={nasa.copyright}/>
    </div>
  );
}

export default App;
