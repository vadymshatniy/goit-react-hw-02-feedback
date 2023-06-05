import React from 'react';

export default function FeedbackOptions({ onCountGood, onCountNeutral, onCountBad }) {
    return (
        <section>
            <button type="button" className="button" onClick={onCountGood}>Good</button>
            <button type="button" className="button" onClick={onCountNeutral}>Neutral</button>
            <button type="button" className="button" onClick={onCountBad}>Bad</button>
        </section>
    )
};





