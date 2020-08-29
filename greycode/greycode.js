/**
 * Grey code
 * @param{number} n
 * @return{Array}
 */
function greyCode(n) {
    if (n === 0) return [0];
    const combinations = [];
    let trace = [];
    backtrac(n, trace, combinations);
    const sol = [];
    trace = [];
    const used = {};
    btGreyCode(combinations, trace, used, sol, combinations[0]);
    
    return sol;
}

/**
 * Backtracks for grey sequece
 * @param {number[]} a 
 * @param {number[]} trace 
 * @param {Object} used 
 * @param {number[][]} sol 
 */
function btGreyCode(a, trace, used, sol, val) {
    if (trace.length === a.length) {
        sol.push([...trace]);
        return true;
    }

    for (let i = 1; i < a.length; i++) {
        const cVal = a[i];
        if (countDiff(cVal, val) === 1 && used[cVal] === undefined) {
            trace.push(val);
            used[val] = true;
            if (btGreyCode(a, trace, used, sol, cVal)) {
                trace.splice(trace.length - 1);
                delete used[val];
                return true;
            }
        }
    }
    return false;
}

/**
 * Counts the number of differences
 * @param {string} a 
 * @param {string} b 
 */
function countDiff(a, b) {
    if (a.length !== b.length) throw Error('Unequal length on strings');
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            count += 1;
        }
    }
    return count;
}

/**
 * Backtrac to get all the combinations
 * @param {number} n 
 * @param {number[]} trace 
 * @param {number[][]} combinations 
 */
function backtrac(n, trace, combinations) {
    if (trace.length === n) {
        combinations.push([...trace]);
        return;
    }
    for (let i = 0; i < 2; i++) {
        trace.push(i);
        backtrac(n, trace, combinations);
        trace.splice(trace.length - 1);
    }
}

const answer = greyCode(3);
console.log(answer);