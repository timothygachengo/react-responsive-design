import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ label, type, required, className, placeholder }) => {
  return (
    <div className="flex flex-col">
      <div className="my-[2%]">
        <label className="font-[600]">{label}</label>
        {required && <span className="text-red-500">*</span>}
      </div>
      
      <input 
      type={type}
      placeholder={placeholder}
      required={required}
      className={className || 'border border-[#000000] rounded-md outline-none w-[300px] px-3 py-2'} />
    </div>
    
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string
}

export default InputField