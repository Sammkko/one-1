import Context from "../content/Context";
import React, {useContext, useEffect, useState} from "react";
import firebase from 'firebase/app'
import {
    similarPasswordHandler,
    passwordHandler,
    emailHandler,
    loginHandler,
} from "./helpers/form-validator";
import  {SIMILAR_ERROR_MESSAGE} from "./constants/error-message";
import "./Register.modules.css";
import google from "./img/G.svg";
import apple from "./img/A.svg";
import facebook from "./img/F.svg";

import svg from '../../pages/Payment/PayMent/imgs/krestik.svg'
import { register } from '../../API'
import { useNavigate } from 'react-router-dom'
export const RegistrationForm = () => {

    const objRend = useContext(Context)
    const [emailInReg, setEmailInReg] = useState("");
    const [loginInReg, setLoginInReg] = useState("");
    const [passwordInReg, setPasswordInReg] = useState("");
    const [similarInReg, setSimilarInReg] = useState("");
    const [isValid, setIsValid] = useState(false);

    const [emailDirtyInReg, setEmailDirtyInReg] = useState(false);
    const [loginDirtyInReg, setLoginDirtyInReg] = useState(false);
    const [passwordDirtyInReg, setPasswordDirtyInReg] = useState(false);

    const [emailErrorInReg, setEmailErrorInReg] = useState(
        "(e-mail) не может быть пустым"
    );
    const [loginErrorInReg, setLoginErrorInReg] = useState(
        "(login) не может быть пустым"
    );
    const [passwordErrorInReg, setPasswordErrorInReg] = useState(
        "(password) не может быть пустым"
    );
    const [formValid, setFormValid] = useState(false);

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "emailInReg":
                return setEmailDirtyInReg(true);
            case "loginInReg":
                return setLoginDirtyInReg(true);
            case "passwordInReg":
                return setPasswordDirtyInReg(true);
            default:
                return null;
        }
    };

    useEffect(() => {
        if (emailErrorInReg || passwordErrorInReg) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailErrorInReg, passwordErrorInReg]);

    useEffect(() => {
        setIsValid(similarPasswordHandler(passwordInReg, similarInReg));
        console.log(passwordInReg, similarInReg);
    }, [passwordInReg, similarInReg]);

    
    const navigate = useNavigate()

    function handleRegister(email, username, password){
        register({
            email,
            username,
            password
        })
        .then(res => {
            if(res.email){
                setPasswordErrorInReg('')
                objRend.setModalChek(false)
                objRend.setModalChek2(false)
                objRend.setUser(res)
                navigate('/portfolio')
            }
        })
    }

    return (
        <div id="mainRegister" className={'in_confirm in_show'}>
            <div className={'RegisterX'} onClick={()=>  objRend.setModalChek2(false)}><img src={svg} alt=""/></div>
            <div className="main">
                Регистрация
            </div>

            <form className="contInpRegister">
                <input
                    maxLength="32"
                    onChange={(e) => emailHandler(e, setEmailInReg, setEmailErrorInReg)}
                    value={emailInReg}
                    onBlur={(e) => blurHandler(e)}
                    name="emailInReg"
                    className="inputRegister"
                    type="text"
                    placeholder="e-mail"
                />
                {emailDirtyInReg && emailErrorInReg && (
                    <div className="errorDivInReg" style={{ color: "red" }}>
                        {emailErrorInReg}
                    </div>
                )}
                <input
                    maxLength="18"
                    onChange={(e) => loginHandler(e, setLoginInReg, setLoginErrorInReg)}
                    name="loginInReg"
                    value={loginInReg}
                    onBlur={(e) => blurHandler(e)}
                    className="inputRegister"
                    type="text"
                    placeholder="логин"
                />
                {loginDirtyInReg && loginErrorInReg && (
                    <div className="errorDivInReg" style={{ color: "red" }}>
                        {loginErrorInReg}
                    </div>
                )}
                <input
                    maxLength="16"
                    onChange={(e) =>
                        passwordHandler(e, setPasswordInReg, setPasswordErrorInReg)
                    }
                    value={passwordInReg}
                    onBlur={(e) => blurHandler(e)}
                    name="passwordInReg"
                    className="inputRegister"
                    type="password"
                    placeholder="пароль"
                />
                {passwordErrorInReg && passwordDirtyInReg && (
                    <div className="errorDivInReg" style={{ color: "red" }}>
                        {passwordErrorInReg}
                    </div>
                )}
                <input
                    maxLength="16"
                    onChange={(e) => setSimilarInReg(e.target.value)}
                    name="similarInReg"
                    value={similarInReg}
                    className="inputRegister"
                    type="password"
                    placeholder="подтвердите пароль"
                />
                {!isValid ? (
                    <div className="errorDivInReg" style={{ color: "red" }}>
                        {SIMILAR_ERROR_MESSAGE}
                    </div>
                ) : null}
            </form>
            <div className="regBox2">
                <button
                    disabled={!formValid}
                    className="submit2"
                    onClick={() => handleRegister(emailInReg, loginInReg, passwordInReg)}
                >
                    Создать
                </button>
                {/*<a onClick={()=>{*/}
                {/*    objRend.setRender(false)*/}
                {/*}}>войти</a>*/}
            </div>
            <div>
                <div className='mainLogoRegister2'>
                    <img className='logoRegister1' src={google}/>
                    <img className='logoRegister3' src={facebook}/>
                </div>
                <div className='mainLogoHRegister2'>
                    <h5 className="logoHRegister1">Google</h5>
                    <h5 className="logoHRegister3">Facebook</h5>
                </div>
            </div>

            <div className='RegFooter2'>
                <p>
                    Есть аккаунт ?
                </p>

                <a onClick={()=>{
                    objRend.setModalChek(true)
                    objRend.setModalChek2(false)
                }

                }>
                    Вход
                </a>

            </div>
        </div>
    );
};
