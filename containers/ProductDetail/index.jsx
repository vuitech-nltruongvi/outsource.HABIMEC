//Libabries
import React from 'react';
import { Image } from 'antd'

//Components
import Footer from 'containers/Footer';
import Header from 'containers/Header';

import { translations } from 'constant'


const ProductDetail = (props) => {

    const { lang = 'vi', product = {} } = props;
    const { title = 'nitrile_title', content = '', listImage = [] } = product;

    return (
        <div className='wrap__content animate__animated animate__fadeIn'>
            <Header lang={lang} />
            <div className="wrap__product-detail">
                <div className="product-content-detail">
                    <div className="product-box">
                        <div className="logo-banner">
                            <img src='/images/trangchu-02.png' width={60}></img>
                            <div className='banner-content'>{translations[lang][title || "nitrile_title"]}</div>
                        </div>
                        <div className="product-box-content">
                            <Image.PreviewGroup>
                                {listImage.length ? listImage.map(image => (
                                    <div key={image} data-aos="fade-up" >
                                        <img width={'100%'} src={image} alt="" />
                                    </div>
                                )) : null}
                            </Image.PreviewGroup>
                        </div>
                    </div>
                </div>
            </div>
            <Footer lang={lang} />
        </div>
    );
};

export default ProductDetail;