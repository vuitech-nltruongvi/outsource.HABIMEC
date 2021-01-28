//Libabries
import React from 'react';

//Components
import Footer from 'containers/Footer';
import Header from 'containers/Header';

import { translations } from 'constant'


const ProductDetail = (props) => {

    const { lang, product } = props;

    return (
        <div className='wrap__content animate__animated animate__fadeIn'>
            <Header />
            <div className="wrap__product-detail">
                <div className="product-content-detail">
                    <div className="product-box">
                        <div className="logo-banner">
                            <img src='/images/trangchu-02.png' width={60}></img>
                            <div className='banner-content'>{translations[lang][product.title]}</div>
                        </div>
                        <div className="product-box-content">
                            <b className='product__label'>{translations[lang].content.toUpperCase()}</b>
                            <br />
                            <p>{translations[lang][product.content]}</p>
                            <br />
                            <img src={product.image} style={{ maxWidth: '100%' }}></img>
                            <br />
                            <br />
                            <b className='product__label'>{translations[lang].specifications.toUpperCase()}</b>
                            <p>Được làm từ cao su nhân tạo Nitrile. Găng tay Nitrile  là sản phẩm tuyệt vời dành cho những người bị dị ứng với cao su tự nhiên....</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer lang={lang} />
        </div>
    );
};

export default ProductDetail;