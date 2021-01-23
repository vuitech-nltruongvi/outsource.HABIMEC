// Libraries
import React, { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Button, Drawer, Row, Col } from 'antd';

// Constant
import { translations } from 'constant'


const Header = (props) => {
    // Props
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
                { key: 'contact', label: currentLang.contact, path: `/${lang}/contact` },
            ]
        }

        return draft;
    }, [currentLang])

    // State
    const [isOpenDrawer, setOpenDrawer] = useState(false);

    const router = useRouter();

    const onClickLang = (lang) => {
        router.push(`/${lang}`)
    }

    const onClickOpenMenu = () => {
        setOpenDrawer(!isOpenDrawer)
    }

    const onClickMenuItem = (path) => {
        router.push(path)
    }

    return (
        <>
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
                        {menuHeader && menuHeader.length ? menuHeader.map(menuItem => {
                            console.log('pathname', router.pathname, menuItem)
                            const isActive = menuItem.path === router.pathname;

                            return (
                                <span key={menuItem.key} className={`menu__item ${isActive ? 'active' : ''}`} onClick={() => onClickMenuItem(menuItem.path)}>
                                    {menuItem.label}
                                </span>
                            )
                        }) : null}
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
                                <img src="/vi.svg" alt="" onClick={() => onClickLang('vi')} width={30} />
                            </div>
                            <div className="language">
                                <img src="/en.svg" alt="" onClick={() => onClickLang('en')} width={30} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Drawer>
        </>
    );
};

export default Header;