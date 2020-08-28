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

// print(makeList([1,2]));
// print(makeList([]));

/**
 * Deletes the duplicates in the linked list
 * @param {Node} head the head of the node
 * @return {Node}
 */
var deleteDuplicates = function (head) {
    if (head === null || head.next === null) return head;

    let p1 = head;
    let p2 = head;

    let count = 0;
    while (p1 !== null) {
        p2 = p1;
        while (p2 !== null && p2.val === p1.val) {
            count += 1;
            p2 = p2.next;
        }
        if (count > 1) {
            // delete
            if (p1 === head) {
                head = p2;
                p1 = head;
            } else {
                let p0 = head;
                while (p0.next.val !== p1.val) {
                    p0 = p0.next;
                }
                p0.next = p2;
                p1 = p2;
            }
        } else {
            p1 = p1.next;
        }
        count = 0;
    }
    return head;
};

let head = makeList([1, 2, 3, 3, 4, 4, 5]);
// let head = makeList([1, 1, 1, 2, 3]);
head = deleteDuplicates(head);
print(head);