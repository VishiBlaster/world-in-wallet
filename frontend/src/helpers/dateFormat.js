const dateFormat = (dateObj, id) => {
	const year = dateObj.getUTCFullYear();
	const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
	let day;
	if (id === 'departDefault') {
		day = ('0' + (dateObj.getDate() + 5)).slice(-2);
	} else if (id === 'returnDefault') {
		day = ('0' + (dateObj.getDate() + 12)).slice(-2);
	} else {
		day = ('0' + dateObj.getDate()).slice(-2);
	}

	return `${year}/${month}/${day}`;
};

export default dateFormat;
