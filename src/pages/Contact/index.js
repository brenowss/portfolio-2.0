import React from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useForm } from "react-hook-form";
import FadeIn from 'react-fade-in';

import './styles.css'

import Navbar from '../../components/Navbar'

export default function Contact() {
  const { register, errors } = useForm();
  return (
    <div>
      <Navbar />
      <FadeIn transitionDuration="600" className="fade-in">
        <div className="container">
          <h1 className="text-center">Entre em contato</h1>
          <div className="row">
            <div className="col-6 form">
              <form id="contact-form" data-netlify="true" data-netlify-honeypot="bot-field" name="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nome:</label>
                  <input name="name" ref={register({ required: true })} required type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input name="email" ref={register({ required: true })} type="email" />
                  {errors.email && "Digite um email válido"}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem:</label>
                  <textarea name="message" ref={register} required rows="3" />
                </div>
                <button type="submit">Enviar</button>
              </form>
              <div className="contacts">
                <div style={{ marginBottom: 10 }}><FaEnvelope style={{ marginRight: 10 }} color="#6e24b8" /> brenofiorese01@gmail.com</div>
                <div style={{ marginBottom: 10 }}><FaPhone style={{ marginRight: 10 }} color="#6e24b8" /> (54)9 8432-3766</div>
                <div style={{ marginBottom: 10 }}><FaGithub style={{ marginRight: 10 }} color="#6e24b8" /> <a href="https://github.com/brenowss" target="blank" rel="noopener noreferrer">brenowss</a> </div>
                <div style={{ marginBottom: 10 }}><FaLinkedinIn style={{ marginRight: 10 }} color="#6e24b8" /> <a href="https://www.linkedin.com/in/breno-fiorese/" target="blank" rel="noopener noreferrer">Breno Fiorese</a> </div>
              </div>
            </div>
            <div className="col-6 contact-illustration"><img src="https://tontasid.sirv.com/Images/contact.svg" alt="contact me" /></div>
          </div>
        </div>
      </FadeIn>
    </div>
  )

}