import React from 'react';

import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer/Footer";
import '../css/catalog.module.css';
import {Catalog1} from '../Catalog1';


function CatalogPageElementary(props) {
    return (
        <div>
            <Navbar/>
            <Catalog1 lvl=" Начинающий" api={`trainings_level_easy`}/>
            <Footer/>
        </div>
    );
}

export default CatalogPageElementary;