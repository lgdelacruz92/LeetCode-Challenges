const node = require('../lib/node');
const Node = node.Node;
const makeList = node.makeList;
const print = node.print;

/**
 * Partition
 * @param{Node}
 * @param{number} x
 * @return{Node}
 */
function partition(head, x) {
    if (head === null) return head;

    let r = null;
    let t = null;
    let p = head;

    while (p !== null) {
        if (p.val < x) {

            // Build the result.
            if (r === null) {
                r = new Node(p.val);
                t = r;
            } else {
                t.next = new Node(p.val);
                t = t.next;
            }

            // Delete node
            if (p === head) {
                head = p.next;
            } else {
                let p0 = head;
                while(p0.next !== p) {
                    p0 = p0.next;
                }
                p0.next = p.next;
            }
            p = p.next;
        } else {
            p = p.next;
        }
    }
    t.next = head;
    head = r;
    return head;
}

let head = makeList([1,4,3,2,5,2]);
head = partition(head, 3);
print(head);