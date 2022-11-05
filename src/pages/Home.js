import React from 'react'

// components
import Links from '../components/Links';
import LinksToRoute from '../components/LinksToRoute';

// imgs
import profileImg from '../imgs/jaimz.jpg'
import slack from '../imgs/slack.png'
import github from '../imgs/github-logo.png'


function Home() {
  return (
    <div>
        <div className='body-con'>
            <svg className='svg-sm' width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="40" height="40" rx="20" fill="white"/>
                <path d="M21 21.8334C21.4603 21.8334 21.8334 21.4603 21.8334 21C21.8334 20.5398 21.4603 20.1667 21 20.1667C20.5398 20.1667 20.1667 20.5398 20.1667 21C20.1667 21.4603 20.5398 21.8334 21 21.8334Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26.8334 21.8334C27.2936 21.8334 27.6667 21.4603 27.6667 21C27.6667 20.5398 27.2936 20.1667 26.8334 20.1667C26.3731 20.1667 26 20.5398 26 21C26 21.4603 26.3731 21.8334 26.8334 21.8334Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.1667 21.8334C15.6269 21.8334 16 21.4603 16 21C16 20.5398 15.6269 20.1667 15.1667 20.1667C14.7065 20.1667 14.3334 20.5398 14.3334 21C14.3334 21.4603 14.7065 21.8334 15.1667 21.8334Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="1" y="1" width="40" height="40" rx="20" stroke="#D0D5DD" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 3"/>
            </svg>

            <svg className='svg-lg'  width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="40" height="40" rx="20" fill="white"/>
                <path d="M28.3261 21.5062C28.5296 21.3318 28.6313 21.2446 28.6686 21.1409C28.7013 21.0498 28.7013 20.9502 28.6686 20.8591C28.6313 20.7554 28.5296 20.6682 28.3261 20.4938L21.2672 14.4433C20.917 14.1431 20.7419 13.9931 20.5937 13.9894C20.4648 13.9862 20.3418 14.0428 20.2603 14.1427C20.1667 14.2576 20.1667 14.4883 20.1667 14.9495V18.5289C18.3878 18.8401 16.7597 19.7415 15.5498 21.0949C14.2307 22.5704 13.501 24.48 13.5 26.4591V26.9691C14.3745 25.9157 15.4663 25.0638 16.7006 24.4716C17.7889 23.9495 18.9653 23.6403 20.1667 23.5588V27.0505C20.1667 27.5117 20.1667 27.7424 20.2603 27.8573C20.3418 27.9572 20.4648 28.0138 20.5937 28.0106C20.7419 28.0069 20.917 27.8569 21.2672 27.5567L28.3261 21.5062Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="1" y="1" width="40" height="40" rx="20" stroke="#D0D5DD" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 3"/>
            </svg>



            <header className="header">
            <img id='profile__img' src={profileImg} alt="headshoot image of james adah(j_aimz)" />
            <h3 id='twitter'>@j_aimz</h3>
            <h3 id='slack'>@j_aimz</h3>
            </header>
            
            <main className="main-con">
            <div className="links-con">

                <Links id={'twitter'} title={'Twitter Link'} link={'https://twitter.com/j_amiz'}/>
                <Links id={'btn__zuri'} title={'Zuri Team'} link={'https://training.zuri.team'}/>
                <Links id={'books'} title={'Zuri Books'} link={'http://books.zuri.team'}/>
                <Links id={'book__python'} title={'Python Books'} link={'https://books.zuri.team/python-for-beginners?ref_id=j_aimz'}/>
                <Links id={'pitch'} title={'Background Check for Coders'} link={'https://background.zuri.team'}/>
                <Links id={'book__design'} title={'Design Books'} link={'https://books.zuri.team/design-rules'}/>
                <LinksToRoute id={'contact'} title={'contact'} path={'contact'}/>

            </div>

                <div className='logo-con'>
                <img src={slack} />
                <img src={github} />
                </div>
            </main>

        </div>
      
    </div>
  )
}

export default Home
