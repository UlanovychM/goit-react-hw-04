import css from './ImageModal.module.css';
import Modal from 'react-modal';

const ImageModal = ({
	onClose,
	isOpen,
	data: {
		urls: { regular },
		alt_description,
	},
}) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			className={css.modal}
			overlayClassName={css.overlay}
		>
			<div className={css.box}>
				<img src={regular} alt={alt_description} className={css.img} />
			</div>
		</Modal>
	);
};

export default ImageModal;
