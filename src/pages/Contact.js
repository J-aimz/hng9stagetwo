import React, {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'


function Contact() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '', 
        email : '',
        message : '',
        agreed : false
    })

    const [formErrors, setFormErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [disableBtn, setDiabsleBtn] = useState(false)

    useEffect(() =>{
        if(Object.keys(formErrors).length === 0 && isSubmitted){
            setDiabsleBtn(true)
            setTimeout(() =>{
                navigate('/')
            },[2000])
        }
    },[formErrors])

    function handleFormChange(e) {
        let {name, value} = e.target
        if(name === 'agreed') {
            setFormData(prev =>(
                {...prev, [name] : !eval(value)}
            ))
        }else{
            setFormData(prev =>(
                {...prev, [name] : value}
            ))
        }
    }

    function handleSubmition() {
        setFormErrors(formValidation(formData))
        setIsSubmitted(true)
    }

    function formValidation(values) {
        const errors = {}
       
        if(!values.firstName) {
           errors.firstName = 'First name is required!'
        }
        if(!values.lastName) {
            errors.lastName = 'Last name is required!'
        }
        if(!values.email) {
            errors.email = 'Email name is required!'
        }
        if(!values.message) {
            errors.message = 'Message feild if blank!'
        }
        if(!values.agreed) {
            errors.agreed = 'Agree to terms!'
        }
        
        
        return errors
    }

  return (
    <div className='contact-page'>

        {/* form content */}
        <div className="contact-con">
        
        {disableBtn ? 
            (<div className='sent-msg'> 
                <h3>Thank you. message sent</h3>
            </div>) : ''
        }
            <h1>contact me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>

            <div className='inputs-con'>

                <div className="form-names-con">
                    <div>
                        <label htmlFor="first_name">First name</label>
                            <input
                                id='first_name' 
                                type="text"
                                placeholder='Enter your first name' 
                                name='firstName'
                                onChange={handleFormChange}
                                value={formData.firstName}

                            />
                        <small>{formErrors.firstName}</small>
                    </div>

                    <div>
                        <label htmlFor="last_name">Last name</label>
                            <input
                                id='last_name' 
                                type="text" 
                                placeholder='Enter your last name'
                                name='lastName'
                                onChange={handleFormChange}
                                value={formData.lastName}
                            />
                        <small>{formErrors.lastName}</small>

                    </div>
                        
                </div>

                <label htmlFor="email">Email</label>
                    <input 
                        id='email'
                        type="email" 
                        placeholder='yourname@gmail.com'
                        name='email'
                        onChange={handleFormChange}
                        value={formData.email}
                    />
                <small>{formErrors.email}</small>
                

                <label htmlFor="message">Message</label>
                    <textarea 
                        id='message'
                        placeholder="Sent me a message and I'll replay you as soon as possible..." 
                        name='message'
                        onChange={handleFormChange}
                        value={formData.message}
                    />
                <small>{formErrors.message}</small>

                <div className="checkbox-con">
                        <input 
                            type="checkbox" 
                            id='agreed'
                            name="agreed" 
                            checked={formData.agreed}
                            value={formData.agreed}
                            onChange={handleFormChange}
                        />
                        <span> You agree to providing your data to {'james'} who may contact you.</span>
                </div>
                        <small>{formErrors.agreed}</small>

                <button id='btn__submit' type='button' onClick={handleSubmition} disabled={disableBtn}>Send message</button>
            </div>


        </div>
    </div>
  )
}

export default Contact