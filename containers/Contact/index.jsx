// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd'
import Slider from 'react-slick';
import { motion } from 'framer-motion'
import { Parallax, Background } from "react-parallax";

import { translations } from 'constant'

// Conta iner
import Footer from '../Footer'
import Header from '../Header'

const AboutUs = (props) => {
    // Props
    const { lang = '' } = props;

    const onClickMap = (link) => {
        window.open(link)
    }

    return (
        <div className="d-flex j-c">
            <div className='wrap__content animate__animated animate__fadeIn'>
                <Header lang={lang} />
                <div className="wrap__contact">
                    <div className="box-content__contact">
                        <div
                            className="logo-banner__box"
                            animate={{
                                boxShadow: ['0 0 0 0 rgba(3,149,229,.4)', '0 0 0 15px rgba(3,149,229,0)']
                            }}
                            transition={{
                                duration: 1.5,
                                ease: 'easeInOut',
                                times: [0, 1],
                                loop: Infinity,
                                repeatDelay: 1
                            }}
                        >
                            <img src="/images/trangchu-02.png" width={60} alt="" />
                            <div className="brand__title">{translations[lang].CONTACT_US}</div>
                        </div>
                        <Row style={{ width: '100%' }} gutter={[20, 20]} >
                            <Col xs={{ span: 24 }} md={{ span: 12 }} className='flex-center'>
                                <div className="underline__title">{translations[lang]['Representative office']}</div>
                                <div className='text__description'>{translations[lang].['address_office']}</div>
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 12 }}>
                                <div className='wrap__map-image'>
                                    <img src="/svg/next.svg" className='contact-icon--next' alt="" />
                                    <img onClick={() => onClickMap('https://goo.gl/maps/YFFPwa2SbgpCvByd6')} className='image-map__box' src="/svg/map.svg" alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ width: '100%' }} gutter={[20, 20]} >
                            <Col xs={{ span: 24 }} md={{ span: 12 }} className='flex-center'>
                                <div className="underline__title">{translations[lang]['Factory No. 1']}</div>
                                <div className='text__description'>{translations[lang]['Factory No. 1 address']}</div>
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 12 }}>
                                <div className='wrap__map-image'>
                                    <img src="/svg/next.svg" className='contact-icon--next' alt="" />
                                    <img onClick={() => onClickMap('https://goo.gl/maps/P1vs4ZFyaMVeneMs6')} className='image-map__box' src="/svg/map-2.svg" alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ width: '100%' }} gutter={[20, 20]} >
                            <Col xs={{ span: 24 }} md={{ span: 12 }} className='flex-center'>
                                <div className="underline__title">{translations[lang]['Factory No. 2']}</div>
                                <div className='text__description'>{translations[lang]['Factory No. 2 address']} </div>
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 12 }}>
                                <div className='wrap__map-image'>
                                    <img src="/svg/next.svg" className='contact-icon--next' alt="" />
                                    <img onClick={() => onClickMap('https://goo.gl/maps/aXy8zUjVKqGUw5ct8')} className='image-map__box' src="/svg/map-3.svg" alt="" />
                                </div>
                            </Col>
                        </Row>
                        <div style={{ width: '100%' }}>
                            <div className='text__description mail-contact'>Mail: hbm@habimecgroup.com.vn</div>
                        </div>
                    </div>
                    <img className='image-more__info' src="/images/contact/g76.png" alt="" />
                </div>

                <Footer lang={lang} />
            </div>
        </div >
    );
};

AboutUs.propTypes = {
    lang: PropTypes.string
};

AboutUs.defaultProps = {
    lang: 'vi'
}

export default AboutUs;