import React from "react";
import classes from "./../../style/mobile.module.css";
import playMarket from "./../../img/playMarket.svg";
import code from "./../../img/QRcode.svg";
import tel from "./../../img/phone.png";

function Mobile() {
  return (
    <div className={classes.Mobile}>
      <div className={classes.Mobile__inner}>
       
        <div className={classes.mobile__left}>
          <div className={classes.mobile__title}>
            <h2>ПОПРОБУЙТЕ GEEK-FIT БЕСПЛАТНО</h2>
            <div className={classes.mobile__text}>
              <p className='mobileP'>
                Получите доступ к нашей полной библиотеке тренировок в любое
                время и в любом месте!
              </p>
              <div className={classes.icons}>
                <a className={classes.btn} href="https://play.google.com">
                  CКАЧАТЬ
                </a>
                <div className={classes.mobileIcons}>
                <div className={classes.play}>
                  <img src={playMarket} alt="" />
                  <h5>Google Play</h5>
                </div>
                <div className={classes.code}>
                  <img src={code} alt="" />
                  <h5>QR-код</h5>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={classes.mobile__right}>
          <div className={classes.mobile__img}>
            <img src={tel} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
