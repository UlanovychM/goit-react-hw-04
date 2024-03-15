import css from './SearchBox.module.css';

const SearchBar = ({ onSearch }) => {
	const handleSubmit = evt => {
		evt.preventDefault();
		const form = evt.target;
		const search = form.elements.search.value;

		form.reset();

		if (search.trim() === '') {
			alert('Please, enter the text to search for images');
		}
		onSearch(search);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' name='search' placeholder='Search image...' />
			<button>Search</button>
		</form>
	);
};

export default SearchBar;
