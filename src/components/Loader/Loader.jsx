import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';
const Loader = () => {
	return (
		<RotatingLines
			visible={true}
			height='96'
			width='96'
			strokeColor='#3f51b5'
			strokeWidth='5'
			animationDuration='0.75'
			ariaLabel='rotating-lines-loading'
			wrapperStyle={{}}
			wrapperClass={css.loader}
		/>
	);
};

export default Loader;
