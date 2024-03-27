const LoadMoreBtn = ({ onLoad }) => {
	return (
		<div>
			<button type='button' onClick={onLoad}>
				Load more
			</button>
		</div>
	);
};

export default LoadMoreBtn;
