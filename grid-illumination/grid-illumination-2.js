function gridIllumination(N, lamps, queries) {
    const ans = [];
    while (queries.length > 0) {
        const f = queries[0];
        if (lamps.length <= 0)
            ans.push(0);
        else {

            let isHit = false;
            for (let i = 0; i < lamps.length; i++) {
                if (hit(lamps[i], f)) {
                    ans.push(1);
                    isHit = true;
                    break;
                }
            }
            if (!isHit) {
                ans.push(0);
            }
        }

        let turnOffALamp = false;
        let lampsToTurnOff = [];
        const neighbors = getNeighbors(f, N);
        for (let j = 0; j < neighbors.length; j++) {
            for (let i = 0; i < lamps.length; i++) {
                if (isEqual(lamps[i], neighbors[j])) {
                    turnOffALamp = true;
                    lampsToTurnOff.push(i);
                }
            }
        }
        for (let i = 0; i < lamps.length; i++) {
            if (isEqual(f, lamps[i])) {
                turnOffALamp = true;
                lampsToTurnOff.push(i);
                break;
            }
        }
        if (turnOffALamp) {
            while (lampsToTurnOff.length > 0) {
                lamps.splice(lampsToTurnOff[0], 1);
                lampsToTurnOff.splice(0, 1);
            }
        }

        queries.splice(0, 1);
    }
    return ans;
}

/**
 * Checks if two numbers are equal
 * @param {number[]} a 
 * @param {number} b 
 */
function isEqual(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}

/**
 * Get neighbors
 * @param {number[]} pos 
 * @param {number} N 
 */
function getNeighbors(pos, N) {
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

    const neighbors = [];
    for (let i = 0; i < dirs.length; i++) {
        const ps = [dirs[i][0] + pos[0], dirs[i][1] + pos[1]];
        if (isInGrid(N, ps)) {
            neighbors.push(ps);
        }
    }
    return neighbors;
}

/**
 * Validates if pos is in Grid
 * @param {number} N 
 * @param {number[]} pos 
 */
function isInGrid(N, pos) {
    return 0 <= pos[0] && pos[0] < N && 0 <= pos[1] && pos[1] < N;
}

/**
 * Hit target
 * @param {number[]} a Hit
 * @param {number[]} b 
 */
function hit(a, b) {
    const slope = getSlope(a, b);
    if (slope === null || slope === 0 || slope === 1 || slope === -1)
        return true;
    else
        return false;
}

/**
 * Slope
 * @param {number[]} a 
 * @param {number[]} b 
 */
function getSlope(a, b) {
    if (b[0] - a[0] === 0) return null;
    return (b[1] - a[1]) / (b[0] - a[0]);
}

console.log(gridIllumination(5, [[0, 0], [4, 4]], [[1, 1], [1, 0]]));
console.log(gridIllumination(5, [[0, 0], [4, 4]], [[1, 1], [1, 1]]));
console.log(gridIllumination(5, [[0, 0], [0, 4]], [[0, 4], [0, 1], [1, 4]]));
console.log(gridIllumination(5, [[0, 0], [1, 0]], [[1, 1], [1, 1]]));
console.log(gridIllumination(10,
    [[3, 9], [3, 6], [8, 3], [5, 3], [8, 1], [1, 3], [5, 9], [4, 2]],
    [[1, 9], [4, 9], [7, 1], [6, 9]]));