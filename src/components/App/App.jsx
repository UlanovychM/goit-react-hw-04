import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBox';
import fetchImageApi from '../services/gallary-api';

import css from './App.module.css';

function App() {
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [loadBtn, setLoadBtn] = useState(false);

	useEffect(() => {
		if (searchValue.trim === '') {
			return;
		}

		const getData = async () => {
			try {
				setLoading(true);
				setError(false);
				fetchImageApi(searchValue, page);
			} catch (e) {}
		};
	});

	return (
		<>
			<div className={css.container}>
				<SearchBar />
			</div>
		</>
	);
}

export default App;
