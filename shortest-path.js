class Solution {
    solve(matrix) {
        
        // matrix could be zero
        // matrix could be 1 row and 0 col
        const m = matrix.length;
        const n = matrix[0].length;
        let min = Infinity;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === 2) {
                    const v = this.findBus(matrix, i, j, m, n);
                    if (v !== -1) {
                        min = Math.min(v, min);
                    }
                }
            }
        }
        if (min === Infinity) return -1;
        return min;
    }
    
    findBus(matrix, i, j, m, n) {
        const q = [
            [j, i, 0]
        ];
        
        const dir = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1]
        ];
        const visited = [];
        for (let y = 0; y < m; y++) {
            const row = [];
            for (let x = 0; x < n; x++) {
                row.push(false);
            }
            visited.push(row);
        }

        while (q.length > 0) {
            const f = q[0];
            visited[f[1]][f[0]] = true;
            for (let x = 0; x < dir.length; x++) {
                const ns = [dir[x][0] + f[0], dir[x][1] + f[1]];
                if ( 0 <= ns[0] && ns[0] < n && 0 <= ns[1] && ns[1] < m && matrix[ns[1]][ns[0]] === 0 && visited[ns[1]][ns[0]] === false) {
                    q.push([...ns, f[2] + 1]);
                }
                else if (0 <= ns[0] && ns[0] < n && 0 <= ns[1] && ns[1] < m &&  matrix[ns[1]][ns[0]] === 3 && visited[ns[1]][ns[0]] === false) {
                    return f[2] +1;
                }
            }
            q.splice(0, 1);
        }
        return -1;     
    }
    
}

const matrix = [
    [2, 3, 0],
    [0, 2, 2],
    [3, 0, 0]
]

const matrix2  = [
    [2, 1, 2],
    [1, 0, 3],
    [3, 1, 0]
];

const matrix3 = [
    [3, 2]
]
const s = new Solution();

console.log(s.solve(matrix));