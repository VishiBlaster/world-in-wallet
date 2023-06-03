import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useResultsApi = (fromId, toId, depart, returnDate) => {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);

	const request = useCallback(async () => {
		const options = {
			method: 'GET',
			url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/CO/USD/en-US/${fromId}/${toId}/${depart}`,
			params: { inboundpartialdate: returnDate },
			headers: {
				'x-rapidapi-host':
					'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
				'x-rapidapi-key':
					'2f92bec8e2msh3a91fe5a4d94a1bp1ca782jsnb972eaa52cbf',
			},
		};

		setLoading(true);

		const response = await axios.request(options);
		const data = await response.data;

		if (data) {
			setResults(data);
		}

		setLoading(false);
	}, [fromId, toId, depart, returnDate]);

	useEffect(() => {
		let mounted = true;

		if (mounted && loading) {
			request();
		}
		return () => (mounted = false);
	}, [request, loading]);

	return [results, loading];
};

export default useResultsApi;
