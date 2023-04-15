import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import { TwoPaneList } from './TwoPaneList';

test('renders the list panel', () => {
  render(<App />);
  const listPanel = screen.getByTestId('list-panel');
  expect(listPanel).toBeInTheDocument();
});

test('renders the preview panel', () => {
  render(<App />);
  const previewPanel = screen.getByTestId('preview-panel');
  expect(previewPanel).toBeInTheDocument();
});

test('updates preview panel when title button is clicked', async () => {
  const onClickHandler = jest.fn();
  const testData = [
    { title: 'Title 1', content: ['Content 1'] },
    { title: 'Title 2', content: ['Content 2'] },
  ];
  render(<TwoPaneList data={testData} onClickHandler={onClickHandler} />);

  const titleButtons = screen.getAllByTestId('title-button');
  await userEvent.click(titleButtons[1]);

  const previewContent = screen.getByTestId('preview-content');

  expect(previewContent.textContent).toBe('Content 2');
});
