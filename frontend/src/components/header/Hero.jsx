import React from 'react';
import FlightsSection from './Forms/Flights/FlightsSection';
import ArrivingSoon from '../ArrivingSoon';

const Hero = ({ id, title }) => {
	let imgStyle;

	if (id === 'flights') imgStyle = 'flights-img';
	else if (id === 'hotels') imgStyle = 'hotels-img';
	else if (id === 'carhire') imgStyle = 'carhire-img';

	return (
		<section id='hero' className={imgStyle}>
			<div className='hero-content'>
				<div className='hero-inner-content'>
					<div className='heroimg-content'>
						<h1 className='hero-title'>{title}</h1>
						<div className='hero-search'>
							<div className='search-controls'>
								<div className='search-app'>
									<div className='flights-app'>
										<form>
											{id === 'flights' && (
												<FlightsSection />
											)}
											{id === 'hotels' && (
												<ArrivingSoon />
											)}
											{id === 'carhire' && (
												<ArrivingSoon />
											)}
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='hero-outside-content'>
					<svg viewBox='0 0 14832 55' className='end-peak'>
						<path d='M7501.307 8.517l-68.043 39.341c-10.632 6.185-23.795 6.185-34.528 0l-68.144-39.34c-8.91-5.173-18.988-8.215-29.316-8.518H0v55h14832V0H7530.671a63.604 63.604 0 0 0-29.364 8.517z'></path>
					</svg>
				</div>
			</div>
		</section>
	);
};

export default Hero;
