const Card = ({ quote, author }) => {
    return (
        <div className="card">
            <h1>Zen Garden🌿</h1>
            <p>{quote}</p>
            {author && <footer>- {author}</footer>}
        </div>
    );
};

export default Card;
