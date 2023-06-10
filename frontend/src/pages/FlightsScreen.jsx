import React from 'react';
import Hero from '../components/Header/Hero';
import InfoScheme from '../components/InfoScheme';

const FlightsScreen = () => {
	return (
		<div>
			<Hero
				id='flights'
				title='Cheap flights everywhere, from anywhere'
			/>
			<InfoScheme />
		</div>
	);
};

export default FlightsScreen;
