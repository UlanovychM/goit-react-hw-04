import PropTypes from 'prop-types';

import css from './ImageCard.module.css';

const ImageCard = ({ data: { urls, alt_description } }) => {
	return (
		<>
			<div>
				<img src={urls.small} alt={alt_description} />
			</div>
		</>
	);
};

export default ImageCard;

Contact.propTypes = {
	data: PropTypes.object,
	onDelete: PropTypes.func,
};
