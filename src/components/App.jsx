import React from 'react';
import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import SectionTitle from './SectionTitle/SectionTitle';
import NotificationMessage from './NotificationMessage/NotificationMessage';

class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
    countGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    };
    countNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
    };
    countBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };
    countTotalFeedback = () => {
        return (this.state.good + this.state.neutral + this.state.bad)
    }
    countPositiveFeedbackPercentage = () => {
        return (this.state.good !== 0 && Math.round(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100))
    }

  render() {
    const total = this.countTotalFeedback()
    const positive = this.countPositiveFeedbackPercentage()
    return (
      <div>  
        <SectionTitle
          title={"Please leave feedback"}
        />
        <FeedbackOptions
          onCountGood={this.countGood}
          onCountNeutral={this.countNeutral}
          onCountBad={this.countBad}
        />
        <SectionTitle
            title={"Statistics"}
          />
        {total === 0 ?
          (<NotificationMessage />) :
        (<Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positive={positive}
        />)
        }
      </div>
    )
  }
};

export default App;