import { render, screen } from '@testing-library/react';
import Sobre from '../pages/Sobre';

test('Verifica se encontra o titulo da tela sobre', () => {
  render(<Sobre />);
  const tituloSobre = screen.getByRole('heading', {
    name: 'Olá, eu sou o Gustavo.',
  });
  
  expect(tituloSobre).toBeInTheDocument();
});

test('Verifica é encontrado a imagem', () => {
  render(<Sobre />);
  const imagem = screen.getByAltText('Imagem garoto na frente do computador');

  expect(imagem).toBeInTheDocument();
});
