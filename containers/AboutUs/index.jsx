// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd'
import Slider from 'react-slick';
import { motion } from 'framer-motion'
import { Parallax, Background } from "react-parallax";

// Conta iner
import Footer from '../Footer'
import Header from '../Header'

const AboutUs = (props) => {
    // Props
    const { lang = '' } = props;

    // Slider
    const settings = {
        dots: true,
        infinite: true,
        customPaging(i) {
            return (
                <a>
                    <img className='image_thumbnail' src={`/images/about-us/slick-${i + 1}.png`} alt="" />
                </a>
            )
        },
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: false,
        dotsClass: "slick-dots slick-thumb",
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="d-flex j-c">
            <div className='wrap__content'>
                <Header lang={lang} />
                <main className='about-us__container'>
                    <img src="/images/about-us/aboutus-1.png" className='responsive__image' alt="" />
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
                                <img src="/images/trangchu-02.png" width={60} alt="" />
                                <div className="brand__title">HABIMEC GROUP JOINT STOCK COMPANY</div>
                            </motion.div>
                            <div className="content__description">
                                <div data-aos="flip-left">
                                    <div className='d__label'>Tầm nhìn:</div>
                                    <p className='d__text'>Trở thành một trong những công ty sở hữu chuỗi cung ứng tốt nhất trong lĩnh vực Thiết bị Y tế theo tiêu chuẩn trên toàn cầu. </p>
                                </div>
                                <div data-aos="zoom-in" data-aos-delay="500">
                                    <div className='d__label'>Sứ mệnh:</div>
                                    <p className='d__text'>Công ty Tập Đoàn Habimec được hình thành với mong muốn mang đến cộng đồng những trang thiết bị Y tế tốt nhất thế giới.
Ngày càng nhiều người có cơ hội được sử dụng sản phẩm chất lượng với mức chi phí hợp lý. </p>
                                </div>
                                <div data-aos="fade-zoom-in" data-aos-delay="1000">
                                    <div className='d__label'>Giá trị cốt lõi:</div>
                                    <p className='d__text'>Lấy lợi ích sức khỏe của cộng đồng làm yếu tố hàng đầu, là kim chỉ nam cho mọi hoạt động kinh doanh của công ty.</p>
                                </div>
                            </div>
                            <div className="introduce__box--more-info">
                                <Row gutter={{ md: 40, xxl: 100 }}>
                                    <Col xs={{ span: 24 }} md={{ span: 8 }} sty>
                                        <motion.div
                                            className="border-wrap" data-aos="fade-down">
                                            <div className="box__content">
                                                <img src="/images/about-us/Banner12.png" className='info__image' alt="" />
                                                Là Tập đoàn sản xuất hàng đầu
                                                trong lĩnh vực thiết bị y tế với
                                                nhiều kinh nghiệm trong sản
                                                xuất, thương mại xuất khẩu
                                                sang châu Âu và Mỹ. Sự bùng
                                                phát của Coronavirus mới đã
                                                gây ra một cuộc khủng hoảng
                                                sức khỏe toàn cầu nghiêm
                                                trọng. Cùng bảo vệ sức khỏe
                                                cộng đồng và ngăn ngừa sự
                                                lây lan của bệnh Covid-19.
                                                Chúng tôi xin giới thiệu các sản
                                                phẩm chủ yếu bao gồm: Khẩu
                                                trang, quần áo chống dịch &
                                                găng tay và các thiết bị bảo vệ
                                                khác có thể giúp ngăn chặn sự
                                                lây lan của coronavirus.....
                                            </div>
                                        </motion.div>
                                    </Col>
                                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                                        <motion.div
                                            className="border-wrap" data-aos="fade-up">
                                            <div className="box__content">
                                                <img src="/images/about-us/Banner 1-13.png" className='info__image' alt="" />
                                                Là thương hiệu Việt Nam,
                                                chúng tôi sở hữu hệ thống nhà
                                                máy hoạt động đúng theo tiêu
                                                chuẩn ISO 9001:2015 và ISO
                                                13485:2016.
                                            </div>
                                        </motion.div>
                                    </Col>
                                    <Col xs={{ span: 24 }} md={{ span: 8 }}>
                                        <motion.div
                                            className="border-wrap" data-aos="fade-down">
                                            <div className="box__content">
                                                <img src="/images/about-us/Banner 1-14.png" className='info__image' alt="" />
                                                Các sản phẩm y tế của chúng
                                                tôi được cam kết đảm bảo về
                                                chất lượng và mẫu mã bởi FDA
                                                và CE.
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
                                        <Row gutter={{ md: 30, xxl: 50 }} >
                                            <Col xs={{ span: 24 }} md={{ span: 16 }}>
                                                <div data-aos="zoom-in-right" style={{ top: percent * 50, opacity: percent * 1 }}>
                                                    <Slider {...settings}>
                                                        <div>
                                                            <img width={'100%'} className='image__item' src="/images/about-us/slick-1.png" alt="" />
                                                        </div>
                                                        <div>
                                                            <img width={'100%'} className='image__item' src="/images/about-us/slick-2.png" alt="" />
                                                        </div>
                                                        <div>
                                                            <img width={'100%'} className='image__item' src="/images/about-us/slick-3.png" alt="" />
                                                        </div>
                                                        <div>
                                                            <img width={'100%'} className='image__item' src="/images/about-us/slick-4.png" alt="" />
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </Col>
                                            <Col xs={{ span: 24 }} md={{ span: 8 }}>
                                                <div className="right-info" style={{ top: -(percent) * 50, opacity: percent * 1 }}>
                                                    <img src="/images/about-us/Banner 1-14.png" className='right-info__image' alt="" />
                                                    <p>HABIMEC GROUP không ngừng
                                                    nghiên cứu, hợp tác và phát
                                                    triển các sản phẩm y tế tốt nhất,
                                                    giúp nâng cao hiệu suất chăm
                                                    sóc sức khỏe cộng đồng
                                            </p>
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
                                                        Chứng chỉ của chúng tôi &nbsp;
                                            <i className="icon-out-angle-right"></i>
                                                    </motion.div>
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
                        <div className='more-info z-50 no-background'>
                            <div className="more-info__right-content slugion__content" data-aos="zoom-in-up">
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
                        </div>
                        <img src="/images/original/left-an-toan.png" className='right-content-image' alt="" />
                    </section>
                </main>
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