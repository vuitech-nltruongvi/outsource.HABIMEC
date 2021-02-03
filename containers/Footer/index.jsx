// Libraries
import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router'
import { Row, Col } from 'antd';
import { translations } from '../../constant';
import Link from 'next/link'

const Footer = (props) => {
    const { lang = 'vi' } = props;

    // Current Language
    const currentLang = useMemo(() => {
        return translations[lang]
    }, [lang])


    const menuHeader = useMemo(() => {
        let draft = []
        if (currentLang) {
            draft = [
                { key: 'home', label: currentLang.home, path: `/${lang}` },
                { key: 'about-us', label: currentLang.aboutUs, path: `/${lang}/about-us` },
                { key: 'product', label: currentLang.product, path: `/${lang}/product` },
                { key: 'certificate', label: currentLang.certificate, path: `/${lang}/certificate` },
                { key: 'contact', label: currentLang.contact, path: `/${lang}/contact` },
            ]
        }

        return draft;
    }, [currentLang])

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

    const onClickLink = (path) => {
        router.push(path)
    }

    return (
        <footer className="home__contact">
            <div className="box__button">
                <Link href={`/${lang}/contact`}>
                <div className="button__round animate__slow animate__animated animate__heartBeat animate__infinite">
                    <i className="icon-out-contact"></i>
                </div>
                </Link>
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
                <Col xs={{ span: 24 }} md={{ span: 19 }} style={{ padding: 20 }}>
                    <div>
                        <Row className='menu__list' gutter={[10, 10]}>
                            {menuHeader.length ? menuHeader.map(item => {
                                const isActive = item.path === router.pathname;

                                return (
                                    <Col onClick={() => onClickLink(item.path)} key={item.key}><span style={{ color: isActive ? '#9cd5e9' : null }}>{item.label}</span></Col>
                                )
                            }) : null}
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
                            <span className='d-flex'>
                                <div style={{ width: 20 }} > <i className="icon-locale"></i></div>
                                <div className="ml-10">
                                    <div className="locale__label">{translations[lang]['Representative office'].toUpperCase()}:</div>
                                    <div className="locale__address">
                                        {translations[lang]['address_office']}
                                    </div>
                                </div>
                            </span>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <span className='d-flex'>
                                <div style={{ width: 20 }} > <i className="icon-locale"></i></div>
                                <div className="ml-10">
                                    <div className="locale__label">{translations[lang]['Factory No. 1'].toUpperCase()}:</div>
                                    <div className="locale__address">
                                        {translations[lang]['Factory No. 1 address']}
                                    </div>
                                </div>
                            </span>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <span className='d-flex '>
                                <div style={{ width: 20 }} > <i className="icon-locale"></i></div>
                                <div className="ml-10">
                                    <div className="locale__label">{translations[lang]['Factory No. 2']}:</div>
                                    <div className="locale__address">
                                        {translations[lang]['Factory No. 2 address']}
                                    </div>
                                </div>
                            </span>

                        </Col>
                    </Row>
                    <Row gutter={[10, 10]}>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <span className='d-flex a-c '>
                                <i className="icon-contact"></i>
                                <div className="text-normal ml-10">(+84)28 6685 8018</div>
                            </span>
                            <span className='d-flex a-c mt-10'>
                                <i className="icon-email"></i>
                                <div className="text-normal ml-10">hbm@habimecgroup.com.vn</div>
                            </span>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <span className='d-flex a-c'>
                                <i className="icon-other"></i>
                                <div className="text-normal ml-10">habimecgroup.com.vn/</div>
                            </span>
                            <span className='d-flex a-c mt-10'>
                                <i className="icon-tax"></i>
                                <div className="text-normal ml-10">0316456293</div>
                            </span>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <div className="group__icon--you-face">
                                <i className='icon-facebook mr-10'></i>
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