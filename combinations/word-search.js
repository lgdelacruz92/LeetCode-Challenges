/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (word.length === 0) return false;
    if (board.length === 0) return false;
    if (board[0].length === 0) return false;
    
    const visited = [];
    for (let i = 0; i < board.length; i++) {
        const row = [];
        for (let j = 0; j < board[0].length; j++) {
            row.push(false);
        }
        visited.push(row);
    }

    let pos = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                pos.push(createVector(j, i));
            }
        }
    }

    if (pos.length === 0) {
        return false;
    } else {
        for (let i = 0; i < pos.length; i++) {
            if (bfs(board, word, pos[i], 0, visited)) {
                return true;
            }
        }
        return false;
    }
};

/*
* BFS on the letter
* @param {string[][]} board
* @param {string} word
* @param {number} ind index of the current letter
*/
function bfs(board, word, pos, ind, visited) {
    if (ind >= word.length) return true;
    if (board[pos.y][pos.x] !== word[ind]) {
        return false;
    } else {
        const m = board.length;
        const n = board[0].length;
        const neighbors = getNeighbors(pos, n, m);
        for (let i = 0; i < neighbors.length; i++) {
            if (visited[pos.y][pos.x] === false) {
                const neighbor = neighbors[i];
                visited[pos.y][pos.x] = true;
                if (bfs(board, word, neighbor, ind + 1, visited)) {
                    return true;   
                }
                visited[pos.y][pos.x] = false;
            }
        }
        return false;
    }
}

/*
* Creates a vector object
* @param {number} x
* @param {number} y
* @return {object}
*/
function createVector(x, y) {
    return { x, y };
}

/*
* Checks if a letter is a neighbor of i, j
* @param {string[][]} board
* @param {object} pos the position of the cell
* @param {string} letter the letter to check
* @return {boolean}
*/
function isAdjacent(board, pos, letter) {
    return board[pos.y][pos.x] === letter;
}

/*
* Get neighboring cells
* @param {object} pos the position of the cell
* @param {number} w width of the board
* @param {number} h height of the board
* @return {array} 
*/
function getNeighbors(pos, w, h) {
    const topV = { x: 0, y: -1 };
    const rightV = { x: 1, y: 0 };
    const bottomV = { x: 0, y: 1 };
    const leftV = { x: -1, y: 0 };
    const vs = [topV, rightV, bottomV, leftV];
    const neighbors = [];
    for (let i = 0; i < vs.length; i++) {
        const newPos = add(pos, vs[i]);
        if (0 <= newPos.x && newPos.x < w && 0 <= newPos.y && newPos.y < h) {
            neighbors.push(newPos);
        }
    }
    return neighbors;
}

/*
* Adds two vectors
* @param {object} a vector 1
* @param {object} b vector 2
* @return {object} new vector
*/
function add(a, b) {
    return { x: a.x + b.x, y: a.y + b.y };
}

const board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

console.log(exist(board, 'ABCCED'));
console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));