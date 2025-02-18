'use client'
import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import '@/app/scss/pages/dashboard/sidenav.scss';

const SideNav = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className='sidenav'>
            <div className={`minimenu ${isOpen ? 'open' : 'close'}`} >
                <button onClick={toggleDrawer}>{isOpen ? 'Cerrar' : 'Abrir'}</button>
                <div className='icons_container outside'>
                    <div className='link'>
                        <FaHome className='icon' size={24} style={{ margin: '10px 0' }} />
                    </div>
                    <div className='link'>
                        <FaUser size={24} style={{ margin: '10px 0' }} />   
                    </div>
                    <div className='link'>
                        <FaCog size={24} style={{ margin: '10px 0' }} />
                    </div>
                </div>
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                style={{ width: '250px' }}
            >
                <button onClick={toggleDrawer}>{isOpen ? 'Cerrar' : 'Abrir'}</button>
                <div className='icons_container inside'>
                    <div className='link'>
                        <FaHome className='icon' size={24} style={{ margin: '10px 0' }} />
                    </div>
                    <div className='link'>
                        <FaUser size={24} style={{ margin: '10px 0' }} />   
                    </div>
                    <div className='link'>
                        <FaCog size={24} style={{ margin: '10px 0' }} />
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default SideNav;