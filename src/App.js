import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Context from "./components/content/Context";
import Modal from "./components/reg/Register";
import { RegistrationForm } from "./components/reg/Register2";
import DocumentPageMain from "./pages/Documentation/DocumentPageMain";
import MainPage from "./pages/MainPage/MainPage";
import Payment from "./pages/Payment/PayMent/payment";
import PortfolioPage from "./pages/Profile/pages/portfolioPage/PortfolioPage";
import CatalogPageAdvanced from "./pages/TrainCatalog/Trening_catalog/page/CatalogPageAdvanced";
import CatalogPageContinuing from "./pages/TrainCatalog/Trening_catalog/page/CatalogPageContinuing";
import CatalogPageElementary from "./pages/TrainCatalog/Trening_catalog/page/CatalogPageElementary";
import YouTubeProject from "./pages/TreinBlock/components/cardiolevel/youTubePage/YouTubeProject";
import TreinBlock from "./pages/TreinBlock/treinBlock";
import store from "./store/store";

function App() {
    const [renderEl,setRender] = useState(false);
    const [modalCheck,setModalChek] =useState(false);
    const [modalCheck2,setModalChek2] =useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [auth, setAuth] = useState(localStorage.getItem('auth') ? true : false);

    function Rend(){
        if(renderEl == false){
            return <Modal/>
        }
        else{
            return
            <RegistrationForm/>
        }
    }
    const objRend = {
        'renderEl':renderEl,
        'setRender':setRender,
        modalCheck:modalCheck,
        setModalChek:setModalChek,
        modalCheck2:modalCheck2,
        setModalChek2:setModalChek2,
        user,
        setUser,
        auth,
        setAuth
    }
    return(
        <Context.Provider value={objRend}>
            <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/tren'} element={<TreinBlock/>}/>
                    <Route path={'/portfolio'} element={<PortfolioPage/>}/>
                    <Route path={'/payment'} element={<Payment/>}/>
                    <Route path={'/catalogElementary'} element={<CatalogPageElementary/>}/>
                    <Route path={'/catalogContinuing'} element={<CatalogPageContinuing/>}/>
                    <Route path={'/catalogAdvanced'} element={<CatalogPageAdvanced/>}/>
                    <Route path={'/youtube'} element={<YouTubeProject/>}/>
                    <Route path={'/document'} element={<DocumentPageMain/>}/>
                </Routes>
            </BrowserRouter>
            </Provider>
        </Context.Provider>
);
}

export default App;


