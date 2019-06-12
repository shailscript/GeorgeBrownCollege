const TreeReader = require('./TreeReader');

class TreeAdapter {
	constructor(tree) {
		this.tree = tree;
		this.list = [];
        this.tReader = new TreeReader(this.tree);
        this.list = this.tReader.traverse(this.tree);
	}

	getList() {
		console.log("TreeAdapter is passing the list");
		return this.list;
	}

}

module.exports = TreeAdapter;