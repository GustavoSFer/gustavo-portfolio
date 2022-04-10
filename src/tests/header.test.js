import { render, screen } from '@testing-library/react';
import Header from '../Components/Header';

test('Verifica se existe o nome Gustavo Fernandes na tela', () => {
  render(<Header />);
  const navegacao = screen.getByRole('heading', {
    name: 'Gustavo Fernandes',
  });
  
  expect(navegacao).toBeInTheDocument();
});

test('Verifica se existe os menus de navegação', () => {
  render(<Header />);
  const sobre = screen.getByText(/Sobre Mim/i);
  const projetos = screen.getByText(/projetos/i);
  const habilidade = screen.getByText(/habilidade/i);
  const contato = screen.getByText(/contato/i);
  
  expect(sobre).toBeInTheDocument();
  expect(projetos).toBeInTheDocument();
  expect(habilidade).toBeInTheDocument();
  expect(contato).toBeInTheDocument();
});
