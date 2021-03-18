// Libraries
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd'
import Slider from 'react-slick';
import { motion } from 'framer-motion'
import { Parallax, Background } from "react-parallax";
import Link from 'next/link'


import { translations } from 'constant'

// Conta iner
import Footer from '../Footer'
import Header from '../Header'

const AboutUs = (props) => {
    // Props
    const { lang = '' } = props;

    const [state, setState] = useState({ navBig: '', navSmall: '' })
    const refNavBig = useRef(null)
    const refNavSmall = useRef(null)
    const [currentSlice, setCurrentSlice] = useState(0);


    const sliderImages = [
        { key: 'image-1', path: '/images/original/company/ha nha may-01.jpg' },
        { key: 'image-2', path: '/images/original/company/ha nha may-02.jpg' },
        { key: 'image-3', path: '/images/original/company/ha nha may-03.jpg' },
        { key: 'image-4', path: '/images/original/company/ha nha may-04.jpg' },
        { key: 'image-5', path: '/images/original/company/ha nha may-05.jpg' },
        { key: 'image-6', path: '/images/original/company/ha nha may-06.jpg' },
        { key: 'image-7', path: '/images/original/company/ha nha may-07.jpg' },
        { key: 'image-8', path: '/images/original/company/ha nha may-08.png' },
        { key: 'image-9', path: '/images/original/company/ha nha may-09.png' },
        { key: 'image-11', path: '/images/original/company/ha nha may-11.jpg' },
        { key: 'image-12', path: '/images/original/company/ha nha may-12.jpg' }
    ]

    const banner = {
        vi: { key: '3', desktop: '/images/original/banner/desktop/banner-3.png', mobile: '/images/original/banner/mobile/banner-3.jpg' },
        en: { key: '6', desktop: '/images/original/banner/desktop/banner-english-3.jpg', mobile: '/images/original/banner/mobile/banner-english-3.jpg' },
    }

    useEffect(() => {
        setState({ navBig: refNavBig.current, navSmall: refNavSmall.current })
    }, [refNavBig, refNavSmall])

    // Slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_prev, next) => {
            setCurrentSlice(next);
        },
    };

    const smallSettings = {
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        cssEase: "linear",
        slidesToShow: 4,
        swipeToSlide: true,
        focusOnSelect: true,
        beforeChange: (_prev, next) => {
            setCurrentSlice(next);
        },
    };

    return (
        <div className="d-flex j-c">
            <div className='wrap__content animate__animated animate__fadeIn'>
                <Header lang={lang} />
                <main className='about-us__container'>
                    <img src={banner[lang].desktop} className='responsive__image image-desktop' alt="" />
                    <img src={banner[lang].mobile} className='responsive__image image-mobile' alt="" />
                    <section className="wrap__introduce">
                        <div className="introduce__content">
                            <motion.div
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
                                <img src="/images/trangchu-02.png" className='logo-image' alt="" />
                                <div className="brand__title">HABIMEC GROUP JOINT STOCK COMPANY</div>
                            </motion.div>
                            <div className="content__description">
                                <div data-aos="flip-left">
                                    <div className='d__label'>{translations[lang].vision}</div>
                                    <p className='d__text'> {translations[lang].vision_description} </p>
                                </div>
                                <div data-aos="zoom-in" data-aos-delay="500">
                                    <div className='d__label'>{translations[lang].mission}</div>
                                    <p className='d__text'> {translations[lang].mission_description}</p>
                                </div>
                                <div data-aos="fade-zoom-in" data-aos-delay="1000">
                                    <div className='d__label'>{translations[lang].core_value}</div>
                                    <p className='d__text'>{translations[lang].core_value_description}</p>
                                </div>
                            </div>
                            <div className="introduce__box--more-info">
                                <Row gutter={{ md: 40, xxl: 100 }}>
                                    <Col xs={{ span: 24 }} md={{ span: 8 }} sty>
                                        <motion.div
                                            className="border-wrap" data-aos="fade-down">
                                            <div className="box__content">
                                                <img src="/images/about-us/Banner12.png" className='info__image' alt="" />
                                                {translations[lang].MESSAGE_DESCRIPTION_1}
                                            </div>
                                        </motion.div>
                                    </Col>
                                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                                        <motion.div
                                            className="border-wrap" data-aos="fade-up">
                                            <div className="box__content">
                                                <img src="/images/about-us/Banner 1-13.png" className='info__image' alt="" />
                                                {translations[lang].MESSAGE_DESCRIPTION_2}
                                            </div>
                                        </motion.div>
                                    </Col>
                                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                                        <motion.div
                                            className="border-wrap" data-aos="fade-down">
                                            <div className="box__content">
                                                <img src="/images/about-us/Banner 1-14.png" className='info__image' alt="" />
                                                {translations[lang].MESSAGE_DESCRIPTION_3}

                                            </div>
                                        </motion.div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </section>
                    <Parallax
                        bgImage={'/images/about-us/aboutus-3.png'}
                        strength={200}
                        renderLayer={(percent) => {
                            return (
                                <section className="wrap__images-slick">
                                    <div className="images__content">
                                        <Row gutter={{ md: 40, xxl: 50 }} >
                                            <Col xs={{ span: 24 }} md={{ span: 16 }}>
                                                <div data-aos="zoom-in-right" style={{ top: percent * 50, opacity: percent * 1 }}>
                                                    <Slider {...settings} ref={refNavBig} asNavFor={state.navSmall}>
                                                        {sliderImages.length ? sliderImages.map((image, index) => {
                                                            return (
                                                                <div key={image.key}>
                                                                    <img width={'100%'} className={`image__item ${currentSlice === index ? 'image--active' : null}`} src={image.path} alt="" />
                                                                </div>
                                                            )
                                                        }) : null}
                                                    </Slider>
                                                    <div className='wrap__slider--small'>
                                                        <Slider {...smallSettings} ref={refNavSmall} asNavFor={state.navBig}>
                                                            {sliderImages.length ? sliderImages.map((image, index) => {
                                                                return (
                                                                    <div key={sliderImages.key}>
                                                                        <img className={`image_thumbnail animate__animated ${currentSlice === index ? 'image--active' : null}`} src={image.path} alt="" />
                                                                    </div>
                                                                )
                                                            }) : null}
                                                        </Slider>

                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={{ span: 24 }} md={{ span: 8 }}>
                                                <div className="right-info" >
                                                    <Row gutter={[0, 20]}>
                                                        <Col xs={{ span: 8 }} md={{ span: 24 }} className='d-flex a-c j-c'>
                                                            <img src="/images/about-us/Banner 1-14.png" className='right-info__image' alt="" />
                                                        </Col>
                                                        <Col xs={{ span: 16 }} md={{ span: 24 }}>
                                                            <p className='right-info__content'> {translations[lang].MESSAGE_DESCRIPTION_4}
                                                            </p>
                                                            <Link href={`/${lang}/certificate`}>
                                                                <motion.div
                                                                    className='certificate__button'
                                                                    whileHover={{
                                                                        scale: 1.2,
                                                                        backgroundColor: '#142f53',
                                                                        color: '#fff',
                                                                        border: '1px solid #fff'
                                                                    }}
                                                                    whileTap={{
                                                                        scale: 0.8,
                                                                    }}
                                                                >
                                                                    {translations[lang].certificate} &nbsp;
                                            <i className="icon-out-angle-right"></i>
                                                                </motion.div>
                                                            </Link>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </section>

                            )
                        }}
                    >
                    </Parallax>
                    <section className="wrap__slugion">
                        <div className='d-flex a-c'>
                            <div className='wrap-video' data-aos="fade-right">
                                <iframe width="100%" height='100%' src="https://www.youtube.com/embed/WKW028PWR2U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className='more-info z-50 no-background'>
                            <div className="more-info__right-content slugion__content" data-aos="zoom-in-up">
                                <span className='right-content__title'>
                                    {translations[lang]['latex_medical_gloves'].toUpperCase()}
                                </span>
                                <div className='mt-10'>
                                    <strong className="f-myriad fs-14">{translations[lang]['location']}: </strong>
                                    <span className='f-segoe fs-14'>{translations[lang]['address']}</span>
                                    <ul className='content__list'>
                                        <li className='content__item'>
                                            {translations[lang]['Estimated total investment']}
                                            <div>
                                                <span className="item--bold">890,000,000</span> &nbsp;
										<span className='fs-14'>USD</span>
                                            </div>
                                        </li>
                                        <li className='content__item'>
                                            {translations[lang]['Total factory area']}
                                            <div>
                                                <span className="item--bold">390,000m<sup>2</sup> = 39ha</span> &nbsp;
										<span className='fs-14'>{translations[lang]['(hight 16m - 19m)']}</span>
                                            </div>
                                        </li>
                                        <li className='content__item'>
                                            {translations[lang]['Number of production lines']}
                                            <div>
                                                <span className='item--bold'>195</span> &nbsp;
										<span className='fs-14'>{translations[lang]['lines']}</span>
                                            </div>
                                        </li>
                                        <li className='content__item'>
                                            {translations[lang]['Capacity']}
                                            <div>
                                                <span className='item--bold'>1,008,000 – 1,191,000</span> &nbsp;
										<span className='fs-14'>{translations[lang]['gloves  per line']}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img src="/images/original/left-an-toan.png" className='right-content-image' alt="" />
                    </section>
                </main>
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