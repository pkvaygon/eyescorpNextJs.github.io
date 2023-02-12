import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';


const Home = () => {
    const demo1 = '/demo1.mp4'
    const demo3 = '/demo2.mp4'
    const demo2 = '/demo3.mp4'
    const demo4 = '/demo4.mp4'
    const demo5 = '/demo5.mp4'
    const demo6 = '/demo6.mp4'
    const demo7 = '/demo7.mp4'

    return (
        <>
            <Header/>
            <div className='demosBack'>
                <div className='container'>
                    <div className='grid'>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted className='demoVideo' loop >
                                    <source src={demo1} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo2} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo3} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo4} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo5} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo6} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo7} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="demoBox">
                            <div className="box">
                                <video preload='metadata' autoPlay playsInline muted loop className='demoVideo'>
                                    <source src={demo1} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;