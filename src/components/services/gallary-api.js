import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

const ACCESS_KEY = 'GEK5Uurp5MDRBkiseDO6xROL9qpSTR_if0WdLuhMfHo';
const fetchImageApi = async (inputValue, pageNumber) => {
	const response = await axios.get(`search/photos`, {
		params: {
			query: inputValue,
			per_page: 12,
			page: pageNumber,
			orientation: 'landscape',
			client_id: ACCESS_KEY,
		},
	});
	return response.data.results;
};

export default fetchImageApi;
