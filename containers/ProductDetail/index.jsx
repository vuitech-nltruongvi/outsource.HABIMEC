//Libabries
import React from 'react';

//Components
import Footer from 'containers/Footer';
import Header from 'containers/Header';
import { Row } from 'antd';

const Product = (props) => {

    const { lang } = props;

    return (
        <div className='wrap__content'>
            <Header />
            <div className="wrap__product">
                <div className="product-content">
                    <div className="product-box">
                        <div className="logo-banner">
                            <img src='/images/trangchu-02.png' width={60}></img>
                            <div className='banner-content'>Găng tay y tế NITRILE</div>
                        </div>
                        <div className="product-box-content">
                            <h2>Thông tin</h2>
                            <br />
                            <p>Được làm từ cao su nhân tạo Nitrile. Găng tay Nitrile  là sản phẩm tuyệt vời dành cho những người bị dị ứng với cao su tự nhiên....</p>
                            <br />
                            <img src='/images/pic01@2x.png' style={{ maxWidth: '100%' }}></img>
                            <br />
                            <br />
                            <h2>Thành phần</h2>
                            <p>Được làm từ cao su nhân tạo Nitrile. Găng tay Nitrile  là sản phẩm tuyệt vời dành cho những người bị dị ứng với cao su tự nhiên....</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Product;