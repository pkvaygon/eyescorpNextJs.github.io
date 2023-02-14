import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Carousel, Radio } from 'antd';

import logo from '../public/EYESCORP.png'
import header_back from '../public/omaeva.jpg'
import whatsapp from '../public/whatsapp.png'
import telegram from '../public/telegram.png'
import instagram from '../public/instagram.png'
const Header = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <>
            <div className='full_header'>
                <header className='header'>
                    <div className='header_container'>
                        <div className='logo_div'>
                            <Image src={logo} alt="logo" width={80} height={80} priority placeholder='blur' />
                        </div>
                        <nav>
                            <ul>
                                <li>Главная</li>
                                <li>О нас</li>
                                <li>Дизайны</li>
                                <li>Сайты портфолио</li>
                            </ul>
                        </nav>
                        <div className='header_contacts'>
                            <Link href='#'><Image priority='true' src={whatsapp} alt="what's app img" width={30} height={30} /></Link>
                            <Link href='#'><Image priority='true' src={telegram} alt="telegram img" width={30} height={30} /></Link>
                            <Link href='#'><Image priority='true' src={instagram} alt="instagram img" width={30} height={30} /></Link>
                        </div>
                    </div>
                </header>
                <div style={{ width: '100%', height: '100vh', zIndex: '-1' }}>
                    <Carousel autoplay dotPosition='right' className='index_carousel'>
                        <div>
                            <Image src={header_back} alt="header_back" style={{ width: '100%', height: '100vh' }} />
                        </div>
                        <div>
                            <Image src={header_back} alt="header_back" style={{ width: '100%', height: '100vh' }} />
                        </div>
                        <div>
                            <Image src={header_back} alt="header_back" style={{ width: '100%', height: '100vh' }} />
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default Header;