import React from 'react'
import youtube from './youtube.png'
import facebook from './facebook.png'
import instagram from './insta.png'
import logotip from './GFIT.png'
import { Link } from 'react-router-dom'



import classes from './footer.module.css'
function Footer() {
  return (
    <div className={classes.page}>
      <div className={classes.footer}>
        <div className={classes.footer__title}>
            <span><Link className={classes.footerA} to='/tren'>Попробовать бесплатно</Link></span>
            <span><a className={classes.footerA} href='app/src/components/footer/Footer#'>Помощь</a></span>
            <span><Link className={classes.footerA} to='/document'>Конфиденциальность</Link></span>
        </div>
        <div className={classes.footer__links}>
            <div>
                <a className={classes.footerA} href='https://youtube.com'><img src={youtube}/></a>
            </div>
            <div>
            <a className={classes.footerA} href='https://ru-ru.facebook.com'><img src={facebook}/></a>
            </div>
            <div>
            <a className={classes.footerA} href='https://www.instagram.com'><img src={instagram}/></a>
            </div>
        </div>
        <div className={classes.footer__icon}>
            <span>Будь лучшим!</span>
            <div>
                <Link to="/"><img src={logotip} alt="logo"/></Link>
            </div>
            <span>© 2023 G-Fit . Все права защищены.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
