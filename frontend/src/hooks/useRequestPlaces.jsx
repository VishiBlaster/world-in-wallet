import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useRequestPlaces = (query) => {
	const [results, setResults] = useState([]);

	const request = useCallback(async () => {
		const options = {
			method: 'GET',
			url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/CO/USD/en-US/',
			params: { query },
			headers: {
				'x-rapidapi-host':
					'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
				'x-rapidapi-key':
					'2f92bec8e2msh3a91fe5a4d94a1bp1ca782jsnb972eaa52cbf',
			},
		};

		if (query.length) {
			const response = await axios.request(options);
			const data = await response.data.Places;
			if (data) {
				setResults(data);
			}
		}
	}, [query]);

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			request();
		}
		return () => (mounted = false);
	}, [request]);

	return [results];
};

export default useRequestPlaces;
