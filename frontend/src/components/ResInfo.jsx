import React from 'react';
import FlightsTicket from './FlightsTicket';

const ResInfo = ({ data, from, to }) => {
	let test = [];

	delete data['Places'];
	delete data['Currencies'];

	for (let i = 0; i <= data.Quotes.length - 1; i++) {
		test.push([]);
		for (const j of Object.entries(data)) {
			if (!j[1][i]) {
				test[i].push(j[1][0]);
			} else {
				test[i].push(j[1][i]);
			}
		}
	}

	return (
		<div className='d-flex justify-content-center mt-3'>
			<div className='center-info'>
				{test.map((each, key) => (
					<FlightsTicket key={key} data={each} from={from} to={to} />
				))}
			</div>
		</div>
	);
};

export default ResInfo;
