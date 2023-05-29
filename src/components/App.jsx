import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  return (
    <div>
      <FeedbackOptions
        options
      />
      <Statistics
        good
        neutral
        bad
      />
      
    </div>
  );
};
