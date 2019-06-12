class TreeReader {
	constructor(tree) {
		this.tree = tree;
	}

	traverse(tree, arr = []) {
		for (let key in tree) {
            arr.push(key);
            console.log(key, tree[key]); // To show its working
            if (typeof (tree[key]) === 'object') {
                this.traverse(tree[key], arr);
            }
        }
        return arr;
	}

	read() {
		console.log("TreeReader at work:");
		this.traverse(this.get());
	}

	get() {
		return this.tree;
	}
}

module.exports = TreeReader;