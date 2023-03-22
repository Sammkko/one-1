import React from 'react';
import Header from "./header/Header";
import AboutUs from "./about/tets/aboutUs";
import Reviews from "./reviews/reviews";
import DownloadPages from "./daunloadPage/downloadPages";
import Footer from "../../components/footer/Footer";



function MainPage(props) {
    return (
        <div>
            <Header/>
            <AboutUs/>
            <Reviews/>
            <DownloadPages/>
            <Footer/>
        </div>
    );
}

export default MainPage;