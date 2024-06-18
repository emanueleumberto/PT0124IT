import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// Test 1
test('verifica del componente Welcome', () => {
  render(<App />);
  /* const linkElement = screen.getByText(/App React Epicode/i); */
  const linkElement = screen.getByRole('heading', {name: /App React Epicode/i});
  expect(linkElement).toBeInTheDocument();
});

describe('test HomePage', () => {
  // Test 2
  it('verifica del numero di card', () => {
    render(<App />);
    const allTheBooksCards = screen.getAllByTestId('book-card');
    expect(allTheBooksCards).toHaveLength(150)
  })

  // Test 4
  it('ricerca di libri tramite il campo nella navbar', async () => {
    render(<App />);
    const searchBook = screen.getByPlaceholderText(/cerca un libro/i)
    fireEvent.change(searchBook, { target : { value: 'witcher' }});
    const allTheBooksCards = await screen.findAllByTestId('book-card');
    expect(allTheBooksCards).toHaveLength(3)
  })

  // Test 5
  it('cambio colore bordo', () => {
    render(<App />);
    const allTheBooksCards = screen.getAllByTestId('book-card');
    const firstBookCard = allTheBooksCards[0];
    fireEvent.click(firstBookCard);
    expect(firstBookCard).toHaveStyle('border: 2px solid red');
  })

  // Test 6
  it('reset cambio colore bordo', () => {
    render(<App />);
    const allTheBooksCards = screen.getAllByTestId('book-card');
    const firstBookCard = allTheBooksCards[0];
    fireEvent.click(firstBookCard);
    expect(firstBookCard).toHaveStyle('border: 2px solid red');
    const secondBookCard = allTheBooksCards[1];
    fireEvent.click(secondBookCard);
    expect(firstBookCard).not.toHaveStyle('border: 2px solid red');
  })

  // Test 7
  it('Comment test', () => {
    render(<App />);
    const allTheBooksComment = screen.queryAllByTestId('single-comment');
    expect(allTheBooksComment).toHaveLength(0)
  })
})

describe('test detail page', () => {
  // Test 3
  it('verifica del componente Comment Area', () => {
    render(<App />);
    const btnDetail = screen.getAllByRole('button', {name: /Book Details/i})
    fireEvent.click(btnDetail[0])
    const commentArea = screen.getAllByPlaceholderText(/Inserisci qui il tuo commento/i);
    /* const commentArea =  screen.getAllByTestId('comment-area'); */
    expect(commentArea[0]).toBeInTheDocument()
  })

  // Test 8
  it('verifica numero commenti', async () => {
    render(<App />);
    // Già mi trovo nella pagina di dettagli della prima card
    // Perchè ci sono dal test precedente
    /* const btnDetail = screen.getAllByRole('button', {name: /Book Details/i})
    fireEvent.click(btnDetail[0]) */
    const allTheBooksComment = await screen.findAllByTestId('single-comment');
    expect(allTheBooksComment).toHaveLength(3)
  })
})


