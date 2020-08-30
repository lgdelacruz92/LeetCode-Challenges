/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (root === null) return [];
    const stack = [root];
    const sol = [];
    const visited = [];
    while(stack.length > 0) {
        const node = top(stack);
        if (node.left !== null && notVisited(node.left, visited)) {
            stack.push(node.left);
            break;
        }

        sol.push(node.val);
        const deleted = pop(stack);
        visited.push(deleted[0])

        if (node.right !== null && notVisited(node.left, visited)) {
            stack.push(node.right);
            break;
        }
    }
    return sol;
};

function top(stack) {
    return stack[stack.length - 1];
}

function pop(stack) {
    return stack.splice(stack.length - 1);
}

function notVisited(node, visited) {
    for (let i = 0; i < visited.length; i++) {
        if (node === visited[i]) return false;
    }
    return true;
}