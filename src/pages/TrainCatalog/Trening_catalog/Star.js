import React, {useState} from 'react'
import classes from "./css/catalog.module.css"

function Star() {
    const [act, setAct] = useState(false)
    
    const handleClick = () => setAct(!act)
    

  return <div onClick={handleClick} className={`${classes.trening_star} ${act ? classes.active : ""}`}></div>
  
}

export default Star