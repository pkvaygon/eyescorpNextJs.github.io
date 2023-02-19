import React from 'react';

const Form = ({show, hide}) => {
    return (
        <form className={`header__form ${show && 'active'}`}>
            <div onClick={() =>hide(false) } style={{position: 'absolute', top:'10px',right:'10px', cursor:'pointer', color:'red'}}>X</div>
            <h2 className='header__form-title'>Отправить заявку</h2>
            <label className='header__form-row'>
                <div className='header__form-label'>Имя *</div>
                <input className='header__form-input' type='text' />
            </label>
            <label className='header__form-row'>
                <div className='header__form-label'>Номер *</div>
                <input className='header__form-input' type='number' />
            </label>

            <button className='header__form-btn'>Отправить</button>

        </form>
    );
};

export default Form;