import React, { useState } from 'react'

function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (evt) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", name, email, message })
          })
            .then(() => alert("Enviado com sucesso!"))
            .catch(error => alert(error));

          evt.preventDefault();
    }

    return (
        <form id="contact-form" data-netlify="true" data-netlify-honeypot="bot-field" name="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact-form" />
            <div className="form-group">
                <label htmlFor="name">Nome:</label>
                <input name="name" required type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input name="email" required type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Mensagem:</label>
                <textarea name="message" rows="3" value={message} onChange={e => setMessage(e.target.value)} />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )

}