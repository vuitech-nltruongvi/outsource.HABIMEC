// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd'

const { Header, Sider, Content } = Layout;

const Admin = () => {
    const [collapsedSider, setCollapsedSider] = useState(false);
    const [menuSider] = useState([
        { key: 'banner', label: 'Banner', icon: <i className='icon-out-images'></i> },
        { key: 'product', label: 'Sản phẩm', icon: <i className='icon-out-dropbox'></i> }
    ])

    return (
        <div className='wrap-admin'>
            <Layout>
                <Sider className='admin__sider' collapsible collapsed={collapsedSider} trigger={null}>
                    <div className='sider-logo'>
                        <img src="/logo.svg" alt="" />
                    </div>
                    <Menu theme='dark' mode='inline' >
                        {menuSider.length ? menuSider.map(item => {
                            return (
                                <Menu.Item key={item.key} icon={item.icon}>{item.label}</Menu.Item>
                            )
                        }) : null}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className='admin__header'>

                    </Header>
                    <Content>

                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

Admin.propTypes = {};

export default Admin;