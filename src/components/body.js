import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API_KEY, BASE_URL } from "./constants/nasa";


export default function body (props) {
    const [explanation, setExplanation] = useState()
    
useEffect(() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then(res => 
    setExplanation(res.data)
    )
  .catch(err =>
    console.error(err)
  )
},[])
}

return (
    <div className='body'>
<p>
    {explanation}
</p>
    </div>
)