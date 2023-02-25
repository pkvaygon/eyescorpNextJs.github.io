import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';

import logo from '../public/EYESCORP.png'
import header_back from '../public/omaeva.jpg'
import whatsapp from '../public/whatsapp.png'
import telegram from '../public/telegram.png'
import instagram from '../public/instagram.png'
import CanvasText from './canvas/CanvasText';
import Form  from './form';

const Header = () => {
    const [form, setFrom] = useState(false)

    const demo1 = '/demo4.webm'
    const demo2 = '/demo6.webm'
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
                            <Link href='https://wa.me/996551244141'><Image placeholder='blur' loading='lazy' src={whatsapp} alt="what's app img" width={40} height={40} /></Link>
                            <Link href='https://t.me/dae_dalss'><Image placeholder='blur' loading='lazy' src={telegram} alt="telegram img" width={40} height={40} /></Link>
                            <Link href='https://www.instagram.com/dae_dalss'><Image placeholder='blur' loading='lazy' src={instagram} alt="instagram img" width={40} height={40} /></Link>
                        </div>
                    </div>
                </header>
                <div style={{ width: '100%', height: '100vh', zIndex: '-1' }}>
                    <CanvasText setFrom={setFrom}/>
                    <Carousel autoplay dotPosition='right' speed={1200} autoplaySpeed={7500} waitForAnimate className='index_carousel'>
                        <div>
                            <Image priority src={header_back} alt="header_back" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                        </div>
                        <div>
                            <Image priority src={header_back} alt="header_back" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                        </div>
                        <div>
                            <Image priority src={header_back} alt="header_back" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
                        </div>
                    </Carousel>

                    <Form show={form} hide={setFrom}/>


                    <Carousel autoplay swipeToSlide draggable slidesPerRow={4} speed={1200} autoplaySpeed={9500} className='index__demo'>
                    <div className='index__demoBox'>
                            <div className='index__box'>
                                <Image priority className='' src={header_back} alt="header_work" style={{ width: '210px', height: '120px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className='index__demoBox'>
                            <div className='index__box'>
                                <Image priority className='' src={header_back} alt="header_work" style={{ width: '210px', height: '120px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div>

                        </div>
                        <div></div>
                        <div className='index__demoBox'>
                            <div className='index__box'>
                                <Image className='' src={header_back} alt="header_work" style={{ width: '210px', height: '120px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className='index__demoBox'>
                            <div className='index__box'>
                                <Image className='' src={header_back} alt="header_work" style={{ width: '210px', height: '120px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div className="">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted className='demoVideo' loop >
                                    <source src={demo1} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted className='demoVideo' loop >
                                    <source src={demo2} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default Header;