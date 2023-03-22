import React, { useEffect, useState, useContext, useRef } from 'react'
import './Register.modules.css'
import google from './img/G.svg'
import apple from './img/A.svg'
import facebook from './img/F.svg'
import Context from "../content/Context"
import svg from '../../pages/Payment/PayMent/imgs/krestik.svg'
import { login } from '../../API'
import { useNavigate } from 'react-router-dom'

export const Modal = () => {

    const objRend = useContext(Context)
    const [renderUse, setRender] = useState(null)
    const [emailInReg, setEmailInReg] = useState('')
    const [passwordInReg, setPasswordInReg] = useState('')
    const [emailDirtyInReg, setEmailDirtyInReg] = useState(false)
    const [passwordDirtyInReg, setPasswordDirtyInReg] = useState(false)
    const [emailErrorInReg, setEmailErrorInReg] = useState('(login) не может быть пустым')
    const [passwordErrorInReg, setPasswordErrorInReg] = useState('(password) не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'emailInReg':
                setEmailDirtyInReg(true)
                break
            case 'passwordInReg':
                setPasswordDirtyInReg(true)
                break
        }
    }

    const emailHandler = (e) => {
        setEmailInReg(e.target.value)
        // const re = /\w+\@\w+\.\w/
        // if (e.target.value === ''){
        //     setEmailErrorInReg('Емайл не может быть пустым')
        //
        // }

        // if (!re.test(String(e.target.value).toLowerCase())){
        if (e.target.value === '') {
            setEmailErrorInReg('(login) не может быть пустым')
            // }else{
            //     setEmailErrorInReg("Не корректный (gmail)")
            // }
        } else {
            setEmailErrorInReg('')
        }
    }

    const passwordHandler = (e) => {
        setPasswordInReg(e.target.value)
        if (e.target.value.length < 8 || e.target.value.length > 100) {
            setPasswordErrorInReg('Пароль должен быть длиннее 8 и меньше 100')
            if (!e.target.value) {
                setPasswordErrorInReg('Пароль не может быть пустым')
            }
        } else {
            setPasswordErrorInReg('')
        }
    }

    useEffect(() => {
        if (emailErrorInReg || passwordErrorInReg) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailErrorInReg, passwordErrorInReg])


    const navigate = useNavigate()

    function handleLogin(username, password){
        login({
            username,
            password
        })
        .then(res => {
            if(res.message){
                setPasswordErrorInReg('Логин или пароль неверный')
            }else{
                setPasswordErrorInReg('')
                objRend.setUser(res)
                objRend.setModalChek(false)
                navigate('/portfolio')
            }
        })
    }

    return (
        <>

            <div id={'mainRegister'} className={objRend.modalCheck
                ? "in_confirm in_show"
                : "in_confirm"
            } >
                <div className='RegisterX' onClick={() => { objRend.setModalChek(false) }}>
                    <img src={svg} alt="" />
                </div>
                <div className='main'>
                    Вход в аккаунт
                </div>

                <form className='contInpRegister'>

                    <input
                        maxLength='18'
                        onChange={e => emailHandler(e)}
                        value={emailInReg}
                        onBlur={e => blurHandler(e)}
                        name='emailInReg'
                        className='inputRegister'
                        type="text" placeholder='ЛОГИН' />
                    {(emailDirtyInReg && emailErrorInReg) &&
                        <div className='errorDivInReg' style={{ color: "red" }}>{emailErrorInReg}</div>}

                    <input
                        maxLength='16'
                        onChange={e => passwordHandler(e)}
                        value={passwordInReg}
                        onBlur={e => blurHandler(e)}
                        name='passwordInReg'
                        className='inputRegister'
                        type="password" placeholder='ПАРОЛЬ' />
                    {(passwordErrorInReg && passwordDirtyInReg) &&
                        <div className='errorDivInReg' style={{ color: "red" }}>{passwordErrorInReg}</div>}

                </form>

                <div className="regBox">
                    <button
                        disabled={!formValid}
                        className='submit'
                        onClick={() => handleLogin(emailInReg, passwordInReg)}
                    >
                        Войти
                    </button>
                </div>

                <div>
                    <div className='mainLogoRegister'>
                        <img className='logoRegister1' src={google} />
                        <img className='logoRegister3' src={facebook} />
                    </div>
                    <div className='mainLogoHRegister'>
                        <h5 className="logoHRegister1">Google</h5>
                        <h5 className="logoHRegister3">Facebook</h5>
                    </div>
                </div>


                <div className='RegFooter'>
                    <p>Нет аккаунта?</p>

                    <a onClick={() => {
                        objRend.setModalChek2(true)
                        objRend.setModalChek(false)
                    }}>Зарегистрируйтесь</a>

                </div>

                <div
                    className="in_overlay"
                    onClick={() => objRend.setModalChek(false)}
                />
            </div></>

    )
}

export default Modal