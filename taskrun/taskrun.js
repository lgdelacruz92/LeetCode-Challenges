class Solution {
    solve(tasks, k) {
        if (tasks.length === 0) return 0;
        if (tasks.length === 1) return 1;
        const map = {};
        let time = 0;
        let max = -Infinity;

        while (tasks.length > 0) {
            const task = tasks[0];
            if (map[task]) {
                if (time - map[task] >= k) {
                    map[task] = time + 1;
                    max = Math.max(max, time + 1);
                    tasks.splice(0, 1);
                }
            } else {
                map[task] = time+1;
                max = Math.max(max, time + 1);
                tasks.splice(0, 1);
            }
            time+=1;
        }
        return max;
    }
}
const a = [];
for (let i = 1; i <= 100000; i++) {
    a.push(i);
}
const solution = new Solution();
console.log(solution.solve(a, 1));