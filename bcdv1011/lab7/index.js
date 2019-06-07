// import tree from 'tree.js';
// import list from 'list.js';

let list = ["root","left1","left2a","left3a","left3b","left2b","left3c","left3d","right1","right2a","right3a","right3b","right2b","right3c","right3d"];
let tree = {
    root: {
        left1: {
            left2a: {
                left3a: {},
                left3b: {}
            },
            left2b: {
                left3c: {},
                left3d: {}
            }
        },
        right1: {
            right2a: {
                right3a: {},
                right3b: {}
            },
            right2b: {
                right3c: {},
                right3d: {}
            }
        }
    }
}

let treeToList = (tree) => {
    // let arr = tree.reduce((acc, curr) => {
    //     return curr.keys
    //     /*
    //     * obj.keys
    //     */
    // });
    console.log(Object.keys(tree));
}

treeToList(tree);