import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import DocumentPage from "./documentPage/DocumentPage";

function DocumentPageMain(props) {
    return (
        <>
            <Navbar/>
            <DocumentPage/>
            <Footer/>
        </>
    );
}

export default DocumentPageMain;