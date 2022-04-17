import PropTypes from 'prop-types';

export function Statistics({good, neutral, bad, total, positivePercentage}) {
   return (<>
      <p className='text'>Good: {good}</p>
      <p className='text'>Neutral: {neutral}</p>
      <p className='text'>Bad: {bad}</p>
      <p className='text'>Total: {total}</p>
      <p className='text'>Positive feedback: {positivePercentage}%</p>
   </>);
}

Statistics.propTypes = {
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
total: PropTypes.number.isRequired,
positivePercentage: PropTypes.number.isRequired,
}