import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const screenText = screen.getByText(/Chess Game/i);
  const BoardId = screen.getByTestId('bP-a7');
  expect(BoardId).toBeInTheDocument();
  expect(screenText).toBeInTheDocument();
});
