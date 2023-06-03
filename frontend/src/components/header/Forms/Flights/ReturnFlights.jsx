import React, { useState } from 'react';
import { useHistory } from 'react-router';
import dateFormat from '../../../../helpers/dateFormat';
import DatesFields from './DatesFields.';
import CheckBoxes from './CheckBoxes';
import useRequestPlaces from '../../../../hooks/useRequestPlaces';

const ReturnFlights = () => {
	const history = useHistory();
	const [data, setData] = useState({
		from: '',
		to: '',
	});
	const [departDate, setDepartDate] = useState(
		dateFormat(new Date(), 'departDefault')
	);
	const [returnDate, setToDate] = useState(
		dateFormat(new Date(), 'returnDefault')
	);

	const handleDepartChange = (date) => {
		setDepartDate(dateFormat(date, 'depart'));
	};
	const handleReturnChange = (date) => {
		setToDate(dateFormat(date, 'return'));
	};

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const { from, to } = data;

	const [fromResults] = useRequestPlaces(from);
	const [toResults] = useRequestPlaces(to);

	let fromId, fromName;
	let toId, toName;
	if (fromResults.length) {
		fromId = fromResults[0].PlaceId;
		fromName = fromResults[0].PlaceName;
	}

	if (toResults.length) {
		toId = toResults[0].PlaceId;
		toName = toResults[0].PlaceName;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!from || !to || !fromId || !toId) {
			return;
		}
		history.push(
			`/transport/flights/${fromId}/${fromName}/${toId}/${toName}/${departDate
				.split('/')
				.join('-')}/${returnDate.split('/').join('-')}/`
		);
	};

	const handleSwitch = (e) => {
		e.preventDefault();
		let fromval = document.querySelector('#from-input');
		let toval = document.querySelector('#to-input');
		[fromval.value, toval.value] = [toval.value, fromval.value];
		setData({
			...data,
			from: fromval.value,
			to: toval.value,
		});
	};

	const dates = [
		{
			id: 'depart',
			text: 'Depart',
			name: departDate,
			handleChange: handleDepartChange,
		},
		{
			id: 'return',
			text: 'Return',
			name: returnDate,
			handleChange: handleReturnChange,
		},
	];

	return (
		<>
			<div>
				<div className='single-dest'>
					<div className='text-field'>
						<div>
							<label className='label' htmlFor='from-input'>
								From
							</label>
							<div>
								<input
									name='from'
									type='text'
									id='from-input'
									className='input'
									autoComplete='off'
									placeholder='Country, city or airport'
									value={from}
									onChange={handleChange}
								/>
							</div>
						</div>
						<CheckBoxes
							name='fromNearbyAirports'
							text='Add nearby airports'
						/>
					</div>
					<div className='switch-field'>
						<label className='label'>&nbsp;</label>
						<div>
							<button
								type='button'
								className='switch-btn'
								onClick={handleSwitch}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='18'
									height='18'
									style={{
										width: '1.125rem',
										height: '1.125rem',
									}}
								>
									<path d='M9.1 11.2V9.5H15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H9.1V4.8c0-.6-.6-.9-1.1-.7L2.4 7.3c-.5.3-.5 1 0 1.3L8 11.9c.5.3 1.1-.1 1.1-.7zm12.5 4.1L16 12.1c-.5-.3-1.1.1-1.1.7v1.7H9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.9v1.7c0 .6.6.9 1.1.7l5.6-3.2c.5-.3.5-1.1 0-1.4z'></path>
								</svg>
							</button>
						</div>
					</div>
					<div className='text-field'>
						<div>
							<label className='label' htmlFor='to-input'>
								To
							</label>
							<div>
								<input
									name='to'
									type='text'
									id='to-input'
									className='input input-to'
									autoComplete='off'
									placeholder='Country, city or airport'
									value={to}
									onChange={handleChange}
								/>
							</div>
						</div>
						<CheckBoxes
							name='toNearbyAirports'
							text='Add nearby airports'
						/>
					</div>
				</div>
				<div className='dates'>
					<div>
						{dates.map((date) => (
							<DatesFields key={date.id} {...date} />
						))}
					</div>
				</div>
				<div className='cabin'>
					<div>
						<div className='travelers'>
							<label className='label' htmlFor='cabin-input'>
								Cabin Class & Travellers
							</label>
							<div>
								<input
									placeholder='1 adult | Economy'
									name='cabin'
									type='text'
									id='cabin-input'
									className='input'
									autoComplete='off'
									disabled
								/>
							</div>
						</div>
					</div>
				</div>
				<div>
					<CheckBoxes name='directOnly' text='Direct flights only' />
					<CheckBoxes
						name='flexibleOnly'
						text='Flexible tickets only'
						margin
					/>
				</div>
			</div>
			<div>
				<button
					type='submit'
					onClick={handleSubmit}
					className='submit-btn'
					aria-label='Search flights'
				>
					Search flights
					<span
						style={{
							lineHeight: '1.5rem',
							display: 'inline-block',
							marginLeft: '0.2875rem',
							verticalAlign: 'top',
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							style={{ width: '1.5rem', height: '1.5rem' }}
							fill='rgb(255, 255, 255)'
						>
							<path d='M14.4 19.5l5.7-5.3c.4-.4.7-.9.8-1.5.1-.3.1-.5.1-.7s0-.4-.1-.6c-.1-.6-.4-1.1-.8-1.5l-5.7-5.3c-.8-.8-2.1-.7-2.8.1-.8.8-.7 2.1.1 2.8l2.7 2.5H5c-1.1 0-2 .9-2 2s.9 2 2 2h9.4l-2.7 2.5c-.5.4-.7 1-.7 1.5s.2 1 .5 1.4c.8.8 2.1.8 2.9.1z'></path>
						</svg>
					</span>
				</button>
			</div>
		</>
	);
};

export default ReturnFlights;
