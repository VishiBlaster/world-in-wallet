import React from 'react';
import Hero from '../components/Header/Hero';
import InfoScheme from '../components/InfoScheme';

const IndexScreen = () => {
	return (
		<>
			<Hero id='flights' title='Let the journey begin' />
			<InfoScheme />
		</>
	);
};

export default IndexScreen;
