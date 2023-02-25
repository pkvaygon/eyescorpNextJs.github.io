import React from 'react';

const Form = () => {
    return (
        <div className='div'>
            <form className='form_form'>
                <input className='form_text' type="text" />
                <input className='form_tel' type="tel" />
                <button className='form_button'>Оставить заявку</button>
            </form>
        </div>
    );
};

export default Form;