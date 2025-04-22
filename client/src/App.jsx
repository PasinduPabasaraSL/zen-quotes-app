import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import QuoteButton from './components/QuoteButton';

function App() {
  const [quote, setQuote] = useState("Click the button to feel calm 🌿");
  const [author, setAuthor] = useState("");

  const getRandomQuote = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/quote');
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (err) {
      setQuote("Failed to fetch quote");
      setAuthor("");
    }
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="zen">
      <Card quote={quote} author={author} />
      <QuoteButton getRandomQuote={getRandomQuote} />
    </div>
  );
}

export default App;
