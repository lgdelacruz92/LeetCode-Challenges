/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function (N, lamps, queries) {
    const grid = makeGrid(N);

    for (let i = 0; i < lamps.length; i++) {
        illuminate(grid, lamps[i], N);
    }

    const ans = [];
    for (let i = 0; i < queries.length; i++) {

        // Check if it should be an ans
        const x = queries[i][0];
        const y = queries[i][1];
        if (grid[y][x] !== 0)
            ans.push(1);
        else
            ans.push(0);

        // Check if neighbors and turn off illuminated light
        const neighbors = getNeighbors(queries[i], N);
        for (let j = 0; j < neighbors.length; j++) {
            const xp = neighbors[j][0];
            const yp = neighbors[j][1];
            if (grid[yp][xp] === 2) {
                const lampIndex = findLamp(lamps, neighbors[j]);
                lamps.splice(lampIndex, 1);

                for (let u = 0; u < grid.length; u++) {
                    for (let v = 0; v < grid[u].length; v++)
                        grid[u][v] = 0;
                }

                for (let u = 0; u < lamps.length; u++) {
                    illuminate(grid, lamps[u], N);
                }

            }
        }

        if (grid[y][x] === 2) {
            const lampIndex = findLamp(lamps, queries[i]);
            lamps.splice(lampIndex, 1);

            for (let u = 0; u < grid.length; u++) {
                for (let v = 0; v < grid[u].length; v++)
                    grid[u][v] = 0;
            }

            for (let u = 0; u < lamps.length; u++) {
                illuminate(grid, lamps[u], N);
            }
        }

    }
    console.log(ans);
    return ans;
};

/**
 * Finds a lamp
 * @param {number[][]} lamps 
 * @param {number[]} pos 
 */
function findLamp(lamps, pos) {
    for (let i = 0; i < lamps.length; i++) {
        if (lamps[i][1] === pos[1] && lamps[i][0] === pos[0])
            return i;
    }
    throw Error('This should not happen.');
}

/**
 * N neighbors
 * @param {number[]} q 
 * @param {number} N 
 */
function getNeighbors(q, N) {
    const dirs = [
        [0, -1],
        [1, -1],
        [1, 0],
        [1, 1],
        [0, 1],
        [-1, 1],
        [-1, 0],
        [-1, -1]
    ];
    const neigh = [];
    for (let i = 0; i < dirs.length; i++) {
        if (isPath(dirs[i][1] + q[1], dirs[i][0] + q[0], N)) {
            neigh.push([q[0] + dirs[i][0], q[1] + dirs[i][1]]);
        }
    }
    return neigh;
}

/**
 * Illuminates the cells row, col, diag
 * @param {number[][]} grid 
 * @param {number[]} pos 
 * @param {number} N 
 */
function illuminate(grid, pos, N) {
    // illuminate row
    for (let j = 0; j < N; j++)
        if (grid[pos[1]][j] !== 2)
            grid[pos[1]][j] = 1;

    // illuminate col
    for (let i = 0; i < N; i++)
        if (grid[i][pos[0]] !== 2)
            grid[i][pos[0]] = 1;

    // illuminate diag
    const dirs = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
    for (let x = 0; x < dirs.length; x++) {
        let i = pos[1];
        let j = pos[0];
        while (isPath(i, j, N)) {
            if (grid[i][j] !== 2)
                grid[i][j] = 1;
            i += dirs[x][1];
            j += dirs[x][0];
        }
    }

    grid[pos[1]][pos[0]] = 2;
}

/**
 * Makes grid of zeros
 * @param {N} N 
 */
function makeGrid(N) {
    const grid = [];
    for (let i = 0; i < N; i++) {
        const row = [];
        for (let j = 0; j < N; j++) {
            row.push(0);
        }
        grid.push(row);
    }
    return grid;
}

/**
 * BFS
 * @param {number[][]} grid nxn
 * @param {number[]} l pair of pos
 * @param {number[]} q target
 */
function bfs(grid, l, q) {

}

/**
 * Checkous if position is valid
 * @param {number} i ro
 * @param {number} j col
 * @param {number} N nxn
 */
function isPath(i, j, N) {
    return 0 <= j && j < N && 0 <= i && i < N;
}

// gridIllumination(5, [[0, 0], [4,4]], [[1,1],[1,1]]);
gridIllumination(10000, [[0, 0], [0, 4]], [[0, 4], [0, 1], [1, 4]]);