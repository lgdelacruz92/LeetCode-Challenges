/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
   bt(tasks, n, [], [], {});
};

function bt(tasks, n, trace, sol, memo) {
    if (trace.length === tasks.length) {
        return trace;
    }

    for (let i = 0; i < tasks.length; i++) {
        trace.push(tasks[i]);
        bt(tasks, n, trace, sol, memo);
        trace.splice(trace.length - 1);
    }
}

leastInterval(["A","A","A","B","B","B"], 2);