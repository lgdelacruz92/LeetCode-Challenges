var sumZero = function(n) {
    if (n === 1) return [0];
    let arr = [];
    for (let i = 1; i <= n - 1; i++)
        arr.push(i);
    return arr.concat(-arr.reduce((t, n) => t + n));
};
