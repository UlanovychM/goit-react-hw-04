import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoad }) => {
	return (
		<div className={css.wrap}>
			<button className={css.btnmore} type='button' onClick={onLoad}>
				Load more
			</button>
		</div>
	);
};

export default LoadMoreBtn;
