"use client"
import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import css from "./ContactForm.module.scss";

interface FormData {
    name: string;
    email: string;
    content: string;
  }

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        content: ""
    });
    const [message, setMessage] = useState<string>("");
    const [type, setType] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if(formData.name && formData.email && formData.content){
            setMessage("Formulario enviado");
            setType("green");
        } else{
            setMessage("Debes completar todos los campos");
            setType("red");
        }
    }
  return (
    <section className={css.contactform}>
    <h1>Contacto</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" required onChange={handleChange} name="name" value={formData.name}/>
      <input type="email" placeholder="Tucorreo@mail.com" required onChange={handleChange} name="email" value={formData.email}/>
      <textarea placeholder="Contenido" onChange={handleChange} name="content" value={formData.content}/>
      <button>Enviar</button>
    </form>
    {message && <div className={css.message} style={{background: type}}>{message}</div>}
    </section>
  )
}

export default ContactForm
