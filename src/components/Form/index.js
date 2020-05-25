import React from 'react'


export default function Form() {
    return (
        <form id="contact-form" data-netlify="true" data-netlify-honeypot="bot-field" name="contact-form" action="/">
            <input type="hidden" name="form-name" value="contact-form" />
            <div className="form-group">
                <label htmlFor="name">Nome:</label>
                <input name="name" required type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input name="email" type="email" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Mensagem:</label>
                <textarea name="message" required rows="3" />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )

}