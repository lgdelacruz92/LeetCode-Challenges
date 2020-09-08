var maxLength = function(arr) {
    const max = [0];
    dfs(arr, {}, max);
    return max[0];
};

function dfs(arr, memo, max) {
    if (arr.length === 0) {
        return [];
    }
    if (arr.length === 1) {
        if (isUniqueChars(arr[0])) {
            memo[arr[0]] = arr;
            if (max[0] < arr[0].length)
                max[0] = arr[0].length;
            return memo[arr[0]];
        } else {
            return [];
        }
    }
    if (arr.length === 2) {
        if (isUniqueChars(arr[0] + arr[1])) {
            memo[arr[0] + arr[1]] = arr;
            const key = arr.join('');
            if (max[0] < key.length)
                max[0] = key.length;
            return memo[arr[0] + arr[1]];
        } else {
            if (isUniqueChars(arr[0]) && isUniqueChars(arr[1])) {
                if (arr[0].length > arr[1].length) {
                    memo[arr[0]] = [arr[0]];
                    if (max[0] < arr[0].length)
                        max[0] = arr[0].length;
                    return memo[arr[0]];
                } else {
                    memo[arr[1]] = [arr[1]];
                    if (max[0] < arr[1].length)
                        max[0] = arr[1].length;
                    return memo[arr[1]];
                }
            } else if (isUniqueChars(arr[0])) {
                memo[arr[0]] = [arr[0]];
                if (max[0] < arr[0].length)
                    max[0] = arr[0].length;
                return memo[arr[0]];
            } else if (isUniqueChars(arr[1])) {
                memo[arr[1]] = [arr[1]];
                if (max[0] < arr[1].length)
                    max[0] = arr[1].length;
                return memo[arr[1]];
            } else {
                return [];
            }
        }
    }

    if (memo[arr.join('')]) {
        // console.log(key1);
        return memo[arr.join('')];
    }

    const allarr = arr.reduce((t, n) => t + n);
    if (isUniqueChars(allarr)) {
        if (max[0] < allarr.length)
            max[0] = allarr.length;
        memo[allarr] = arr;
        return memo[allarr];
    }

    let arrs = [];
    for (let i = 0; i < arr.length; i++) {
        const newarr = arr.slice(0,i).concat(arr.slice(i+1))
        const r = dfs(newarr, memo, max);
        if (sumStringArr(r) > sumStringArr(arrs))
            arrs = r;
    }
    memo[arrs.join('')] = arrs;
    if (max[0] < arrs.join('').length)
        max[0] = arrs.join('').length;
    return arrs;
}

function sumStringArr(sa) {
    if (sa.length === 0) return 0;
    return sa.reduce((t, a) => t.length + a.length);
}

function isUniqueChars(s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) return false;
        map[s[i]] = true;
    }
    return true;
}

// console.log(maxLength(['un', 'iq', 'ue']))
// console.log(maxLength(["cha", "r", "act", "ers"]));
console.log(maxLength(["abcdefghijklmnopqrstuvwxyz"]));
// console.log(maxLength(["a","b","c","d"]));
console.log(maxLength(["ab","ba","cd","dc","ef","fe","gh","hg","ij","ji","kl","lk","mn","nm","op","po"]));
// console.log(maxLength(["yy","bkhwmpbiisbldzknpm"]));
// console.log(maxLength(["abc","def","bp","dq","eg","fh"]));