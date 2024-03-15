import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './ImageGallery.module.css';
import Contact from '../ImageCard/ImageCard';

const ImageGallery = ({ images, handleClick }, ref) => {
	return (
		<>
			<ul className={css.list} ref={ref}>
				{images.map(image => (
					<li
						className={css.item}
						key={image.id}
						onClick={() => {
							handleClick(image);
						}}
					>
						<ImageCard data={image} />
					</li>
				))}
			</ul>
		</>
	);
};

export default ImageGallery;

ContactList.propTypes = {
	contacts: PropTypes.array,
	handleClick: PropTypes.func,
};
