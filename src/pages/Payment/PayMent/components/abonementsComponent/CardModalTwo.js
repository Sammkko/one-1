import { Modal } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { afterPayed, closeModal2 } from '../../../../../store/slices/authSlice'
import stl from '../../css/Abonement.module.css'
import { ReactComponent as Krestik } from '../../imgs/krestik.svg'
import Button from '../UI/Button'

function CardModalTwo(props) {
	const dispatch = useDispatch()
	const { modal2, modalPrice } = useSelector(state => state.modal)
	const nav = useNavigate()
	const handleClose = () => {
		dispatch(closeModal2())
	}
	const [card,setCard]=useState({
			"full_name": '',
			"card_number": '',
			"month": '',
			"cvc": '',
			price:modalPrice
	})
	const handleChangeInp =({target})=>{
		setCard({...card,[target.name]:target.value})
	}
	const handleBye = () => {
		if(card.card_number && card.cvc && card.full_name && card.month){
			dispatch(closeModal2())
			dispatch(afterPayed())
			Swal.fire('оплачено', 'оплачено', 'success')
			nav('/catalogContinuing')
		}else{
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Вы не заполнили карту',
			})
		}
	}

	return (
		<Modal
			open={modal2}
			onClose={() => {
				dispatch(closeModal2())
			}}
			sx={{
				zIndex: 10,
			}}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<div className={stl.modal2}>
				<div className={stl.modal2__title}>
					<span>Введите данные карты</span>
					<Krestik onClick={handleClose} className={stl.krestik} />
				</div>
				<div className={stl.modal2__container}>
					<div className={stl.modal2__first}>
						<span className={stl.modal2__span}>ФИО</span>
						<input
						onChange={handleChangeInp}
							type='text'
							id=''
							value={card.full_name}
							name = 'full_name'
							placeholder='Введите Имя , указанное на карточке'
						/>
					</div>
					<div className={stl.modal2__second}>
						<span className={stl.modal2__span}>№ карты</span>
						<input
						onChange={handleChangeInp}
							value={card.card_number}
							type='number'
							name='card_number'
							id=''
							placeholder='1234567890123456'
						/>
					</div>
					<div className={stl.modal2__With}>
						
						<WithInput plac='10/26' name='month' onChange={handleChangeInp}  value={card.month}>exp.</WithInput>
						<WithInput plac='555'name='cvc'   onChange={handleChangeInp} value={card.cvc}>cvc</WithInput>
					</div>
					<div className={stl.modal2__prices}>
						<div className={stl.modal2__prices__blocks}>
							<span className={stl.modal2__prices__span1}>
								Сумма
							</span>
							<span className={stl.modal2__prices__span2}>
								{' '}
								{modalPrice}
							</span>
						</div>
						<div className={stl.modal2__prices__blocks}>
							<span className={stl.modal2__prices__span1}>
								Налоги
							</span>
							<span className={stl.modal2__prices__span2}>
								{' '}
								20c
							</span>
						</div>
						<div className={stl.modal2__prices__blocks}>
							<span className={stl.modal2__prices__span1}>
								Общая сумма
							</span>
							<span className={stl.modal2__prices__span2}>
								{' '}
								<strong>{Number(modalPrice) + 20}c</strong>
							</span>
						</div>
					</div>
					<div className={stl.modal2__btn}>
						<Button
							style={{
								width: '236.62px',
								height: '60px',
							}}
							onClick={handleBye}
						>
							Оплатить
						</Button>
					</div>
				</div>
			</div>
		</Modal>
	)
}

function WithInput({ children, plac,...props }) {
	return (
		<div className={stl.WithInput}>
			<span className={stl.modal2__span}>{children}</span>
			<input type='number'  {...props}  placeholder={plac} />
		</div>
	)
}

export default CardModalTwo
