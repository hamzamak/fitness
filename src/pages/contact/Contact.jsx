import React from 'react'
import Header from '../../components/Header'
import {MdEmail} from 'react-icons/md' ;
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'
import HeaderImage from '../../images/header_bg_2.jpg'
function Contact() {
  return (
    <>
     <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione mollitia dignissimos praesentium earum veritatis expedita quos. Sed, assumenda adipisci.
     </Header>

     <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:snnortyhmza@gmail.com" target='_blank' rel='noreferrer noopener'> <MdEmail/></a>
          <a href="" target='_blank' rel='noreferrer noopener'> <BsMessenger/></a>
          <a href="" target='_blank' rel='noreferrer noopener'> <IoLogoWhatsapp/></a>
        </div>
      </div>

    
     </section>
    </>
  )
}

export default Contact