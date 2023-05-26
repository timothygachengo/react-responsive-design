import React from 'react';
import PropTypes from 'prop-types';
import PhoneNumberInputField from './PhoneNumberInputField';

const InputField = ({ label, type, required, className, placeholder, autoComplete, onChange }) => {
  return (
    <div className="flex flex-col w-full mr-10 my-[2%] md:my-0">
      <div className="my-[2%]">
        <label className="font-bold">{label}</label>
        {required && <span className="text-red-500">*</span>}
      </div>

      
      {type === 'textarea' ?
         <textarea type="text" placeholder="Message" rows="6" onChange={onChange} className="border border-[#000000] rounded-md outline-none p-2 md:p-3" />
      
      : type === 'tel' | 'phone' ? <PhoneNumberInputField required={required} onChange={onChange} /> :
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          onChange={onChange}
          className={className || 'border border-[#000000] rounded-md outline-none p-2 md:p-3'} />
      }
    
    </div>

  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func
}

export default InputField