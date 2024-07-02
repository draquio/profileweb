import React from 'react';
import Image from 'next/image'

import css from "./Card.module.scss"
export const Card = () => {
  return (
    <section className={css.card}>
      <h2>Sergio Mercado</h2>
      <Image src="/images/photo.webp" alt='photo' height={200} width={200} priority />
      <p><b>Edad:</b> 27 años.</p>
      <p><b>Profesión:</b> Ing. de Sistemas.</p>
      <p><b>Stack:</b> FullStack.</p>
      <p><b>Estatus:</b> Disponible.</p>
    </section>
  )
}


