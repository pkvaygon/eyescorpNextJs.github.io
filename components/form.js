import React, {useState} from 'react';

const Form = ({ show, hide }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const kyrgyzPhoneNumberRegex = /^\+\(996\)\s\d{3}\-\d{2}\-\d{2}\-\d{2}$/;
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
        console.log(phoneNumber);
      };
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
                <input 
                    type='tel'
                    value={phoneNumber}
                     pattern={kyrgyzPhoneNumberRegex} 
                     placeholder="+ (996) ___-__-__-__" 
                     onChange={handlePhoneNumberChange}
                     className='header__form-input'
                     required
                     />
            </label>

            <button className='header__form-btn'>Отправить</button>

        </form>
    );
};

export default Form;