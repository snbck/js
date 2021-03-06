Object.prototype.isArray = function () {
	if (typeof this !== 'object' || this === null) return false;
	if (typeof Array.isArray === 'function') return Array.isArray(this);
	return Object.prototype.toString.call(this) === '[object Array]';
};