import { Component } from "react";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";


export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	}
	
countPositiveFeedbackPercentage = ({good, neutral, bad}) => Math.round(good / (good + neutral + bad) * 100);

countTotalFeedback = ({good, neutral, bad}) => (good + neutral + bad);

onLeaveFeedback = (e) => {
	const value = e.target.textContent;

	this.setState((prevState)=>{
	return {
		[value]: prevState[value] + 1
	}
	})
}
	
	render() {
		const { good, neutral, bad } = this.state;
		
	  return (<>
	  		<Section title="please leave feedback">
			<FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={Object.keys(this.state)}/>
		</Section>

		<Section title="statistics">
		  {this.countTotalFeedback(this.state) <= 0 
		  ? <Notification message="There is no feedback"/> 
		  : <Statistics 
				good={good}
				neutral={neutral}
				bad={bad}
				total={this.countTotalFeedback(this.state)}
				positivePercentage={this.countPositiveFeedbackPercentage(this.state)}>
			</Statistics>} 
	  </Section>
	  </>);
}
}

