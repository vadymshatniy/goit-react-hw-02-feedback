

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <section class="buttons">
            <h2>Please leave feedback</h2>
            <div>
                <input type="radio" class="radio" id="good"></input>
                <label for="good">Good</label>
            </div>
            <div>
                <input type="radio" class="radio" id="neutral"></input>
                <label for="neutral">Neutral</label>
            </div>
            <div>
                <input type="radio" class="radio" id="bad"></input>
                <label for="bad">Bad</label>
            </div>
        </section>
    )
};