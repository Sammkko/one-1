import React from "react";
import Slider from "react-slick";
import "./aboutUs.modules.css";

import sliderPhoto1 from "../img/Rectangle 158.png";
import sliderPhoto2 from "../img/Rectangle 161.png";
import sliderPhoto3 from "../img/Rectangle 168.png";
import sliderPhoto4 from "../img/Rectangle 169.png";
import sliderPhoto5 from "../img/Rectangle 170.png";
import sliderPhoto6 from "../img/Rectangle 171.png";
import sliderPhoto7 from "../img/Rectangle 172.png";
import logoWhyUs1 from "../img/Vector 12.png";
import logoWhyUs2 from "../img/Vector 8.png";
import logoWhyUs3 from "../img/Vector 13.png";
import logoWhyUs4 from "../img/Vector 11.png";
import logoWhyUs5 from "../img/Vector 14.png";

const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 0.2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]

  };

  return (
    <div className="aboutBody">
      <div className="aboutUs">
        <h1 className="h1AboutUs">О нас</h1>

        <p className="pAboutUs">
          G-fit-это видео тренировки, разработанные профессиональными тренерами
          специально для занятий дома, в спортзале или на улице: они не требуют
          подготовки и специального оборудования. Все тренировки разбиты на
          уровни сложности: начинающий, продолжающий и продвинутый.Наши
          программы построены по принципу увеличивающейся нагрузки. С каждой
          последующей тренировкой сложность увеличивается, что позволяет
          достигнуть максимального результата.С нами легко, быстро и доступно!
        </p>
      </div>

      <div className="aboutBlock">
        <Slider {...settings}>
          <div class="aboutContainer">
            <img className="aboutItem" src={sliderPhoto1} />
          </div>
          <div className="aboutContainer">
            <img className="aboutItem" src={sliderPhoto2} />
          </div>
          <div className="aboutContainer">
            <img className="aboutItem" src={sliderPhoto3} />
          </div>
          <div className="aboutContainer">
            <img className="aboutItem" src={sliderPhoto4} />
          </div>
          <div className="aboutContainer">
            <img className="aboutItem" src={sliderPhoto5} />
          </div>
          <div className="aboutContainer">
            <img className="aboutItem" src={sliderPhoto6} />
          </div>
          <div className="aboutContainer">
            <img className="aboutItem" src={sliderPhoto7} />
          </div>
        </Slider>
      </div>

      <div className="mainWhyUs">
        <h1 className="h1WhyUs">Почему именно мы ?</h1>

        <div className="containerWhyUs">
          <div className="boxWhyUs">
            <div className="blockWhyUs">
              <div className="imgBgWhyUs">
                <img className="imgWhyUs1" src={logoWhyUs1} />
              </div>
            </div>
            <p className='aboutP'>Инструкторы мирового класса мотивируют и подталкивают вас</p>
          </div>

          <div className="boxWhyUs">
            <div className="blockWhyUs">
              <div className="imgBgWhyUs">
                <img className="imgWhyUs2" src={logoWhyUs2} />
              </div>
            </div>
            <p className='aboutP'>Тщательно разработан для получения результатов</p>
          </div>

          <div className="boxWhyUs">
            <div className="blockWhyUs">
              <div className="imgBgWhyUs">
                <img className="imgWhyUs3" src={logoWhyUs3} />
              </div>
            </div>
            <p className='aboutP'>От начинающих до продвинутых планов тренировок</p>
          </div>

          <div className="boxWhyUs">
            <div className="blockWhyUs">
              <div className="imgBgWhyUs">
                <img className="imgWhyUs4" src={logoWhyUs4} />
              </div>
            </div>
            <p className='aboutP'>Для запуска не требуется оборудование</p>
          </div>

          <div className="boxWhyUs">
            <div className="blockWhyUs">
              <div className="imgBgWhyUs">
                <img className="imgWhyUs5" src={logoWhyUs5} />
              </div>
            </div>
            <p className='aboutP'>Полный доступ к более чем 89 онлайн-тренировкам</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
