import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/header';

test('renders learn react link', () => {
  render(<Header />);
  const headerElement = screen.getByText("Daniel Cordeiro");
  expect(headerElement).toBeInTheDocument();
});
