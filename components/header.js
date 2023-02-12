import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/EYESCORP.png'
import header_back from '../public/omaeva.jpg'
import whatsapp from '../public/whatsapp.png'
import telegram from '../public/telegram.png'
import instagram from '../public/instagram.png'
const Header = () => {
    return (
        <>
            <div className='full_header'>
                <header className='header'>
                    <div className='header_container'>
                        <div className='logo_div'>
                            <Image src={logo} alt="logo" width={80} height={80} />
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
                            <Link href='#'><Image src={whatsapp} alt="what's app img" width={30} height={30} /></Link>
                            <Link href='#'><Image src={telegram} alt="telegram img" width={30} height={30} /></Link>
                            <Link href='#'><Image src={instagram} alt="instagram img" width={30} height={30} /></Link>
                        </div>
                    </div>
                </header>
                <div>
                    <Image src={header_back} style={{ width: '100%', height: '100vh', zIndex: '-1' }} />
                </div>
            </div>
        </>
    );
};

export default Header;