import React from 'react';
import { render, screen } from '@testing-library/react';
import { Content } from '@/components/content/Content';
describe("Testing Content Component", () => {
    it('It should render the title in the Content component', () => {
        render(<Content />);
        const title = screen.getByRole("heading", {name:"Información"});
        expect(title).toBeInTheDocument();
    });

    it('It should render about me in the Content component', () => {
        render(<Content />);
        const title = screen.getByRole("heading", {name:"Sobre mi"});
        expect(title).toBeInTheDocument();
    });

    it('It should render frontend in the Content component', () => {
        render(<Content />);
        const title = screen.getByRole('heading', { name: /Frontend/i });
        expect(title).toBeInTheDocument();
    });
    
    it('It should render backend in the Content component', () => {
        render(<Content />);
        const title = screen.getByRole('heading', { name: /Backend/i });
        expect(title).toBeInTheDocument();
    });
})