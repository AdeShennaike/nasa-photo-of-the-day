import React, {useState} from 'react'


    const ToggleDivExpl = (props) => {
    const [toggled, setToggled] = useState(true)
    const toggleEpla = () => setToggled(!toggled)

    return (
        <div>
            <button onClick={toggleEpla}>Explanation</button>
            {toggled && <p>{props.explanation}</p>}
        </div>
    )
    }
