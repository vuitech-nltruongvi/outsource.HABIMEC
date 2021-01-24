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
    });

    return (
        <div className='wrap__content'>
            <Header />
            <div className='wrap__product'>
                <div className="product-content">

                    <div className="product-banner">
                        <Row>
                            <Col xs={{ span: 18 }} md={{ span: 15 }}><div className="banner-content"><div className='banner-content-title'> Sản phẩm của chúng tôi</div>
                                <div className='banner-content-info'>Cùng bảo vệ sức khỏe cộng đồng và ngăn ngừa sự lây lan của bệnh Covid-19, chúng tôi xin giới thiệu các sản phẩm chủ yếu bao gồm: Khẩu trang, quần áo chống dịch & găng tay và các thiết bị bảo vệ khác có thể giúp ngăn chặn sự lây lan của coronavirus.</div>
                            </div>
                            </Col>
                            <Col xs={{ span: 6 }} md={{ span: 9 }}>
                                <img src="/images/Product1@2x.png" className="banner-image" />
                            </Col>
                        </Row>
                    </div>


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
                    </div>

                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Product;


