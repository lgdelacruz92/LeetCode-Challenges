class BST {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

class Queue {
    constructor() {
        this.q = [];
    }

    /**
     * Adds an item in queue
     * @param {any}
     */
    add(q) {
        this.q.push(q);
    }

    /**
     * Front of the queue
     */
    front() {
        if (this.q.length === 0) {
            throw Error('Queue is empty.');
        }
        return this.q[0];
    }

    /**
     * Has next
     */
    hasNext() {
        return this.q.length > 0;
    }

    /**
     * Pop
     */
    pop() {
        if (this.q.length === 0) {
            throw Error('Queue is empty');
        }
        this.q.splice(0, 1);
    }
}

/**
 * Make BST
 * @param {Array}
 * @return {BST}
 */
function makeBST(a) {
    if (a.length === 0) return null;

    const root = new BST(a[0]);
}

