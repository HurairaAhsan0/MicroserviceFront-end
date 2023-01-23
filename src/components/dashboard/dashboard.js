
import { PieChartOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Button } from 'antd';
import { useState } from 'react';
import { Link } from "react-router-dom";
import ListUser from '../user/ListUser';
import ListOrg from '../organization/ListOrg';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('User', '2', <UserOutlined />, [
        getItem(<a href="/">List</a>, '3'),
        getItem(<a href="/user/details">Details</a>, '4'),
        getItem(<a href="/user/edit">Edit</a>, '5'),
        getItem(<a href="/user/create">Create</a>, '6'),
    ]),
    getItem('Organization', '7', <TeamOutlined />, [
        getItem(<Link to='/' >List</Link>, '8'),
        getItem(<Link to="/organization/details">Details</Link>, '9'),
        getItem(<Link to="/organization/edit">Edit</Link>, '10'),
        getItem(<Link to="/organization/create">Create</Link>, '11'),
    ]),
];
const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <>

            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div
                        style={{
                            height: 32,
                            margin: 16,
                        }}
                    />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        style={{
                            padding: 0,
                            background: 'dark',
                        }}><Button style={{
                            background: 'black',
                            color: "white",
                        }}>LogIn</Button></Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <div
                            style={{
                                padding: 24,
                                minHeight: 800,
                                background: colorBgContainer,
                            }}
                        >
                            <h1>User</h1>
                            <ListUser />
                            <h1>Organization</h1>
                            <ListOrg />
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Demo Project
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
};
export default Dashboard;

