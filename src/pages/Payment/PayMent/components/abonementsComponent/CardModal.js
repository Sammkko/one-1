import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as Krestik } from '../../imgs/krestik.svg'
import { ReactComponent as Bank } from '../../imgs/bank.svg'
import  BankKyrgyz  from '../../imgs/kyrgyztan.svg'
import  master  from '../../imgs/master.svg'
import  elsom  from '../../imgs/elsom.svg'
import  visa  from '../../imgs/visa.svg'
import  OMoi  from '../../imgs/oMoi.svg'
import styl from '../../css/Abonement.module.css';
import Button from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, setModal2 } from '../../store/slices/authSlice'
function CardModal() {
    const banks = [
        {
            id: 1,
            img: <Bank />
        },
        {
            id: 2,
            img: <img src={BankKyrgyz}/>
        },
        {
            id: 3,
            img: <img src={master}/>
        },
        {
            id: 4,
            img: <img src={elsom}/>
        },
        {
            id: 5,
            img: <img src={OMoi}/>
        },
        {
            id: 6,
            img: <img src={visa}/>
        }
    ]

    const dispatch = useDispatch()
    const { modal1, modalPrice } = useSelector(state => state.modal)

    const handleClose = () => {
        dispatch(closeModal())
        dispatch(setModal2(false))
        setInp(null)
    }
    const [inp, setInp] = useState()

    return (
        <Modal
            open={modal1}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styl.modalWin}
                sx={{
                    outline: 'none',
                    width: '703px',
                    height: '846px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '30px',
                    border: '0',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%) scale(0.7)',
                    textAlign: 'center',
                    px: '100px',
                    py: '123px',
                    '& h3': {
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '32px',
                        letterSpacing: '0.1em',
                        color: '#000000'
                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '30px',
                            right: '30px',
                            cursor: 'pointer'
                        }}
                        onClick={handleClose}
                    >
                        <Krestik />
                    </Box>
                </Box>
                <h3>Укажите способ оплаты</h3>
                <Box className={styl.modalWinBank}
                    sx={{
                        mt: '50px',
                        width: '100%',
                        display: 'grid',
                        gridColumnGap: '129px',
                        gridRowGap: '56px',
                        gridTemplateColumns: '1fr 1fr',
                        '& label': {
                            display:'flex',
                            alignItems:'center',
                        },
                        '& input[type=radio]': {
                            cursor:'pointer',
                            width: '30px',
                            height: '30px',
                            background: ' #D9D9D9',
                            borderRadius: '5px',
                            mr: '27px',
                            '-webkit-appearance': 'none'
                        },
                        '& input[type=radio]:checked': {
                            background: 'green'
                        }
                    }}
                >
                    {banks.map((item, i) => (
                        <label key={i}>
                            <input
                                type="radio"
                                style={item.id===3 ? {marginRight:'10px'}:item.id===4 ? {marginRight:'64px'}:{}}
                                checked={item.id === inp}
                                onChange={() => {
                                    setInp(item.id)
                                }}
                            />
                            {item.img}
                        </label>
                    ))}
                </Box>

                <Box
                    sx={{
                        mt: '50px',
                        mx: 'auto',
                        width: '348px',
                        height: '234px',
                        background: 'rgba(221, 221, 221, 0.3)',
                        border: '1px solid rgba(0, 0, 0, 0.25)',
                        borderRadius: '30px',
                        padding: '16px 20px 31px',
                        textAlign: 'start',
                        '& span': {
                            fontSize: '20px',
                            letterSpacing: '0.1em',
                            color: '#000000'
                        },
                        '& p': {
                            mt: '27px',
                            mb: '31px',
                            fontWeight: 500,
                            fontSize: '25px',
                            letterSpacing: '0.095em',
                            color: '#000000',
                            textAlign: 'center'
                        }
                    }}
                >
                    <span>Сумма</span>
                    <p>{modalPrice}</p>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Button
                            onClick={() => {
                                console.log('hi')
                                dispatch(closeModal())
                                dispatch(setModal2())
                            }}
                        >
                            Оплатить
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default CardModal;
