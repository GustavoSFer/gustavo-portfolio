import { render, screen } from '@testing-library/react';
import Skills from '../pages/Skills';

test('Verifica se encontra o titulo da tela sobre', () => {
  render(<Skills />);
  const tituloSobre = screen.getByRole('heading', {
    name: 'Habilidades / Conhecimentos',
  });  
  expect(tituloSobre).toBeInTheDocument();
});
