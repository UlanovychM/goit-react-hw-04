import PropTypes from 'prop-types';

import css from './ImageCard.module.css';

const ImageCard = ({
	image: {
		urls: { small },
		alt_description,
	},
}) => {
	return (
		<>
			<div>
				<img className={css.galleryImg} src={small} alt={alt_description} />
			</div>
		</>
	);
};

export default ImageCard;

ImageCard.propTypes = {
	data: PropTypes.object,
};
