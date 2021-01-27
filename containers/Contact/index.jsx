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

    return (
        <div className="d-flex j-c">
            <div className='wrap__content'>
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
                        <Row style={{ width: '100%' }} gutter={[20, 20]} className='flex-center'>
                            <Col xs={{ span: 24 }} md={{ span: 12 }} >
                                <div className="underline__title">Văn phòng đại diện:</div>
                                <div className='text__description'>51 Nguyen Cư Trinh, Phường Nguyễn Cư Trinh,
Quận 1, TP. Hồ Chí Minh, Việt Nam.</div>
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 12 }}>
                                <div className='wrap__map-image'>
                                    <img src="/svg/next.svg" className='contact-icon--next' alt="" />
                                    <img className='image-map__box' src="/svg/map.svg" alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ width: '100%' }} gutter={[20, 20]} className='flex-center'>
                            <Col xs={{ span: 24 }} md={{ span: 12 }}>
                                <div className="underline__title">Nhà máy số 1:</div>
                                <div className='text__description'>KCN Quang Minh 1, Xã Quang Minh, Huyện Mê
Linh, Thành phố Hà Nôi, Việt Nam</div>
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 12 }}>
                                <div className='wrap__map-image'>
                                    <img src="/svg/next.svg" className='contact-icon--next' alt="" />
                                    <img className='image-map__box' src="/svg/map-2.svg" alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ width: '100%' }} gutter={[20, 20]} className='flex-center'>
                            <Col xs={{ span: 24 }} md={{ span: 12 }}>
                                <div className="underline__title">Nhà máy số 2:</div>
                                <div className='text__description'>KCN Lai Uyên, Thị Trấn Lai Uyên, xã Long Nguyên,
                                huyện Bàu Bàng, tỉnh Bình Dương, Việt Nam
</div>
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 12 }}>
                                <div className='wrap__map-image'>
                                    <img src="/svg/next.svg" className='contact-icon--next' alt="" />
                                    <img className='image-map__box' src="/svg/map-3.svg" alt="" />
                                </div>
                            </Col>
                        </Row>
                        <div style={{ width: '100%' }}>
                            <div className='text__description mail-contact'>Mail: hbm@habimecgroup.com.vn</div>
                        </div>
                    </div>
                    <img className='image-more__info' src="/images/contact/g76.png" alt="" />
                </div>

                <Footer />
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