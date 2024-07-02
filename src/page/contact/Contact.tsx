import React from "react";
import { Card } from "@/components/card/Card";
import css from "../Page.module.scss";
import ContactForm from "@/components/contactform/ContactForm";
export const Contact = () => {
  return (
    <div className={css.page}>
      <Card />
      <ContactForm />
    </div>
  );
}


