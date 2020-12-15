const isSameDate = (today, someDate) => {
	return someDate.getDate() == today.getDate();
};

const isSameMonth = (today, someDate) => {
	return someDate.getMonth() == today.getMonth();
};

const isSameYear = (today, someDate) => {
	return someDate.getFullYear() == today.getFullYear();
};

const isToday = (someDate) => {
	const today = new Date();
	return (
		isSameDate(today, someDate) &&
		isSameMonth(today, someDate) &&
		isSameYear(today, someDate)
	);
};

const isWithinFewDays = (someDate) => {
	const today = new Date();

	if (
		today.getDate() - someDate.getDate() <= 7 &&
		isSameMonth(today, someDate) &&
		isSameYear(today, someDate)
	) {
		return true;
	}

	return false;
};
