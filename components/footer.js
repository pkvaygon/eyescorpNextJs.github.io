import React from 'react';
import whatsapp from '../public/whatsapp.png'
import instagram from '../public/instagram.png'
import telegram from '../public/telegram.png'
import logo from '../public/EYESCORP.png'
import Image from 'next/image';
const Footer = () => {
    return (
        <div>
            <div className='container'>
                <footer className='footer_footer'>
                    <div className='footer_block1'>
                        <h4>Разработка сайтов под ключ, поддержка и обновление</h4>
                        <h5>Веб-Студия Eyescorp работает 24/7 за короткие сроки</h5>
                        <h6>Оставляйте заявки и мы с вами свяжемся</h6>
                    </div>
                    <div className='footer_block2'>
                        <p>Контакты:</p>
                        <Image width={40} height={40} src={whatsapp} alt='whatsapp' />
                        <Image width={40} height={40} src={instagram} alt='instagram' />
                        <Image width={40} height={40} src={telegram} alt='telegram' />
                    </div>
                    <div className='footer_block3'>
                        <Image width={40} height={40} src={logo} alt='logo' />
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;