import PropTypes from 'prop-types';

export function FeedbackOptions({onLeaveFeedback, options}) {
	return (<>
		{options.map((item) => {
			return (<button key={item} type="button" className={`btn btn--${item}`}
			onClick={onLeaveFeedback}>{item}</button>);})}
	</>)
}

FeedbackOptions.propTypes = {
	onLeaveFeedback: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.string.isRequired).isRequired,
};
