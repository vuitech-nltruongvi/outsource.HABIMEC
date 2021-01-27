import Head from 'next/head'
import { useEffect, useMemo, useRef, useState } from 'react'
import router from 'next/router'
import { Row, Col, Button, Drawer } from 'antd';
import Slider from 'react-slick';

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

    return (
        <div className="d-flex j-c">
            <div className='wrap__content'>
                <Head>
                    <title>{translations[lang].HABIMECT_NAME}</title>
                    <link rel="icon" href="/logo.svg" />
                </Head>
                <Header lang={props.lang} />
                <Slider {...settings} className='carousel__bar'>
                    <div>
                        <img src="/images/original/banner/desktop/banner-1.png" className='responsive__image image-desktop' alt="" />
                        <img src="/images/original/banner/mobile/banner-1.jpg" className='responsive__image image-mobile' alt="" />
                    </div>
                    <div>
                        <img src="/images/original/banner/desktop/banner-2.png" className='responsive__image image-desktop' alt="" />
                        <img src="/images/original/banner/mobile/banner-2.jpg" className='responsive__image image-mobile' alt="" />
                    </div>
                    <div>
                        <img src="/images/original/banner/desktop/banner-3.png" className='responsive__image image-desktop' alt="" />
                        <img src="/images/original/banner/mobile/banner-3.jpg" className='responsive__image image-mobile' alt="" />
                    </div>
                </Slider>
                <div className="home__message" >
                    <Row>
                        <Col xs={{ span: 24 }} md={{ span: 12 }}>
                            <section className="message__box home-box-2" data-aos="fade-left">
                                <div className="message__title" >
                                    THÔNG ĐIỆP
						</div>
                                <div className="message__description" >
                                    Là Tập đoàn sản xuất hàng đầu trong lĩnh vực thiết bị y tế với
                                    nhiều kinh nghiệm trong sản xuất, thương mại xuất khẩu sang
                                    châu Âu và Mỹ. Sự bùng phát của Coronavirus mới đã gây ra một
                                    cuộc khủng hoảng sức khỏe toàn cầu nghiêm trọng. Cùng bảo
                                    vệ sức khỏe cộng đồng và ngăn ngừa sự lây lan của bệnh
                                    Covid-19. Chúng tôi xin giới thiệu các sản phẩm chủ yếu bao
                                    gồm: Khẩu trang, quần áo chống dịch & găng tay và các thiết bị
                                    bảo vệ khác có thể giúp ngăn chặn sự lây lan của coronavirus.....
						</div>
                                <div className="message__button-more" >
                                    {translations[lang].More}
                                    <i className="icon-out-angle-right"></i>
                                </div>
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
                                    GĂNG TAY Y TẾ NITRILE
						</div>
                                <div className="message__description">
                                    Được làm từ cao su nhân tạo Nitrile. Găng tay Nitrile là
                                    sản phẩm tuyệt vời dành cho những người bị dị ứng
                                    với cao su tự nhiên....
						</div>
                                <div className="message__button-more">
                                    {translations[lang].More}
                                    <i className="icon-out-angle-right"></i></div>
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
                                    GĂNG TAY Y TẾ LATEX GLOVES
						</div>
                                <div className="message__description">
                                    Găng tay latex là loại găng tay được chiết xuất 100% từ
                                    cao su tự nhiên....
						</div>
                                <div className="message__button-more">
                                    {translations[lang].More}
                                    <i className="icon-out-angle-right"></i></div>
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
                                    NHÀ MÁY SẢN XUẤT GĂNG TAY Y TẾ
						        </span>
                                <div className='mt-10'>
                                    <strong className="f-myriad fs-14">Địa điểm: </strong>
                                    <span className='f-segoe fs-14'>KCN Lai Uyên, Lai Uyên, Bàu Bàng, Bình Dương</span>
                                    <ul className='content__list'>
                                        <li className='content__item'>
                                            Tổng mức đầu tư dự kiến:
									<div>
                                                <span className="item--bold">890,000,000</span> &nbsp;
										<span className='fs-14'>USD</span>
                                            </div>
                                        </li>
                                        <li className='content__item'>
                                            Tổng diện tích nhà máy:
								<div>
                                                <span className="item--bold">220,000m<sup>2</sup></span> &nbsp;
										<span className='item--bold grey'>= 22ha</span> &nbsp;
										<span className='fs-14'>(chiều cao 16m– 19m)</span>
                                            </div>
                                        </li>
                                        <li className='content__item'>
                                            Số lượng dây chuyền sản xuất:
									<div>
                                                <span className='item--bold'>195</span> &nbsp;
										<span className='fs-14'>dây chuyền</span>
                                            </div>
                                        </li>
                                        <li className='content__item'>
                                            Công suất (24/24h):
									<div>
                                                <span className='item--bold'>1,100,000 – 1,300,000</span> &nbsp;
										<span className='fs-14'>chiếc/ dây chuyền</span>
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
                                    CHỨNG CHỈ CỦA CHÚNG TÔI
						</div>
                                <div className="message__description">
                                    Habimec cung cấp đầy đủ tất cả các chứng chỉ Việt
                                    Nam và quốc tế như: FDA, CE, ISO,….
						</div>
                                <div className="message__button-more grey">
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
