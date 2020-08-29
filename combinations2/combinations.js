/**
 * Chooses k number of items from a
 * @param {number[]} a Array
 * @param {number} k Number of items to choose
 * @return {number[]}
 */
function nChooseK(a, k, trace, sol) {
    if (k < 0 || k > a.length) {
       return;
    }

    if (k === 0) {
        sol.push([...trace]);
    } else {
        for (let i = 0; i < a.length; i++) {
            trace.push(a[i]);
            nChooseK(a.slice(i + 1), k - 1, trace, sol);
            trace.splice(trace.length - 1);
        }
    }
}

const trace = [];
const sol = [];
const a = [0, 1, 2, 3];
for (let i = 0; i <= a.length; i++) {
    nChooseK(a, i, trace, sol);
}
console.log(sol);
