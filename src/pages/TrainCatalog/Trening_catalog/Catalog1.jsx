import React, { useEffect, useState } from "react";
import classes from "./css/catalog.module.css"
import Star from "./Star";
import zamok from './img/zamok.svg'
import { useNavigate } from "react-router-dom";

export default function Catalog1(props) {
  const [cardArray, setCardArray] = useState([]);
  const [open, setOpen] = useState({ pageIndex: [], isOpen: false }); // изменяем состояние open
  const handleOpen = (pageIndex) => () => {
    setOpen((prevState) => ({
      pageIndex:[...prevState.pageIndex,pageIndex],
      isOpen: !prevState.isOpen || prevState.pageIndex !== pageIndex, // обновляем только для текущей страницы
    }));
  };
  const nav=useNavigate()
  function createCardHtml(cards) {
    console.log(cards)
    return cards.map((card, index) => (
      <React.Fragment key={card.id}>
        <div className={classes.cards} style={{background:`linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${card?.image}) no-repeat center/cover`}}>
          <Star />
          <h4 className={classes.catalogH4}>{card?.title}</h4>
          <p>{card?.description}</p>
          <div className={classes.start} onClick={() => nav('/youtube')}>Cтарт</div>
        </div>
        {(index + 1) % 6 === 0 && <div className={classes.horizanalLine}></div>}
      </React.Fragment>
    ));
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(props.api);
      const data = await response.json();
      setCardArray(data);
    }
    fetchData();
  }, []);

  function render() {
    const cardsPerPage = 6;
    const numOfPages = Math.ceil(cardArray.length / cardsPerPage);

    let pages = [];
    for (let i = 0; i < numOfPages; i++) {
      const startIndex = i * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;
      const pageCards = cardArray.slice(startIndex, endIndex);
      const cardHtml = createCardHtml(pageCards);
      const isPageOpen = open.pageIndex.includes(i) && open.isOpen; // проверяем, открыта ли страница
      pages.push(
        <div className={classes.wrapper} key={i}>
          {isPageOpen ? null : (
            <div className={classes.hiden}>
              <div className={classes.block}>
                <img className={classes.zamok}  src={zamok} alt="something" />
                <button
                  onClick={() => nav('/payment')}
                  className={classes.buy}
                >
                  Получить доступ
                </button>
              </div>
            </div>
          )}
          <div className={classes.container}>{cardHtml}</div>
        </div>
      );
    }
    return pages;
  }

  return <div className={classes.card_container}>
      <div className={classes.container}>
        <div className={classes.levels}>
          <h2>Тренировки</h2>
          <span>Уровень:{props.lvl}</span>
        </div>
      <div className={classes.horizanalLine}></div>
    </div>
    {render()}</div>;
}