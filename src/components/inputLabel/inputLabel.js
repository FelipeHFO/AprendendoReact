import React, {useState} from "react"
import "./inputLabel.css"

const InputLabel = ({labelValue, inputType, inputPH, inputID, handleOnChange}) => {

    const [value, setValue] = useState('')

    return(
        <>
            <label htmlFor={inputID}>{labelValue}</label>
            <input id={inputID} type={inputType} placeholder={inputPH} onChange={(event) => handleOnChange(event.target.value)}></input>
        </>
    )
}

export default InputLabel