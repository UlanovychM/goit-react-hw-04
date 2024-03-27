import css from './SearchBox.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const search = form.elements.search.value;
		if (form.elements.search.value.trim() === '') {
			toast.error('Please enter search name of images!');
			return;
		}

		onSearch(search);
		form.reset();
	};

	return (
		<div className={css.wrap}>
			<form onSubmit={handleSubmit} className={css.form}>
				<input
					className={css.input}
					type='text'
					name='search'
					placeholder='Search image...'
				/>
				<button className={css.btn}>Search</button>
			</form>
		</div>
	);
};

export default SearchBar;
