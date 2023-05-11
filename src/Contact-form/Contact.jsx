import React from 'react'
import InputField from './components/InputField';

const Contact = () => {
  return (
    <div className="flex flex-col justify-center content-center w-full mt-[3%]">
        <h1 className="text-xl font-[900]">Contact Us</h1>

        <form>
          <div className="flex">
            <InputField type='text' label='Name' placeholder="Name" />
          </div>
        </form>
    </div>
  )
}

export default Contact;