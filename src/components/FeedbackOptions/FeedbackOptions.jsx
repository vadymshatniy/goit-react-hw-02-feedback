import React from 'react';
import profileStyles from "./FeedBackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <section>
            {options.map(option => {
                return (
                    <button
                        key={option}
                        type="button"
                        className={profileStyles.button}
                        onClick={() => onLeaveFeedback(option)}>{ option }</button>);
})}
        </section>
    )
};





