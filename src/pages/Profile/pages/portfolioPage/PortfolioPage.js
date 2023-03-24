import React, {useState} from 'react';
import CardPage from "./CardPage";
import '../../styles/profile.modules.css'

import avatar from "../../img/monica.jpg";
import iconCard from "../../icon/card.svg";
import iconPencil from "../../icon/pencil.svg";
import iconClose from "../../icon/close.svg";
import iconPhoto from "../../icon/photo.svg";
import iconPlus from "../../icon/plus.svg";
import iconCloseV2 from "../../icon/closeV2.svg";
import Footer from "../../../../components/footer/Footer";
import Navbar from "../../../../components/navbar/Navbar";
import {useContext} from 'react'
import Context from '../../../../components/content/Context'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CreateCard } from '../../../TrainCatalog/Trening_catalog/Catalog1';
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3.8,
    autoplay: false,
    speed: 1800,
    autoplaySpeed: 0.2,
    arrows: false,
  };

function Confirm({
                     openName, handleName, openEmail, handleEmail,
                     openNum, handleNum, openCard, handleCard,
                     openDel, handleDel, openOut, handleOut,
                     openDelCard, handleDelCard,
                     openSuccess, handleSuccess
                 }) {
const mainObj = useContext(Context)
const navigate = useNavigate()
    return (
        <>
            <div className={
                openName
                    ? "in_confirm in_show"
                    : "in_confirm"
            }>
                <div className="in_confirm_contents">
                    <div className="modal_content">
                        <h1 className="modal_title">Изменить имя</h1>
                        <img className="modal_icon-close" onClick={() => handleName(false)} src={iconClose} alt=""/>
                        <form className="modal_form-name modal_form-margin">
                            <label className="modal_input-name" htmlFor="name">Имя</label>
                            <input className="modal_input" type="name"/>
                        </form>
                        <div className="modal_btn">
                            <button>Сохранить</button>
                            <button onClick={() => handleName(false)}>Отменить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="in_overlay" onClick={() => handleName(false)}/>

            <div className={
                openEmail
                    ? "in_confirm in_show"
                    : "in_confirm"
            }>
                <div className="in_confirm_contents">
                    <div className="modal_content">
                        <h1 className="modal_title">Изменить e-mail</h1>
                        <img className="modal_icon-close" onClick={() => handleEmail(false)} src={iconClose} alt=""/>
                        <form className="modal_form-name">
                            <label className="modal_input-name" htmlFor="name">Введите e-mail<span>*</span></label>
                            <input className="modal_input-email" type="name"/>
                        </form>
                        <p className="modal_info">Все подписки на рассылки будут сохранены
                            при изменении e-mail
                        </p>
                        <div className="modal_btn">
                            <button>Продолжить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="in_overlay" onClick={() => handleEmail(false)}/>

            <div className={
                openNum
                    ? "in_confirm in_show"
                    : "in_confirm"
            }>
                <div className="in_confirm_contents">
                    <div className="modal_content">
                        <h1 className="modal_title">Изменить номер телефона</h1>
                        <img className="modal_icon-close" onClick={() => handleNum(false)} src={iconClose} alt=""/>
                        <form className="modal_form-name">
                            <label className="modal_input-name" htmlFor="name">Введите номер телефона</label>
                            <input className="modal_input-email" type="name"/>
                        </form>
                        <div className="modal_btn modal_btn-num">
                            <button>Продолжить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="in_overlay" onClick={() => handleNum(false)}/>

            <div className={
                openDel
                    ? "in_confirm in_show"
                    : "in_confirm"
            }>
                <div className="in_confirm_contents">
                    <div className="modal_content">
                        <h1 className="modal_title modal_title-pd">Удаление аккаунта</h1>
                        <img className="modal_icon-close" onClick={() => handleDel(false)} src={iconClose} alt=""/>
                        <p className="modal_text">Вы уверены, что хотите удалить аккаунт? Все ваши данные будутпотеряны
                            навсегда.
                        </p>
                        <div className="modal_btn-email">
                            <button onClick={()=>{
                                handleDel(false)
                               Swal.fire(
                                '😂',
                                'ahahaaha ты думал удалишь',
                              )
                            }}>Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="in_overlay" onClick={() => handleDel(false)}/>

            <div className={
                openOut
                    ? "in_confirm in_show"
                    : "in_confirm"
            }>
                <div className="in_confirm_contents">
                    <div className="modal_content">
                        <h1 className="modal_title modal_title-pd">Выход из аккаунта</h1>
                        <img className="modal_icon-close" onClick={() => handleOut(false)} src={iconClose} alt=""/>
                        <p className="modal_text">Вы хотите покинуть аккаунт?</p>
                        <div className="modal_btn-email">
                            <button onClick={()=>{
                                mainObj.setAuth(false)
                                localStorage.removeItem('auth')
                                handleOut(false)
                                navigate('/')
                            }}>Выйти</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="in_overlay" onClick={() => handleOut(false)}/>

            <div className={
                openDelCard
                    ? "in_confirm in_show"
                    : "in_confirm"
            }>
                <div className="in_confirm_contents">
                    <div className="modal_content">
                        <h1 className="modal_title modal_title-pd">Удаление карты</h1>
                        <img className="modal_icon-close" onClick={() => handleDelCard(false)} src={iconClose} alt=""/>
                        <p className="modal_text">Вы действительно хотите удалить карту?</p>
                        <div className="modal_btn-email">
                            <button>Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="in_overlay" onClick={() => handleDelCard(false)}/>

            <div className={
                openCard
                    ? "in_confirm in_show in_confirm-card"
                    : "in_confirm in_confirm-card"
            }>
                <div className="in_confirm_contents">
                    <div className="modal_content">
                        <img className="modal_icon-close" onClick={() => handleCard(false)} src={iconCloseV2} alt=""/>
                        {/*<form className="modal_form-name">*/}
                        {/*    <label className="modal_input-name" htmlFor="name">ФИО</label>*/}
                        {/*    <input className="modal_input" type="name"/>*/}
                        {/*    <label className="modal_input-name" htmlFor="number">№ карты</label>*/}
                        {/*    <input className="modal_input" type="number"/>*/}

                        {/*    <div>*/}
                        {/*        <label className="modal_input-name" htmlFor="number">exp.</label>*/}
                        {/*        <input className="modal_input" type="number"/>*/}

                        {/*        <label className="modal_input-name" htmlFor="number">CVC</label>*/}
                        {/*        <input className="modal_input" type="number"/>*/}
                        {/*    </div>*/}
                        {/*</form>*/}

                        <CardPage/>

                        {/*<div className="modal_btn-email">*/}
                        {/*    <button>Добавить</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <div className="in_overlay" onClick={() => handleCard(false)}/>

            <div className={
                openSuccess
                    ? "in_confirm in_show"
                    : "in_confirm"
            }>
                <div className="in_confirm_contents">
                    <div className="modal_content">
                        <h1 className="modal_title modal_title-pd">Карта успешно добавлена</h1>
                        <img className="modal_icon-close" onClick={() => handleSuccess(false)} src={iconCloseV2}
                             alt=""/>

                    </div>
                </div>
            </div>
            <div className="in_overlay" onClick={() => handleSuccess(false)}/>

        </>
    );
}


function PortfolioPage() {

    const [openName, setOpenName] = useState(false);
    const [openEmail, setOpenEmail] = useState(false);
    const [openNum, setOpenNum] = useState(false);
    const [openDel, setOpenDel] = useState(false);
    const [openOut, setOpenOut] = useState(false);
    const [openCard, setOpenCard] = useState(false);
    const [openDelCard, setOpenDelCard] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);

    const handleName = (result) => {
        if (result) {
            console.log("Add Invoice ...");
        }
        setOpenName(false);
    };
    const handleEmail = (result) => {
        if (result) {
            console.log("Add Invoice ...");
        }
        setOpenEmail(false);
    };
    const handleNum = (result) => {
        if (result) {
            console.log("Add Invoice ...");
        }
        setOpenNum(false);
    };
    const handleDel = (result) => {
        if (result) {
            console.log("Add Invoice ...");
        }
        setOpenDel(false);
    };
    const handleOut = (result) => {
        if (result) {
            console.log("Add Invoice ...");
        }
        setOpenOut(false);
    };
    const handleCard = (result) => {
        if (result) {
            console.log("Add Invoice ...");
        }
        setOpenCard(false);
    };
    const handleDelCard = (result) => {
        if (result) {
            console.log("Add Invoice ...");
        }
        setOpenDelCard(false);
    };
    const handleSuccess = (result) => {
        if (result) {
            console.log("Add Invoice ...");
        }
        setOpenSuccess(false);
    };

    const portfolioMenu = ["Личная информация", "Оплата", "Избранное"];
    const [visible, setVisible] = useState('Личная информация');

    const [gender, setGender] = useState("");

    const context = useContext(Context)
    const {favCards}= useSelector(state=>state.main)
    
    return (
        <div className="portfolio">
            <div className="portfolio_bg">
                <Navbar/>
                <div className="portfolio_block">
                    {/*<h1 className="portfolio_title">Личный кабинет</h1>*/}
                    <div className="portfolio_inner">
                        <div className="portfolio_img">
                            <div className="portfolio_img-box">
                                <img className="portfolio_img-img" src={avatar} alt=""/>
                                <img className="portfolio_img-photo" src={iconPhoto} alt=""/>
                            </div>
                        </div>
                        <div className="portfolio_box">
                            <div className="portfolio_name-box">
                                <h1 className="portfolio_name"
                                    onClick={() => setOpenName(true)}>{context.user?.user ? context.user.user : 'Бегимай Аднаева'}</h1>
                            </div>
                            <div className="portfolio_content privateVis">
                                <ul className="portfolio_item">
                                    {portfolioMenu.map(portfolio => (
                                        <li className={visible === portfolio ? "portfolio_item-active" : ""}
                                            onClick={() => setVisible(portfolio)
                                            } key={portfolio}>{portfolio}</li>
                                    ))
                                    }
                                </ul>

                                {visible === "Личная информация" &&
                                    <div className="portfolio_info ">

                                        <div className="portfolio_table">
                                            <p className="portfolio_info-title">Почта :</p>
                                            <p className="portfolio_info-text pit-active">begimaiabnaeva@gmail.com</p>
                                            <i className="portfolio_pencil" onClick={() => setOpenEmail(true)}>
                                                <img src={iconPencil} alt=""/>
                                            </i>


                                        </div>


                                        <div className="portfolio_table">
                                            <p className="portfolio_info-title">Пол :</p>
                                            <div className="portfolio_info-block portfolio_info-text">
                                                <label>
                                                    <input className="portfolio_info-checkbox"
                                                           type="checkbox"
                                                           checked={gender === "male"}
                                                           onChange={() => setGender("male")}
                                                    />
                                                    Мужской</label>

                                                <label>
                                                    <input className="portfolio_info-checkbox"
                                                           type="checkbox"
                                                           checked={gender === "female"}
                                                           onChange={() => setGender("female")}
                                                    />
                                                    Женский</label>

                                            </div>
                                        </div>

                                        <div className="portfolio_btn">
                                            <button onClick={() => setOpenOut(true)}>Выйти из аккаунта</button>
                                            <button onClick={() => setOpenDel(true)}>Удалить аккаунт</button>
                                        </div>

                                    </div>
                                }


                                {visible === "Оплата" &&
                                    <div className="portfolio_info">
                                        <h1 className="p_card-title">Мои карты</h1>
                                        <div className="p_card">
                                            <div className="p_card-inner">


                                                <div className="p_card-info">
                                                    <div className="p_card-img">
                                                        <img src={iconCard} alt=""/>
                                                    </div>
                                                    <div className="p_card-content">
                                                        <div className="p_card-number">4169**** **** **67</div>
                                                        <div className="p_card-block">
                                                            <p className="p_card-text">Основная</p>
                                                            <a href="#"
                                                               onClick={() => setOpenDelCard(true)}>Удалить</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p_card-button">
                                                    <button className="p_card-btn"
                                                            onClick={() => setOpenCard(true)}><i><img
                                                        src={iconPlus} alt=""/></i>добавить
                                                        карту
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                }

                                {visible === "Избранное" &&
                                    <div className="portfolio_info">
                                         <Slider {...settings}>
                                            {
                                            favCards.map(item=> <CreateCard key={item.id} card={item} id={item.id} />)
                                            }
                                            </Slider>
                                        
                                    </div>
                                }

                                <Confirm openName={openName} handleName={handleName}
                                         openEmail={openEmail} handleEmail={handleEmail}
                                         openNum={openNum} handleNum={handleNum}
                                         openCard={openCard} handleCard={handleCard}
                                         openDel={openDel} handleDel={handleDel}
                                         openOut={openOut} handleOut={handleOut}
                                         openDelCard={openDelCard} handleDelCard={handleDelCard}
                                         openSuccess={openSuccess} handleSuccess={handleSuccess}
                                />


                            </div>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        </div>
    );
}

export default PortfolioPage;