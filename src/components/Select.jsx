import { forwardRef, useId } from "react";
import React  from 'react'

function Select ({
    option ,
    label , 
    className = "",
    ...props
}, ref) {
    const id = useId();
  return (
    <div className="w-full">
        {label &&  <label htmlFor={id} className=""></label>}
    <select {...props} id={id} ref={ref} className= {``}>
          {option?.map((option)=> (
            <option key={option} value={option}>
                {option}
            </option>
          ) )}
    </select>
    </div>
  )
}

export default React.forwardRef(Select)