import React from 'react'
import style from './youTube.module.css'
import event from './youTubeImages/Frame 159.svg'
// import youTube from './youTubeImages/image 83.png'
import star from './youTubeImages/star1.svg'
import playButton from './youTubeImages/playcricle.svg'
import Navbar from "../../../../../components/navbar/Navbar";
import Footer from "../../../../../components/footer/Footer";

export default function YouTubeProject() {
  return (
      <>
      <Navbar/>
    <div className= {style.youTubeProject}>
      <div className={style.youTubeContainer}>
          <div className={style.youTubeProjectInner}>
          <div className={style.modalWindow}>
            <div className={style.buttonModalWindow}>
              <img src={event} alt="" />
              <p>События</p>
            </div>
            <div className={style.buttonModalWindow}>
              <img src={star} alt="" />
              <p>Избранные</p>
            </div>
            <div className={style.buttonModalWindow}>
              <img src={playButton} alt="" />
              <p>Просмотренные</p>
            </div>
          </div>
          <div className={style.videoYoutube}>
            <h2>Начинающий: кардио</h2>
            <div className={style.lessonCardio}>
              {/*<img src={youTube} alt="" />*/}
              <iframe width="100%" height="550" src="https://www.youtube.com/embed/50kH47ZztHs"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen></iframe>
            </div>
              <p>Это уникальная, интенсивная  тренировка для похудения в домашних условиях, которая позволяет сразу сжечь пол ТЫСЯЧИ калорий! За пол часа!</p>
              <div  className={style.starButton}>
                <button>Добавить в избранное</button>
              </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
      </>
  )
}
