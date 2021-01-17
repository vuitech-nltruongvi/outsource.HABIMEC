import Head from 'next/head'
import { useEffect, useMemo, useRef, useState } from 'react'
import router from 'next/router'
import { Row, Col, Button, Drawer } from 'antd';
import Slider from 'react-slick';

// Components
import MenuToggle from '../../components/MenuToggle';

const translations = {
    vi: {
        home: 'Trang chủ',
        aboutUs: 'Về chúng tôi',
        product: 'Sản phẩm',
        contact: 'Liên hệ'
    },
    en: {
        home: 'Home',
        aboutUs: 'About us',
        product: 'Product',
        contact: 'Contact'
    }
}

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
        slidesToScroll: 1
    };

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

    // Current Language
    const currentLang = useMemo(() => {
        return translations[lang]
    }, [lang])

    const onClickLang = (lang) => {
        router.push(`/${lang}`)
    }

    const onClickBackToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const onClickOpenMenu = () => {
        setOpenDrawer(!isOpenDrawer)
    }

    return (
        <div className="d-flex j-c">
            <div className='wrap__content'>
                <Head>
                    <title>HABIMEC GROUP JSC</title>
                    <link rel="icon" href="/logo.svg" />
                </Head>
                <header className='home__header'>
                    <div className="info-brand">
                        <img src="/logo.svg" width={60} alt="" />
                        <span className='info-brand__title'>HABIMEC GROUP JSC</span>
                    </div>
                    <div className='header__btn-menu'>
                        <Button shape='circle' size='large' onClick={onClickOpenMenu}>
                            <i className="icon-out-menu"></i>
                        </Button>
                    </div>
                    <div className="right__menu">
                        <menu className="menu__list">
                            <span className='menu__item'>{currentLang.home}</span>
                            <span className='menu__item'>{currentLang.aboutUs}</span>
                            <span className='menu__item'>{currentLang.product}</span>
                            <span className='menu__item'>{currentLang.contact}</span>
                            <div className="language__box">
                                <div className="language">
                                    <img src="/vi.svg" alt="" onClick={() => onClickLang('vi')} width={20} />
                                </div>
                                <div className="language">
                                    <img src="/en.svg" alt="" onClick={() => onClickLang('en')} width={20} />
                                </div>
                            </div>
                        </menu>
                    </div>
                </header>
                <div className="home__border--gradient"></div>
                <Slider {...settings} className='carousel__bar'>
                    <div>
                        <img src="/images/trangchu-14.png" className='responsive__image' alt="" />
                    </div>
                    <div>
                        <img src="/images/trangchu-14.png" className='responsive__image' alt="" />
                    </div>
                    <div>
                        <img src="/images/trangchu-14.png" className='responsive__image' alt="" />
                    </div>
                    <div>
                        <img src="/images/trangchu-14.png" className='responsive__image' alt="" />
                    </div>
                    {/* <div>
                        <div className="brand__image" style={{ backgroundImage: `url(/images/banner-11.png)` }}></div>
                    </div>
                    <div>
                        <div className="brand__image" style={{ backgroundImage: `url(/images/banner-11.png)` }}></div>
                    </div>
                    <div>
                        <div className="brand__image" style={{ backgroundImage: `url(/images/banner-11.png)` }}></div>
                    </div> */}
                </Slider>
                <div className="home__message" >
                    <section className="message__box" data-aos="fade-left">
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
                            More
							<i className="icon-out-angle-right"></i>
                        </div>
                    </section>
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
                                    More
							<i className="icon-out-angle-right"></i>
                                </div>
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
                                    More
							<i className="icon-out-angle-right"></i>
                                </div>
                            </section>
                        </section>
                    </Col>
                </Row>
                <div className='more-info'>
                    <div className="img-info" data-aos="flip-right">
                        <img src="/images/trangchu-11.png" alt="" className='responsive__image w-50vw' />
                    </div>
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
                </div>
                <div className="about-us">
                    <img src="/images/trangchu-06.png" className='img-top' alt="" />
                    <img src="/images/trangchu-04.png" className='img-bottom' alt="" />
                    <section className="message__box" data-aos="fade-right">
                        <img src="/images/trangchu-05.png" className='img-logo' alt="" />
                        <div className="message__title">
                            CHỨNG CHỈ CỦA CHÚNG TÔI
						</div>
                        <div className="message__description">
                            Habimec cung cấp đầy đủ tất cả các chứng chỉ Việt
                            Nam và quốc tế như: FDA, CE, ISO,….
						</div>
                        <div className="message__button-more">
                            More
							<i className="icon-out-angle-right"></i>
                        </div>
                    </section>
                </div>
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
                                                <img src="/vi.svg" alt="" width={20} />
                                            </div>
                                            <div className="language">
                                                <img src="/en.svg" alt="" width={20} />
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
                <Drawer
                    visible={isOpenDrawer}
                    onClose={() => { setOpenDrawer(false) }}
                    width={'100%'}
                >
                    <Row gutter={[20, 20]} style={{ marginTop: 20 }}>
                        <Col span={24}>
                            <Button className='menu__item' size='large' style={{ width: '100%' }}>{currentLang.home}</Button>

                        </Col>
                        <Col span={24}>
                            <Button className='menu__item' size='large' style={{ width: '100%' }}>{currentLang.aboutUs}</Button>

                        </Col>
                        <Col span={24}>
                            <Button className='menu__item' size='large' style={{ width: '100%' }}>{currentLang.product}</Button>

                        </Col>
                        <Col span={24}>
                            <Button className='menu__item' size='large' style={{ width: '100%' }}>{currentLang.contact}</Button>
                        </Col>
                        <Col span={24}>
                            <div className="language__box" style={{ width: '100%', display: 'flex', gap: 10, justifyContent: 'center' }}>
                                <div className="language">
                                    <img src="/vi.svg" alt="" onClick={() => onClickLang('vi')} width={25} />
                                </div>
                                <div className="language">
                                    <img src="/en.svg" alt="" onClick={() => onClickLang('en')} width={25} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Drawer>
            </div>
        </div >
    )
}
