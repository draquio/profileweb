import React from 'react';
import { render, screen } from '@testing-library/react';
import { Contact } from '@/page/contact/Contact';
describe('Testing Contact Form component', () => {
  it("it should render the title in the form contact", () => {
    render(<Contact />);
    const title = screen.getByRole("heading", {name:"Contacto"});
    expect(title).toBeInTheDocument();
  });

  it("it should render the inputs in the form contact", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText('Nombre');
    const emailInput = screen.getByPlaceholderText('Tucorreo@mail.com');
    const textarea = screen.getByPlaceholderText('Contenido');
    const button = screen.getByRole('button', { name: /enviar/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(textarea).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
})
