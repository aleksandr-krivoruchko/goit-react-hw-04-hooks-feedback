import PropTypes from 'prop-types';

export function Section({title, children}) {
	return <div className="section">

				<h1 className="title">{title}</h1>

				{children}

			</div>
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};