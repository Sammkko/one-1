import React from 'react';
import './reviews.modules.css'

import avaImg1 from './img/1.svg';
import avaImg2 from './img/2.svg';
import avaImg3 from './img/3.svg';
import avaImg4 from './img/4.svg';
import avaImg5 from './img/5.svg';
import avaImg6 from './img/6.svg';


const Reviews = () => {
    return (
        <div className='avaMain'>
            <main>
                <div className="reviewsContainer">
                    <h1 className='avaReviewH1'>Отзывы</h1>
                    <div className="container__item">
                        <div className="container__card">
                            <div className="bgImg">
                                <img className='reviewImg' src={avaImg1}/>
                            </div>
                            <div className="container__card-title tac">@nargiz95</div>
                            <div className="container__card-text tac">
                                Классная платформа, уже год пользуюсь. Тренируюсь 3 раза в неделю,
                                вместе с G-fit полюбила спорт.
                            </div>
                        </div>
                        <div className="container__card">
                            <div className="bgImg">
                                <img className='reviewImg'  src={avaImg2}/>
                            </div>
                            <div className="container__card-title tac">@moon.kg</div>
                            <div className="container__card-text tac">
                                Все мои друзья тренируются с G-Fit. Удобно пользоваться в
                                спортзале.
                            </div>
                        </div>
                        <div className="container__card">
                            <div className="bgImg">
                                <img className='reviewImg' src={avaImg3}/>
                            </div>
                            <div className="container__card-title tac">@moon.kg</div>
                            <div className="container__card-text tac">
                                С удовольствием хожу в ваш зал, очень нравятся условия, доброжелательные администраторы и уютная обстановка
                            </div>
                        </div>

                        <div className="container__card">
                            <div className="bgImg">
                                <img className='reviewImg' src={avaImg4}/>
                            </div>
                            <div className="container__card-title tac">@alex5544</div>
                            <div className="container__card-text tac">
                                Спасибо G-Fit с вами я скинул 10 кг за 6 месяцев. Очень продуманная платформа.
                            </div>
                        </div>
                        <div className="container__card">
                            <div className="bgImg">
                                <img className='reviewImg' src={avaImg5}/>
                            </div>
                            <div className="container__card-title tac">@alex5544</div>
                            <div className="container__card-text tac">
                                Очень хороший зал, прекрасные тренера и занятия с ними.
                            </div>
                        </div>
                        <div className="container__card">
                            <div className="bgImg">
                                <img className='reviewImg' src={avaImg6}/>
                            </div>
                            <div className="container__card-title tac">@moon.kg</div>
                            <div className="container__card-text tac">
                                Тренера отлично находят подход к каждому клиенту. Атмосфера в зале парит очень дружеская.
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Reviews;