
/**
 * Nth statics
 * @param {number[]} arr integers 1 <= arr.length <= 1000
 * @param {number} n integer 1 <= n <= 1000
 */
function findNthSmallest(arr, n) {
    let spacesTaken = []
    let indexOfNthStat = -1;
    let nthStat = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (spacesTaken.length < n) {
            if (nthStat < arr[i]) {
                indexOfNthStat = i;
                nthStat = arr[i];
            }
            spacesTaken.push(arr[i]);
        }
    }

    for (let i = n; i < arr.length; i++) {
        if (arr[i] < nthStat) {
            spacesTaken[indexOfNthStat] = arr[i];
        }
    }

    return Math.max(...spacesTaken);
}

const a = [1, 6, 3, 9, 8, 2];
for (let i = 1; i <= a.length; i++) {
    console.log(findNthSmallest(a, i));
}


