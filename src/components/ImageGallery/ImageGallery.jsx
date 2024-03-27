import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = forwardRef(({ images, onOpen }, ref) => {
	return (
		<>
			<ul className={css.list} ref={ref}>
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
});

export default ImageGallery;

ImageGallery.propTypes = {
	images: PropTypes.array,
	onOpen: PropTypes.func,
};
