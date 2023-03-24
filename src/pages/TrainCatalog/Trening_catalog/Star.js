import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCard, setCard } from '../../../store/slices/mainSlice'
import classes from "./css/catalog.module.css"

function Star({card,id}) {
    console.log(id)
    const cards= JSON.parse(localStorage.getItem('active')) ? JSON.parse(localStorage.getItem('active')) : []
    const [act, setAct] = useState(cards.some(item=>item===id) ?  true : false)
    const dispatch = useDispatch()
    const {favCards}= useSelector(state=>state.main)

    const handleClick = () => {
      if(cards.includes(id)){
        setAct(cards.filter(item=>item !== id).some(item=>item===id) ? true : false)
        dispatch(deleteCard(id))
        localStorage.setItem('active', JSON.stringify(cards.filter(item=>item !== id)))
      }else{
        dispatch(setCard({...card,id:id}))
        localStorage.setItem('active',JSON.stringify([...cards,id]))
        setAct([...cards,id].some(item=>item===id) ?  true : false)
      }
    }
  return <div onClick={handleClick} className={`${classes.trening_star} ${act ? classes.active : ""}`}></div>
}

export default Star