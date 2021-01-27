//Libraries
import React, { useRef, useState, useEffect } from 'react';

//Components
import Footer from 'containers/Footer';
import Header from 'containers/Header';
import { Col, Row } from 'antd';
import Slider from 'react-slick'


const Product = (props) => {

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
        <div className='wrap__content'>
            <Header lang={lang} />
            <div className='wrap__product'>
                <div className="product-content">
                    <div className="product-banner">
                        <div className="banner-content">
                            <div className='banner-content-title'> Sản phẩm của chúng tôi</div>
                            <div className='banner-content-info'>Cùng bảo vệ sức khỏe cộng đồng và ngăn ngừa sự lây lan của bệnh Covid-19, chúng tôi xin giới thiệu các sản phẩm chủ yếu bao gồm: Khẩu trang, quần áo chống dịch & găng tay và các thiết bị bảo vệ khác có thể giúp ngăn chặn sự lây lan của coronavirus.</div>
                        </div>
                        <img src="/images/Product1@2x.png" className="banner-image" />
                    </div>
                    <div className='product-slider__content'>
                        <Row className={'slider'} gutter={[20, 20]}>
                            <Col xs={{ span: 24 }} md={{ span: 12 }} style={{ position: 'relative' }}>
                                <img src="/images/product/product-1.png" width={'100%'} alt="" />
                                <section className="message__box display-content">
                                    <div className="message__title">
                                        GĂNG TAY Y TẾ NITRILE
						</div>
                                    <div className="message__description">
                                        Được làm từ cao su nhân tạo Nitrile. Găng tay Nitrile là
                                        sản phẩm tuyệt vời dành cho những người bị dị ứng
                                        với cao su tự nhiên....
						</div>
                                    <div className="message__button-more">
                                        More
							<i className="icon-out-angle-right"></i>
                                    </div>
                                </section>
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 12 }}>
                                <img src="/images/product/product-2.png" width={'100%'} alt="" />
                                <section className="message__box display-content">
                                    <div className="message__title">
                                        GĂNG TAY Y TẾ LATEX GLOVES
						</div>
                                    <div className="message__description" style={{ marginBottom: 20 }}>
                                        Găng tay latex là loại găng tay được chiết xuất 100% từ
                                        cao su tự nhiên....
						</div>
                                    <div className="message__button-more">
                                        More
							<i className="icon-out-angle-right"></i>
                                    </div>
                                </section>
                            </Col>
                        </Row>
                    </div>
                    {/* 
                    
                    <div className="product-slider">
                        <Slider
                            asNavFor={state.navNum}
                            ref={refSliderPic}
                        >
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                        <h4>Second Slider</h4>
                        <Slider
                            asNavFor={state.navPic}
                            ref={refSliderNum}
                            slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                        >
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                    </div> */}

                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Product;


