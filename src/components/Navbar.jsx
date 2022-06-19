import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined, ContactsOutlined, BellOutlined, CrownOutlined, StarFilled, StarOutlined, TeamOutlined } from '@ant-design/icons'
import icon from '../assets/react-one.jpg'
import { isDisabled } from '@testing-library/user-event/dist/utils';
import styled from 'styled-components';


const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }

    }, [screenSize])

    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">DarkMeow</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <Menu theme="dark">
                    <Menu.Item icon={<BellOutlined/>}>
                        <Button id='checkIn' onClick={() => setVisitCount(visitCount + 1)}>Check in</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <p>You are Visitor #{visitCount}</p>
                    </Menu.Item>
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to="/Intention">Intentional Jewelry</Link>
                    </Menu.Item>
                    <Menu.Item icon={<CrownOutlined />}>
                        <Link to="/Oracle">Oracle Commission</Link>
                    </Menu.Item>
                    <Menu.Item icon={<StarOutlined />}>
                        <Link to="/Prints">Prints</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/Shop">Shop</Link>
                    </Menu.Item>
                    <Menu.Item icon={<TeamOutlined />}>
                        <Link to="/TwoSouls">Two Souls</Link>
                    </Menu.Item>

                </Menu>
            )}
        </div>
    )
}


export default Navbar