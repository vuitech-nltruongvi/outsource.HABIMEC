// Libraries
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Row, Col } from 'antd';

const Footer = () => {
    // State
    const [isShowBackTop, setShowBackTop] = useState(false);

    const router = useRouter();

    const onClickLang = (lang) => {
        router.push(`/${lang}`)
    }


    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, []);

    const onScroll = (e) => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setShowBackTop(true)
        } else {
            setShowBackTop(false)
        }
    }


    const onClickBackToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <footer className="home__contact">
            <div className="box__button">
                <div className="button__round animate__slow animate__animated animate__heartBeat animate__infinite">
                    <i className="icon-out-contact"></i>
                </div>
                <div className="button__round" style={{ display: isShowBackTop ? 'flex' : 'none' }} onClick={onClickBackToTop}>
                    <i className="icon-out-caret"></i>
                </div>
            </div>
            <Row className='contact__content'>
                <Col xs={{ span: 0 }} md={{ span: 5 }}></Col>
                <Col xs={{ span: 24 }} md={{ span: 19 }}>
                    <div>
                        <Row className='menu__list' gutter={[10, 10]}>
                            <Col><span>Trang chủ</span></Col>
                            <Col><span>Về chúng tôi</span></Col>
                            <Col><span>Sản phẩm</span></Col>
                            <Col><span>Chứng chỉ</span></Col>
                            <Col><span>Sự kiện</span></Col>
                            <Col>
                                <div className="language__box d-flex a-c gap-10">
                                    <div className="language">
                                        <img src="/vi.svg" alt="" onClick={() => onClickLang('vi')} width={25} />
                                    </div>
                                    <div className="language">
                                        <img src="/en.svg" alt="" onClick={() => onClickLang('en')} width={25} />
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <h2 className='company__name'>
                            HABIMEC JOINT STOCKCOMPANY
                        </h2>
                    </div>
                    <Row gutter={[10, 10]}>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <span className='d-flex gap-5 a-c'>
                                <i className="icon-locale"></i>
                                <div className="locale__label">VĂN PHÒNG ĐẠI ĐIỆN:</div>
                            </span>
                            <div className="locale__address">
                                51 Nguyen Cư Trinh, Phường Nguyễn Cư
                                Trinh, Quận 1, TP. Hồ Chí Minh, Việt Nam.
                            </div>
                            <span className='d-flex gap-5 a-c'>
                                <i className="icon-contact"></i>
                                <div className="text-normal">+84 000 000 00</div>
                            </span>
                            <span className='d-flex gap-5 a-c mt-10'>
                                <i className="icon-email"></i>
                                <div className="text-normal">hbm@habimecgroup.com.vn</div>
                            </span>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <span className='d-flex gap-5 a-c'>
                                <i className="icon-locale"></i>
                                <div className="locale__label">NHÀ MÁY SỐ 1:</div>
                            </span>
                            <div className="locale__address">
                                KCN Quang Minh 1, Xã Quang Minh, Huyện
                                Mê Linh, Thành phố Hà Nôi, Việt Nam
                            </div>
                            <span className='d-flex gap-5 a-c'>
                                <i className="icon-other"></i>
                                <div className="text-normal">habimecgroup.com.vn/</div>
                            </span>
                            <span className='d-flex gap-5 a-c mt-10'>
                                <i className="icon-tax"></i>
                                <div className="text-normal">09599999999</div>
                            </span>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <span className='d-flex gap-5 a-c'>
                                <i className="icon-locale"></i>
                                <div className="locale__label">NHÀ MÁY SỐ 2:</div>
                            </span>
                            <div className="locale__address">
                                KCN Lai Uyên, Thị Trấn Lai Uyên,
                                xã Long Nguyên, huyện Bàu
                                Bàng, tỉnh Bình Dương, Việt Nam
                            </div>
                            <div className="d-flex gap-10 a-c">
                                <i className='icon-facebook'></i>
                                <i className='icon-youtube'></i>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </footer>

    );
};

export default Footer;