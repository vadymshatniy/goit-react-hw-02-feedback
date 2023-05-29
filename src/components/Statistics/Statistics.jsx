

export default function Statistics({ good, neutral, bad }) {
    return (
        <div>
            <h2>Statistics</h2>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:</p>
            <p>Positive feedback:</p>
        </div>
    )
};