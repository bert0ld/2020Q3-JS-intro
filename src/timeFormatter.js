const CustomError = require("../extensions/custom-error");

module.exports = function timeFornatter( sec ) {
	if (
			(typeof sec !== 'number') ||
			(sec < 1) ||
			(sec > 3600)
		) {
		throw new Error('Wrong arguement');
	}

	if (sec < 60) {
		//return `${sec} sec`;
		return sec + ' sec';
	} else if (sec % 60 === 0) {
		const minutes = sec / 60;
		return `${minutes} min`;
	} else {
		const minutes = Math.trunc(sec / 60);
		const seconds = sec % 60;
		return `${minutes} min ${seconds} sec`;
	}
};

