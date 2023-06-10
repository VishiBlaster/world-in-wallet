import React from 'react';
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import ResInfo from '../components/ResInfo';
import useResultsApi from '../hooks/useResultsApi';

const ResultsScreen = () => {
	const { fromId, fromName, toId, toName, depart, returnDate } = useParams();

	const [data, loading] = useResultsApi(fromId, toId, depart, returnDate);

	return (
		<div id='content-wrap'>
			<div id='content'>
				<div id='search-summary'>
					<div id='search-summary-root'>
						<div className='summary-bar'>
							<section className='summary-section'>
								<div className='lupe-container'>
									<button
										type='button'
										className='lupe-btn'
										id='flights-search-summary-toggle-search-button'
									>
										<span
											style={{
												lineHeight: '1.125rem',
												display: 'inline-block',
												verticalAlign: 'top',
											}}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'
												width='18'
												height='18'
												className='lupe-icon'
												style={{
													width: '1.125rem',
													height: '1.125rem',
													fill: 'currentColor',
												}}
											>
												<path d='M10.517 1.517a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 15a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm11.457 5.526a1.62 1.62 0 0 1-2.221 0l-2.61-2.612c-.15-.15.242-.782.874-1.414.63-.632 1.265-1.024 1.414-.874l2.612 2.61a1.62 1.62 0 0 1-.069 2.29z'></path>
											</svg>
										</span>
									</button>
								</div>
								<div className='details-container'>
									<div className='search-details'>
										<div className='search-places'>
											<span className='places-info'>
												{fromName}
												&nbsp;({fromId.split('-')[0]})
												-&nbsp;
												{toName}
												&nbsp;({toId.split('-')[0]})
											</span>
										</div>
										<div className='search-cabin'>
											<span className='cabin-info'>
												1 adult
											</span>
											<span className='comfort-info'>
												Economy
											</span>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
				{loading ? (
					<Loading />
				) : (
					<ResInfo
						data={data}
						from={fromId.split('-')[0]}
						to={toId.split('-')[0]}
					/>
				)}
			</div>
			<aside id='sidebar'>
				<div className='sidebar d-flex justify-content-center'>
					<div className='slot'>
						<div className='slot-cont'>
							<div
								className='card slot-card-cont'
								style={{ width: '18rem' }}
							>
								<img
									src='/assets/images/sky.jpeg'
									className='slot-img img-fluid'
									alt='img-info'
								></img>
								<div className='card-body'>
									<h5 className='card-title'>{toName}</h5>
									{!loading && (
										<p className='card-text'>
											{' '}
											Offers available:{' '}
											{data.Carriers.length}
										</p>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</div>
	);
};

export default ResultsScreen;
