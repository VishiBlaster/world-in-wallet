import { createTheme } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

const DatesFields = ({ id, text, name, handleChange }) => {
	const defaultMaterialTheme = createTheme({
		palette: {
			primary: {
				main: '#0770e3',
			},
		},
	});

	return (
		<div className='date-field'>
			<label className='true label' htmlFor={id}>
				{text}
			</label>
			<button type='button' className='date-btn'>
				<ThemeProvider theme={defaultMaterialTheme}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<DatePicker
							id={id}
							format='dd/MM/yyyy'
							value={name}
							className='date-text'
							onChange={handleChange}
							autoOk
							disablePast
							type='button'
						/>
					</MuiPickersUtilsProvider>
				</ThemeProvider>
			</button>
		</div>
	);
};

export default DatesFields;
