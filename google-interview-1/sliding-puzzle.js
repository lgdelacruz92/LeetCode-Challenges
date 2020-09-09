/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    const start = find0(board);


    start.step = 0;
    start.snapshot = copy(board);
    const visited = makeBoolGrid(board);
    visited[start.y][start.x] = true;
    if (start.x === board[0].length - 1 && start.y === board.length - 1 && !isSolved(board)) {
        visited[start.y][start.x] = false;
    }
    start.visitedSnapshot = copy(visited);
    const q = [];
    q.push(start);
    
    let min = Infinity;
    while (q.length > 0) {
        const f = q[0];

        const neighbors = getNeighbors(f, board);
        for (let i = 0; i < neighbors.length; i++) {
            load(f.snapshot, board);
            load(f.visitedSnapshot, visited);

            const neighbor = neighbors[i];
            if (visited[neighbor.y][neighbor.x] === false) {
                swap(f, neighbor, board)
                visited[neighbor.y][neighbor.x] = true;
                neighbor.step = f.step + 1;
                neighbor.snapshot = copy(board);
                neighbor.visitedSnapshot = copy(visited);

                if (isSolved(board)) {
                    if (min > neighbor.step) {
                        min = neighbor.step;
                    }
                }
                q.push(neighbor);
            }
        }
        load(f.snapshot, board);
        load(f.visitedSnapshot, visited);

        q.splice(0, 1);
    }
    if (min === Infinity) return -1;
    return min;
};

/**
 * Checks if the board is solved
 * @param {*} board 
 */
function isSolved(board) {
    return board[0][0] === 1 &&
           board[0][1] === 2 &&
           board[0][2] === 3 &&
           board[1][0] === 4 &&
           board[1][1] === 5 &&
           board[1][2] === 0;
}

function swap(from, to, board) {
    const t = board[from.y][from.x];
    board[from.y][from.x] = board[to.y][to.x];
    board[to.y][to.x] = t;
}

/**
 * Loads the board
 * @param {*} board 
 */
function load(copy, board) {
    const m = board.length;
    const n = board[0].length;
    for (let i = 0; i < m ; i++) {
        for (let j = 0; j < n; j ++) {
            board[i][j] = copy[i][j];
        }
    }
}

/**
 * Makes boolean grid
 * @param {*} board 
 */
function makeBoolGrid(board) {
    const m = board.length;
    const n = board[0].length;
    const grid = [];
    for (let i = 0; i < m ; i++) {
        const row = [];
        for (let j = 0; j < n; j ++) {
            row.push(false)
        }
        grid.push(row);
    }
    return grid;
}

/**
 * Copies the board
 * @param {} board 
 */
function copy(board) {
    const m = board.length;
    const n = board[0].length;
    
    const copy = [];
    for (let i = 0; i < m ; i++) {
        const row = [];
        for (let j = 0; j < n; j ++) {
            row.push(board[i][j])
        }
        copy.push(row);
    }
    return copy;
}

/**
 * First find the boards starting point
 * @param {*} board 
 */
function find0(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) return { x: j, y: i };
        }
    }
    throw Error("This show not happen.");
}

/**
 * Get neighbors of the current pos
 * @param {*} board 
 */
function getNeighbors(pos, board) {
    const dirs = [
        {x: 0, y:-1},
        {x: 1, y: 0},
        {x: 0, y: 1},
        {x:-1, y: 0}
    ];

    const neighbors = [];
    for (let i = 0; i < dirs.length; i++) {
        const neighbor = addV(dirs[i], pos);
        if (isInGrid(neighbor, board)) {
            neighbors.push(neighbor);
        }
    }
    return neighbors;
}

/**
 * Checks if position is inside the grid
 * @param {Object} pos 
 * @param {number[][]} board 
 */
function isInGrid(pos, board) {
    const m = board.length;
    const n = board[0].length;
    return 0 <= pos.x && pos.x < n &&
           0 <= pos.y && pos.y < m;
}

/**
 * Adds to vectors
 * @param {Object} a 
 * @param {Object} b 
 */
function addV(a, b) {
    return { x: a.x + b.x, y: a.y + b.y };
}

// console.log(slidingPuzzle([[1,2,3],[4,0,5]]));
// console.log(slidingPuzzle([[1,2,3],[5,4,0]]));
// console.log(slidingPuzzle([[4,1,2],[5,0,3]]));
console.log(slidingPuzzle([[3,2,4],[1,5,0]]));