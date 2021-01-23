//Libraries
import React from 'react';

//Components
import Footer from 'containers/Footer';
import Header from 'containers/Header';
const Product = (props) => {

    const { lang } = props;

    return (
        <div className='wrap_content'>
            <Header />
            <Footer />
        </div>
    );
};

export default Product;


