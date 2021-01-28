//Libraries
import React, { useRef, useState, useEffect } from 'react';

//Components
import Footer from 'containers/Footer';
import Header from 'containers/Header';
import { Col, Row } from 'antd';
import Slider from 'react-slick'
import { Pagination } from 'antd';
import Link from 'next/link'

import { translations } from 'constant'


const Product = (props) => {

    const [page, setPage] = useState(1);
    const [current, setCurrent] = useState(1);
    const { lang } = props;

    const [state, setState] = useState({ navPic: null, navNum: null });

    const refSliderPic = useRef(null)
    const refSliderNum = useRef(null)

    // Life crycle
    useEffect(() => {
        setState({
            navPic: refSliderPic.current,
            navNum: refSliderNum.current
        });
    }, []);

    return (
        <div className='wrap__content animate__animated animate__fadeIn'>
            <Header lang={lang} />
            <div className='wrap__product'>
                <div className="product-content">
                    <div className="product-banner">
                        <div className="banner-content">
                            <div className='banner-content-title'> {translations[lang].product}</div>
                            <div className='banner-content-info'>{translations[lang].product_description}</div>
                        </div>
                        <img src="/images/Product1@2x.png" className="banner-image" />
                    </div>
                    <div className='product-slider__content'>
                        <Row className={'slider'} gutter={[20, 20]}>
                            <Col xs={{ span: 24 }} md={{ span: 12 }} style={{ position: 'relative' }}>
                                <img src="/images/product/product-1.png" width={'100%'} alt="" />
                                <section className="message__box display-content">
                                    <div className="message__title">
                                        {translations[lang].nitrile_title}
                                    </div>
                                    <div className="message__description">
                                        {translations[lang].nitrile_description}
                                    </div>
                                    <Link href={`/${lang}/product/nitrile-medical-gloves`}>

                                        <div className="message__button-more">
                                            {translations[lang].More}
                                            <i className="icon-out-angle-right"></i>
                                        </div>
                                    </Link>

                                </section>
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 12 }}>
                                <img src="/images/product/product-2.png" width={'100%'} alt="" />
                                <section className="message__box display-content">
                                    <div className="message__title">
                                        {translations[lang].latex_title}
                                    </div>
                                    <div className="message__description" style={{ marginBottom: 20 }}>
                                        {translations[lang].latex_description}
                                    </div>
                                    <div className="message__button-more">
                                        {translations[lang].More}
                                        <i className="icon-out-angle-right"></i>
                                    </div>
                                </section>
                            </Col>
                        </Row>
                    </div>
                    <Pagination pageSize={2} defaultCurrent={1} total={2} />
                </div>
            </div>
            <Footer lang={lang} />
        </div >
    );
};

export default Product;


