const QuoteButton = ({ getRandomQuote }) => {
    return (
        <button onClick={getRandomQuote}>New Quote</button>
    );
};

export default QuoteButton;
