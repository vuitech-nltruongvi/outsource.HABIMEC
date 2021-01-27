// Libraries
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Row, Col } from 'antd';
import { translations } from '../../constant';

const Footer = (props) => {
    const { lang = 'vi' } = props

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
                <Col xs={{ span: 0 }} md={{ span: 5 }} className='d-flex j-c a-c'>
                    <img className='contact-logo' src="/images/original/home/hbm-logo.png" alt="" />
                    <div className="mobile__lang">
                        <div className="language__box d-flex a-c gap-10">
                            <div className="language">
                                <img src="/vi.svg" alt="" onClick={() => onClickLang('vi')} width={25} />
                            </div>
                            <div className="language">
                                <img src="/en.svg" alt="" onClick={() => onClickLang('en')} width={25} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 19 }}>
                    <div>
                        <Row className='menu__list' gutter={[10, 10]}>
                            <Col><span className='menu__item'>{translations[lang].home}</span></Col>
                            <Col><span className='menu__item'>{translations[lang].aboutUs}</span></Col>
                            <Col><span className='menu__item'>{translations[lang].contact}</span></Col>
                            <Col><span className='menu__item'>{translations[lang].certificate}</span></Col>
                            <Col><span className='menu__item'>{translations[lang].event}</span></Col>
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
                            {translations[lang].HABIMECT_NAME}
                        </h2>
                    </div>
                    <Row gutter={[10, 10]}>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <span className='d-flex gap-5'>
                                <i className="icon-locale"></i>
                                <div>
                                    <div className="locale__label">VĂN PHÒNG ĐẠI ĐIỆN:</div>
                                    <div className="locale__address">
                                        51 Nguyen Cư Trinh, Phường Nguyễn Cư
                                        Trinh, Quận 1, TP. Hồ Chí Minh, Việt Nam.
                                    </div>
                                </div>
                            </span>

                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <span className='d-flex gap-5'>
                                <i className="icon-locale"></i>
                                <div>
                                    <div className="locale__label">NHÀ MÁY SỐ 1:</div>
                                    <div className="locale__address">
                                        KCN Quang Minh 1, Xã Quang Minh, Huyện
                                        Mê Linh, Thành phố Hà Nôi, Việt Nam
                            </div>
                                </div>
                            </span>

                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <span className='d-flex gap-5 '>
                                <i className="icon-locale"></i>
                                <div>
                                    <div className="locale__label">NHÀ MÁY SỐ 2:</div>
                                    <div className="locale__address">
                                        KCN Lai Uyên, Thị Trấn Lai Uyên,
                                        xã Long Nguyên, huyện Bàu
                                        Bàng, tỉnh Bình Dương, Việt Nam
                            </div>
                                </div>
                            </span>

                        </Col>
                    </Row>
                    <Row gutter={[10, 10]}>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <span className='d-flex gap-5 a-c'>
                                <i className="icon-contact"></i>
                                <div className="text-normal">(84) 0899 589 333</div>
                            </span>
                            <span className='d-flex gap-5 a-c mt-10'>
                                <i className="icon-email"></i>
                                <div className="text-normal">hbm@habimecgroup.com.vn</div>
                            </span>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
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