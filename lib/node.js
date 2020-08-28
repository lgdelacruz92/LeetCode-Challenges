class Node {
    constructor(val) {
        if (typeof val !== 'number') {
            throw Error('Node must have number initializer')
        }
        this.val = val;
        this.next = null;
    }

    /**
     * Sets the next node
     * @param {Node}
     */
    setNext(next) {
        if (!(next instanceof Node)) {
            throw Error('next: must be an instance of Node');
        }
        this.next = next;
    }
}


/**
 * Makes a list from array of numbers
 * @param {Array} a Array of numbers
 * @return {Node} head of the linked list
 */
function makeList(a) {
    if (a.length === 0) return null;
    if (a.length === 1) return new Node(a[0]);

    const head = new Node(a[0]);
    let cur = head;
    for (let i = 1; i < a.length; i++) {
        const newNode = new Node(a[i]);
        cur.next = newNode;
        cur = newNode;
    }
    return head;
}

/**
 * Prints the linked list in order
 * @param {Node} head 
 * @return {void}
 */
function print(head) {
    let cur = head;
    let arr = [];
    while (cur !== null) {
        arr.push(cur.val);
        cur = cur.next;
    }
    console.log(arr);
}

const node = { Node, makeList, print };

module.exports = node;