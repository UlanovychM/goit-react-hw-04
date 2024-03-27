import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onOpen }) => {
	return (
		<>
			<ul className={css.list}>
				{images.map(image => (
					<li
						key={image.id}
						onClick={() => {
							onOpen(image);
						}}
					>
						<ImageCard image={image} />
					</li>
				))}
			</ul>
		</>
	);
};

export default ImageGallery;

ImageGallery.propTypes = {
	images: PropTypes.array,
	handleClick: PropTypes.func,
};
