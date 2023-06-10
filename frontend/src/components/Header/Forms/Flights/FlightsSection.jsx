import React, { useState } from 'react';
import ArrivingSoon from '../../../ArrivingSoon';
import ReturnFlights from './ReturnFlights';

const FlightsSection = () => {
	const [option, setOption] = useState('return');

	const handleOption = (e) => {
		setOption(e.target.value);
	};
	return (
		<>
			{/*Radio Buttons*/}
			<div>
				<div>
					<label className='search-radio'>
						<input
							type='radio'
							className='radio-input'
							aria-label='Return'
							value='return'
							checked={option === 'return' && true}
							onChange={handleOption}
						/>
						{option === 'return' && (
							<div className='radio-container'></div>
						)}
						<span aria-hidden='true'>Return</span>
					</label>
					<label className='search-radio'>
						<input
							type='radio'
							className='radio-input'
							aria-label='One way'
							value='one way'
							checked={option === 'one way' && true}
							onChange={handleOption}
						/>
						{option === 'one way' && (
							<div className='radio-container'></div>
						)}
						<span aria-hidden='true'>One way</span>
					</label>
					<label className='search-radio'>
						<input
							type='radio'
							className='radio-input'
							aria-label='Multi-city'
							value='multi city'
							checked={option === 'multi city' && true}
							onChange={handleOption}
						/>
						{option === 'multi city' && (
							<div className='radio-container'></div>
						)}
						<span aria-hidden='true'>Multi-city</span>
					</label>
				</div>
			</div>
			{option === 'return' && <ReturnFlights />}
			{option === 'one way' && <ArrivingSoon />}
			{option === 'multi city' && <ArrivingSoon />}
		</>
	);
};

export default FlightsSection;
