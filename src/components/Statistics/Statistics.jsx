import React from 'react';
 
function Statistics({ good, neutral, bad, total, positive }) {
  
    return (
        <section>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{total}</p>
            <p>Positive feedback:{positive}%</p>
        </section>
    );
};

export default Statistics;
