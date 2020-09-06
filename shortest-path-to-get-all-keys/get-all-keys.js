/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
    if (grid.length === 1 && grid[0][0] === '@') return -1;
    
    const m = grid.length;
    const n = grid[0].length;
    
    const visited = makeBoolGrid(m, n);
    
    const q = [[...findStart(grid, m, n), 0]];
    const keys = {};
    const collectedKeys = {};
    let preCollectedKeys = {}
    initCollectedKeys(collectedKeys, grid);
    preCollectedKeys = JSON.parse(JSON.stringify(collectedKeys));
    let minSteps = -1;
    while (q.length > 0) {
        const front = q[0];
        console.log(front);        
        if (grid[front[1]][front[0]] === '.') {
            // keep going
            stepThrough(visited, front, grid, q);
        } else if (isKey(grid[front[1]][front[0]])) {
            // save key and keep going
            keys[grid[front[1]][front[0]]] = true;
            collectedKeys[grid[front[1]][front[0]]] = true;
            stepThrough(visited, front, grid, q);
        } else if (grid[front[1]][front[0]] === '@') {
            stepThrough(visited, front, grid, q);
        }else if (isLock(grid[front[1]][front[0]])) {
            // if no key
            //  - stop try other paths
            const lockKey = grid[front[1]][front[0]].toLowerCase();
            if (keys[lockKey] === true) {
                stepThrough(visited, front, grid, q);
                delete keys[lockKey];
            } else {
                visited[front[1]][front[0]] = false;
                q.splice(0, 1);
            }
        }

        if (JSON.stringify(collectedKeys) !== JSON.stringify(preCollectedKeys)) {
            resetVisited(visited);
            preCollectedKeys = JSON.parse(JSON.stringify(collectedKeys));
        }

        if (allKeysAreCollected(collectedKeys)) {
            if (minSteps === -1) {
                minSteps = front[2];
            } else {
                if (minSteps > front[2]) {
                    minSteps = front[2];
                }
            }
        }
    }

    return minSteps;
};

function resetVisited(visited) {
    for (let i = 0; i < visited.length; i++) {
        for (let j = 0; j < visited[i].length; j++) {
            visited[i][j] = false;
        }
    }
}

function allKeysAreCollected(collectedKeys) {
    const keys= Object.keys(collectedKeys);
    for (let i = 0; i < keys.length; i++) {
        if (collectedKeys[keys[i]] === false) {
            return false;
        }
    }
    return true;
}

function initCollectedKeys(collectedKeys, grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isKey(grid[i][j])) {
                collectedKeys[grid[i][j]] = false;
            }
        }
    }
}

function stepThrough(visited, front, grid, q) {
    visited[front[1]][front[0]] = true;
        
    const neighbors = getNeighbors(grid, front[1], front[0], visited);
    neighbors.forEach(nb => {
        const inQueue = q.find(i => i[0] === nb[0] && i === nb[1]);
        if (typeof inQueue === 'undefined' && grid[nb[1]][nb[0]] !== '#') {
            q.push([...nb, front[2] + 1]);    
        }
    });
    q.splice(0, 1);
}

function isKey(letter) {
    const validLetters = ['a', 'b', 'c', 'd','e','f'];
    return validLetters.indexOf(letter) !== -1;
}

function isLock(cell) {
    const locks = ['A', 'B', 'C', 'D', 'E', 'F'];
    return locks.indexOf(cell) !== -1;
}

function getNeighbors(grid, y, x, visited) {
    const vectors = [
        [0, -1],
        [1, 0],
        [0,1],
        [-1, 0],
    ];
    
    const neighbors = [];
    for (let i = 0; i < vectors.length; i++) {
        const potentialValidNeighbor = add([vectors[i][0], vectors[i][1]], [x, y]);
        if (validNeighbor(grid, potentialValidNeighbor, visited)) {
            neighbors.push(potentialValidNeighbor);
        }
    }
    return neighbors;
}

function validNeighbor(grid, v, visited) {
    const m = grid.length;
    const n = grid[0].length;
    
    const c1 = 0 <= v[0] && v[0] < n && 0 <= v[1] && v[1] < m;
    if (!c1) return false;
    const c3 = visited[v[1]][v[0]] === false;
    return c1 && c3;
}

function add(a, b) {
    return [a[0] + b[0], a[1] + b[1]];
}

function findStart(grid, m, n) {
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '@') {
                return [j, i];
            }
        }
    }
    throw Error('This should not happen.')
}

function makeBoolGrid(m, n) {
    const boolGrid = [];
    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(false);
        }
        boolGrid.push(row);
    }
    return boolGrid;
}
// console.log(shortestPathAllKeys(["@.a.#","###.#","b.A.B"]));
// console.log(shortestPathAllKeys(["@..aA","..B#.","....b"]));
// console.log(shortestPathAllKeys(["@Aa"]));
console.log(shortestPathAllKeys(["@...a",".###A","b.BCc"]));
// shortestPathAllKeys(["@.a.#","###.#","b.A.B"]);
// shortestPathAllKeys(["@..aA","..B#.","....b"]);