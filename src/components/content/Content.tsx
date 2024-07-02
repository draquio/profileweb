import React from 'react';
import css from "./Content.module.scss";
export const Content = () => {
  const data = [
    {
      title: "Frontend",
      list: [
        { item: "ReactJS" },
        { item: "Angular" },
        { item: "NextJS" },
        { item: "Tailwind" },
      ],
    },
    {
      title: "Backend",
      list: [
        { item: ".NET Core" },
        { item: "PHP" },
        { item: "NodeJS" },
        { item: "Python" },
      ],
    },
  ];
  return (
    <section className={css.content}>
      <h1>Información</h1>
      <div className={css.content_info}>
        <h3>Sobre mi</h3>
        <p>
          Hola, soy Sergio Mercado Galarza, tengo 27 años y soy de Bolivia,
          estudié Ingeniería en Sistemas en la Universidad Privada Domingo Savio
          y también Inglés en el Centro Boliviano Americano (CBA).
        </p>
        <p>
          Tengo más de 1 año y medio trabajando con diferentes tecnologías, la
          mayoría en proyectos personales monetizados, también trabajé haciendo
          SEO para blogs y canales de Youtube.
        </p>
      </div>
      {data.map((data, index) => (
        <div key={index} className={css.content_info} style={{ animationDelay: `${(index + 1) * 0.5}s` }}>
          <h3>{data.title}</h3>
          <ul>
            {data.list.map((items, index) => (
              <li key={index}>{items.item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
