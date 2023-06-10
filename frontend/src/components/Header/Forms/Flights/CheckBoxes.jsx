import React from 'react';

const CheckBoxes = ({ text, name, margin }) => {
	return (
		<label className={!margin ? 'lb' : 'lb lb2'}>
			<input
				type='checkbox'
				className='check-btn'
				name={name}
				aria-label={text}
				disabled
			/>
			<span className='check-text'>{text}</span>
		</label>
	);
};

export default CheckBoxes;
