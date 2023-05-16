import React from 'react'
import InputField from './components/InputField';

const Contact = () => {
  return (
    <div className="flex flex-col justify-center content-center w-full mt-[3%] px-12">
        <h1 className="text-xl font-[900]">Contact Us</h1>

        <form className="w-full">
          <div className="flex flex-col md:flex-row md:my-[2%]">
            <InputField type='text' label='Name' placeholder="Name" autoComplete="name"/> 
            <InputField type='email' label='Email' placeholder="Email" autoComplete="email"/>
          </div>

          <div className="flex flex-col md:flex-row md:my-[2%]">
            <InputField type='text' label='Subject' placeholder="Subject"/>
            <InputField type='tel' label='Phone Number' placeholder="Phone"/>
          </div>

          <button className="bg-orange-600 font-bold px-12 py-3 rounded text-white capitalize mt-[2%] md:mt-[0.5%]">
            Submit
          </button>
        </form>
    </div>
  )
}

export default Contact;