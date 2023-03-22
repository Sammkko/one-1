import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import stl from '../../css/Abonement.module.css'
import { ReactComponent as Krestik } from '../../imgs/krestik.svg'
import { closeModal2 } from '../../store/slices/authSlice'
import Button from '../UI/Button'

function CardModalTwo(props) {
	const dispatch = useDispatch()
	const { modal2, modalPrice } = useSelector(state => state.modal)
	const nav = useNavigate()
	const handleClose = () => {
		dispatch(closeModal2())
	}

	const handleBye = () => {
		dispatch(closeModal2())
		Swal.fire('оплачено', 'оплачено', 'success')
		nav('/')
	}

	return (
		<Modal
			open={modal2}
			onClose={() => {
				dispatch(closeModal2())
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
							type='text'
							name=''
							id=''
							placeholder='Введите Имя , указанное на карточке'
						/>
					</div>
					<div className={stl.modal2__second}>
						<span className={stl.modal2__span}>№ карты</span>
						<input
							type='number'
							name=''
							id=''
							placeholder='1234567890123456'
						/>
					</div>
					<div className={stl.modal2__With}>
						<WithInput plac='10/26'>exp.</WithInput>
						<WithInput plac='555'>cvc</WithInput>
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

function WithInput({ children, plac }) {
	return (
		<div className={stl.WithInput}>
			<span className={stl.modal2__span}>{children}</span>
			<input type='text' name='' id='' placeholder={plac} />
		</div>
	)
}

export default CardModalTwo
