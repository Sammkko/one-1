import React from 'react'
import Card from '../../components/abonementsComponent/Card'
import CardModal from '../../components/abonementsComponent/CardModal'
import CardModalTwo from "../../components/abonementsComponent/CardModalTwo";
import stl from '../../css/Abonement.module.css'
import Navbar from "../../../../../components/navbar/Navbar";

const cardsInner = [
    {
        h1: '1 месяц',
        h2: 'Доступ к 30 программам',
        h3: 'Занимайся в любое время, и в любом месте.',
        h4: '500',
        h5: 'Купить'
    },
    {
        h1: '6 месяцев',
        h2: 'Доступ к 180 программам',
        h3: 'Занимайся в любое время, и в любом месте.',
        h4: '1500',
        h5: 'Купить'
    },
    {
        h1: '12 месяцев',
        h2: 'Доступ к 360 программам',
        h3: 'Занимайся в любое время, и в любом месте.',
        h4: '5000',
        h5: 'Купить'
    },
]

function Abonement() {
    return (
        <>
        <Navbar/>
    <section className={stl.abonement}>
            <div className={stl.container}>
                <div className={stl.abonement__inner}>
                    <h1>
                        Выбери свой Абоненмент.
                        <br/>
                        Постоянство - путь к Совершенству!
                    </h1>
                    <div className={stl.cards}>
                        {cardsInner.map(item => <Card n1={item.h1} n2={item.h2} n3={item.h3} n4={item.h4} n5={item.h5}/>)}
                    </div>
                </div>
            </div>
            <CardModal/>
            <CardModalTwo/>
        </section>
        </>
    )
}

export default Abonement;