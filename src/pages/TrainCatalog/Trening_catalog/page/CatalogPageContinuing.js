import React from 'react';
import Navbar from "../../../../components/navbar/Navbar";

import Footer from "../../../../components/footer/Footer";
import '../css/catalog.module.css';
import {Catalog1} from '../Catalog1';


function CatalogPageContinuing(props) {
    return (
        <div>
            <Navbar/>
            <Catalog1 lvl=" Продолжающий" api={`trainings_level_counting`} />
            <Footer/>
        </div>
    );
}

export default CatalogPageContinuing;