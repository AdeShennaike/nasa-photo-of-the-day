import React, {useState} from 'react'


    export default function ToggleExpl(props) {
    const [toggled, setToggled] = useState(false)
    const toggleEx = () => setToggled(!toggled)

    return (
        <div>
            <button onClick={toggleEx}>{toggleEx? 'Explanation':toggled}</button>
            {toggled && <p>{props.explanation}</p>}
        </div>
    )
    }
