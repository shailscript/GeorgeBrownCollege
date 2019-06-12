const tree = require("./tree.js");
const ListReader = require("./ListReader");
const TreeReader = require("./TreeReader");
const TreeAdapter = require("./TreeAdapter");

var listwrapper = {};
listwrapper.list = [
  'root',
  'left1',
  'left2a',
  'left3a',
  'left3b',
  'left2b',
  'left3c',
  'left3d',
  'right1',
  'right2a',
  'right3a',
  'right3b',
  'right2b',
  'right3c',
  'right3d'
];

console.log("---------------------------------------");
console.log("ListReader reads the list directly:");
reader = new ListReader(listwrapper.list);
reader.read();

console.log("---------------------------------------");
console.log("TreeReader reads the tree:");
reader = new TreeReader(tree);
reader.read();

console.log("---------------------------------------");
console.log("Using a TreeAdapter to feed ListReader:");
reader = new ListReader(new TreeAdapter(tree).getList());
reader.read();