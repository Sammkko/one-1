import React from 'react'
import { useDispatch } from 'react-redux'
import stl from '../../css/Abonement.module.css';
import Vector from '../../imgs/vertor.svg';
import { setModal } from '../../store/slices/authSlice';
function Card({ n1, n2, n3, n4, n5 }) {
    const dispatch = useDispatch()
    const handleDispatch = () => {
        dispatch(setModal(n4))
    }
    return (
        <div className={stl.card}>
            <p className={stl.n1}>{n1}</p>
            <div className={stl.n2Pos}>
                <div className={stl.vector}>
                    <img src={Vector} alt="" />
                </div>
                <span className={stl.n2}>{n2}</span>
            </div>
            <div className={stl.n2Pos}>
                <div className={stl.vector2}>
                    <img src={Vector} alt="" />
                </div>
                <span className={stl.n2}>{n3}</span>
            </div>
            <h4 className={stl.n4}>{n4} сом</h4>
            <div className={stl.btn__outer}>
                <button onClick={handleDispatch} className={stl.btn}>{n5}</button>
            </div>
        </div>
    )
}

export default Card;