class Timer {
	constructor(time) { this.start = new Date(time == null ? Date.now() : time); }
	reset(time) { this.start = new Date(time == null ? Date.now() : time); }
	timing(time) {
		this.time = new Date(time == null ? Date.now() : time);
		var ms = this.time - this.start, sec = ms / 1000, min = sec / 60, hour = min / 60, day = hour / 24;
		return [Math.floor(day), Math.floor(hour % 24), Math.floor(min % 60), Math.floor(sec % 60), ms % 1000];
	}
}