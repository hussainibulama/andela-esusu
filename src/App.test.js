import {render, screen} from '@testing-library/react';
import App from './App';
import PlayGround from './components/playGround';
import GameConfiguration from './components/configureGame';

test('renders text on the screen', () => {
  render(<App />);
  const WelcomeText = screen.getByText(/Chess Game/i);
  const game_Area = screen.getByTestId(/game_Area/i);
  expect(WelcomeText).toBeInTheDocument();
  expect(game_Area).toBeInTheDocument();
});
test('renders white and black square on the screen', () => {
  render(<PlayGround />);
  const whiteSquare = screen.getAllByTestId('white-square');
  const blackSquare = screen.getAllByTestId('black-square');
  expect(whiteSquare[0]).toBeInTheDocument();
  expect(whiteSquare[0]).toHaveAttribute('style');
  expect(blackSquare[0]).toBeInTheDocument();
  expect(blackSquare[0]).toHaveAttribute('style');
});
test('renders pieces when position is provided', () => {
  render(<GameConfiguration />);
  const whiteQueen = screen.getByTestId('wQ-d1');
  const blackKnight = screen.getByTestId('bN-b8');

  expect(whiteQueen).toBeInTheDocument();
  expect(blackKnight).toBeInTheDocument();
});
