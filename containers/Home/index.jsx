import Head from 'next/head'
import { useEffect, useMemo, useRef, useState } from 'react'
import router from 'next/router'
import { Row, Col, Button, Drawer } from 'antd';
import Slider from 'react-slick';
import Link from 'next/link'
// Components
import Header from 'containers/Header';
import Footer from 'containers/Footer';

import { translations } from 'constant'

export default function Home(props) {
    // Props
    const { lang = 'vi' } = props;
    // State
    const [isOpenDrawer, setOpenDrawer] = useState(false);
    const [isShowBackTop, setShowBackTop] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (i) {
            return (
                <a>
                    <div className="slick__dot"></div>
                </a>
            );
        },
    };

    const banner = {
        vi: [
            { key: '1', desktop: '/images/original/banner/desktop/banner-1.jpg', mobile: '/images/original/banner/mobile/banner-1.jpg' },
            { key: '2', desktop: '/images/original/banner/desktop/banner-2.png', mobile: '/images/original/banner/mobile/banner-2.jpg' },
            { key: '3', desktop: '/images/original/banner/desktop/banner-3.png', mobile: '/images/original/banner/mobile/banner-3.jpg' },
            { key: '4', desktop: '/images/original/banner/desktop/banner-4.jpg', mobile: '/images/original/banner/desktop/banner-4.jpg' },
            { key: '5', desktop: '/images/original/banner/desktop/banner-5.jpg', mobile: '/images/original/banner/desktop/banner-5.jpg' },
        ],
        en: [
            { key: '4', desktop: '/images/original/banner/desktop/banner-english-1.jpg', mobile: '/images/original/banner/mobile/banner-english-1.jpg' },
            { key: '5', desktop: '/images/original/banner/desktop/banner-english-2.jpg', mobile: '/images/original/banner/mobile/banner-english-2.jpg' },
            { key: '6', desktop: '/images/original/banner/desktop/banner-english-3.jpg', mobile: '/images/original/banner/mobile/banner-english-3.jpg' },
            { key: '7', desktop: '/images/original/banner/desktop/banner-4.jpg', mobile: '/images/original/banner/desktop/banner-4.jpg' },
            { key: '8', desktop: '/images/original/banner/desktop/banner-5.jpg', mobile: '/images/original/banner/desktop/banner-5.jpg' },
            // { key: '9', desktop: '/images/original/banner/desktop/banner-6.jpg', mobile: '/images/original/banner/desktop/banner-6.jpg' },
        ]
    }

    const onClickMoreCertificate = () => {
        router.push(`/${lang}/certificate`)
    }

    return (
        <div className="d-flex j-c">
            <div className='wrap__content wrap__slider--home animate__animated animate__fadeIn'>
                <Head>
                    <title>{translations[lang].HABIMECT_NAME}</title>
                    <link rel="icon" href="/logo.svg" />
                </Head>
                <Header lang={props.lang} />
                <Slider {...settings} className='carousel__bar'>
                    {banner[lang].map(itemBanner => (
                        <div key={itemBanner.key} className='wrap-image-slider'>
                            <img src={itemBanner.desktop} className='responsive__image image-desktop' alt="" />
                            <img src={itemBanner.mobile} className='responsive__image image-mobile' alt="" />
                        </div>
                    ))}
                </Slider>
                <div className="home__message" >
                    <Row>
                        <Col xs={{ span: 24 }} md={{ span: 12 }}>
                            <section className="message__box home-box-2" data-aos="fade-left">
                                <div className="message__title" >
                                    {translations[lang].MESSAGE}
                                </div>
                                <div className="message__description" >
                                    {translations[lang].MESSAGE_DESCRIPTION_1}
                                </div>
                                <Link href={`${lang}/about-us`} >
                                    <div className="message__button-more" >
                                        {translations[lang].More}
                                        <i className="icon-out-angle-right"></i>
                                    </div>
                                </Link>
                            </section>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 12 }} className='wrap-image-hand'>
                            <img className='image__hand' src="/images/original/home/hand-image-2.png" alt="" />
                        </Col>
                    </Row>

                </div>
                <Row>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                        <section
                            className="left__content"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                        >
                            <section className="message__box">
                                <div className="message__title">
                                    {translations[lang].nitrile_title}
                                </div>
                                <div className="message__description">
                                    {translations[lang].nitrile_description}
                                </div>
                                <Link href={`${lang}/product/nitrile-medical-gloves`}>
                                    <div className="message__button-more">
                                        {translations[lang].More}
                                        <i className="icon-out-angle-right"></i></div>
                                </Link>
                            </section>
                        </section>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                        <section
                            className="right__content"
                            data-aos="fade-down"
                            data-aos-duration="3000"
                        >
                            <section className="message__box">
                                <div className="message__title">
                                    {translations[lang].latex_title}
                                </div>
                                <div className="message__description">
                                    {translations[lang].latex_description}
                                </div>
                                <Link href={`${lang}/product/latex-medical-gloves`}>
                                    <div className="message__button-more">
                                        {translations[lang].More}
                                        <i className="icon-out-angle-right"></i></div>
                                </Link>
                            </section>
                        </section>
                    </Col>
                </Row>
                <div className='more-info'>
                    <Row style={{ width: '100%' }}>
                        <Col xs={{ span: 24 }} md={{ span: 12 }} className='wrap-more-info__image'>
                            <img src="/images/original/home/left-image-3.png" alt="" className='more-info__image' />
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 12 }} className='wrap-more-info__content'>
                            <div className="more-info__right-content" data-aos="zoom-in-up">
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
                        </Col>
                    </Row>
                </div>
                <div className="about-us">
                    <img src="/images/original/home/star-image.png" className='img-top' alt="" />
                    <Row className='wrap__about-us'>
                        <Col xs={{ span: 24 }} md={{ span: 12 }} className='d-flex a-e j-c'>
                            <section className="message__box" data-aos="fade-right">
                                <img src="/images/trangchu-05.png" className='img-logo' alt="" />
                                <div className="message__title">
                                    {translations[lang]['our certificate'].toUpperCase()}
                                </div>
                                <div className="message__description">
                                    {translations[lang]['Habimec provides']}
                                </div>
                                <div onClick={onClickMoreCertificate} className="message__button-more grey">
                                    {translations[lang].More}
                                    <i className="icon-out-angle-right"></i>
                                </div>
                            </section>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 12 }} className='mobile-center'>
                            <img src="/images/trangchu-04.png" className='img-bottom' alt="" />
                        </Col>
                    </Row>

                </div>
                <Footer lang={lang} />
            </div>
        </div >
    )
}
