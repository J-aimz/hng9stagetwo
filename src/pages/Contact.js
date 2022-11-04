import React from 'react'

function Contact() {
  return (
    <div className='contact-page'>
        <div className="contact-con">
            <h1>contact me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>

            <div className="form-names-con">
                <label htmlFor="first_name">
                    First name
                    <input
                        id='first_name' 
                        type="text"
                        placeholder='Enter your first name' 

                    />
                </label>

                <label htmlFor="last_name">
                    Last name
                    <input
                        id='last_name' 
                        type="text" 
                        placeholder='Enter your last name'

                    />
                </label>
            </div>

            <label htmlFor="email">
                Email
                <input 
                    id='email'
                    type="email" 
                    placeholder='yourname@gmail.com'

                />
            </label>

            <label htmlFor="message">
                Message
                <textarea 
                    id='message'
                    type="Sent me a message and I'll replay you as soon as possible..." 

                />
            </label>

            <input type="checkbox" name="" id="" />
            <label htmlFor="">You agree to providing your data to (name) who may contact you.</label>

            <button id='btn__submit' type='button'>Send message</button>

        </div>
    </div>
  )
}

export default Contact