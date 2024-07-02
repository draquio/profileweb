import React from 'react'
import { Card } from '@/components/card/Card';
import { render, screen } from '@testing-library/react';
describe('Testing Card component', () => {
  it('It should render the Card component with data', () => {
    render(<Card />);
    const title = screen.getByRole("heading", {name:"Sergio Mercado"});
    expect(title).toBeInTheDocument();
  });
  
  it('It should render the image in Card Component', () => {
    render(<Card />);
    const image = screen.getByRole('img', { name: /photo/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'photo');
  });
})
