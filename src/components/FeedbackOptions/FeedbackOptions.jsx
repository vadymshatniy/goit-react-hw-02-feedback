import React from 'react';
import profileStyles from "./FeedBackOptions.module.css";

export default function FeedbackOptions({ onCountGood, onCountNeutral, onCountBad }) {
    return (
        <section>
            <button type="button" className={profileStyles.button} onClick={onCountGood}>Good</button>
            <button type="button" className={profileStyles.button} onClick={onCountNeutral}>Neutral</button>
            <button type="button" className={profileStyles.button} onClick={onCountBad}>Bad</button>
        </section>
    )
};





