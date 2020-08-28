const node = require('../lib/node');

const Node = node.Node;
const makeList = node.makeList;
const print = node.print;

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