import React from 'react';
import Navbar from "../../../../components/navbar/Navbar";

import Footer from "../../../../components/footer/Footer";
import '../css/catalog.module.css';
import {Catalog1} from '../Catalog1';


function CatalogPageAdvanced(props) {
    return (
        <div>
            <Navbar/>
            <Catalog1 lvl=" Продвинутый" api={'trainings_level_advanced'} />
            <Footer/>
        </div>
    );
}

export default CatalogPageAdvanced;