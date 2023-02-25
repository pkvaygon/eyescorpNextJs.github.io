import About from '@/components/about';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Portfolio from '@/components/portfolio';
import Head from 'next/head';
import React from 'react';
import Form from './../components/form';


const Home = () => {
    const demo1 = '/demo1.webm'
    const demo3 = '/demo2.webm'
    const demo2 = '/demo3.webm'
    const demo4 = '/demo4.webm'
    const demo5 = '/demo5.webm'
    const demo6 = '/demo6.webm'
    const demo7 = '/demo7.webm'

    return (
        <>
            <Head>
                <meta lang="ru" />
                <meta charSet="UTF-8" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta httpEquiv="content-language" content="ru" />
                <meta name="rating" content="adult" />
                <meta name="keywords" content="Айскорп, айскорп, eyescorp, EYESCORP, магазин сайтов, купить сайт, создать сайт, бишкек сайты" />
                <meta name="description" content="Разработка сайтов под ключ и поддержка" key='desc' />
                <meta property="og:title" content="EyeScorp портфолио сайтов" />
                <meta name="robot" content="index, follow" />
                <meta property="og:url" content="url" />
                <meta property="og:image" content="public\EYESCORP.png" />
                <meta property="og:description" content="Магазин сайтов EyeScorp" />
                <meta property="og:image" content="public\EYESCORP.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="./public/favicon.ico" />
                <title>EYESCORP</title>
            </Head>
            <Header />
            <About/>
            <div className='demosBack'>
                <div className='container'>
                    <div className='grid'>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted className='demoVideo' loop >
                                    <source src={demo1} type="video/webm" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo2} type="video/webm" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo3} type="video/webm" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo4} type="video/webm" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">                          
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo5} type="video/webm" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo6} type="video/webm" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo7} type="video/webm" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo1} type="video/webm" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Portfolio/>
            <Footer />
            {/* <Form/> */}
        </>
    );
};

export default Home;