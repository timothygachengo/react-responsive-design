import React, { useState } from 'react'
import InputField from './components/InputField';
import { sendEmail } from './utils'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')

  const handleChange = (setState, e) => {
    setState(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      subject,
      message
    }

    sendEmail(data).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  
  return (
    <div className="flex flex-col justify-center items-center w-full mt-[3%] sm:px-10 lg:px-12">
      <h1 className="text-xl font-[900] text-center">Contact Us</h1>

      <form className="w-full">
        <div className="flex flex-col md:flex-row md:my-[2%] px-3">
          <InputField type='text' label='Name' placeholder="Name" autoComplete="name" onChange={e => handleChange(setName, e)}/>
          <InputField type='email' label='Email' placeholder="Email" autoComplete="email" onChange={e => handleChange(setEmail, e)}/>
        </div>

        <div className="flex flex-col md:flex-row md:my-[2%] px-3">
          <InputField type='text' label='Subject' placeholder="Subject" onChange={e => handleChange(setSubject, e)} />
          <InputField type='tel' label='Phone Number' placeholder="Phone" onChange={e => handleChange(setPhone, e)} />
        </div>

        <div className="flex flex-col md:flex-row md:my-[2%] px-3">
          <InputField type='textarea' label='Message' placeholder="Message" onChange={e => handleChange(setMessage, e)} />
        </div>

        <div className="flex flex-col md:flex-row px-3 md:mr-10 my-[2%] md:my-0">
          <button onClick={handleSubmit} className="bg-orange-600 font-bold px-12 py-3 rounded text-white capitalize mt-[2%] md:mt-[0.5%] w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact;