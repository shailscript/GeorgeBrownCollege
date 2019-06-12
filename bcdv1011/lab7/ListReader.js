class ListReader {
	constructor(list) {
		this.list = list;
	}

	read() {
		console.log("ListReader at work:");
		this.list.forEach(item => console.log(item));
	}

	get() {
		return this.list;
	}
}

module.exports = ListReader;