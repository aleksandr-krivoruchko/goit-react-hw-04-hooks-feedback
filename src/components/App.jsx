import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countPositiveFeedbackPercentage(good, neutral, bad) {
    return Math.round((good / (good + neutral + bad)) * 100);
  }

  function countTotalFeedback(good, neutral, bad) {
    return good + neutral + bad;
  }

  function onLeaveFeedback(e) {
    console.log(e.target.textContent);
    switch (e.target.textContent) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Section title="please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="statistics">
        {countTotalFeedback(good, neutral, bad) <= 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(good, neutral, bad)}
            positivePercentage={countPositiveFeedbackPercentage(
              good,
              neutral,
              bad
            )}
          ></Statistics>
        )}
      </Section>
    </>
  );
}
