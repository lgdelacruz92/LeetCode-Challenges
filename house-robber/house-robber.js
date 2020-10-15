function houseRobber(a) {
    function robber(a, f) {
        if (a.length === 0) return 0;
        if (a.length === 1) return f ? 0: a[0];

        const option1 = (f ? a[0] : 0)  + robber(a.slice(2), f);
        const option2 = robber(a.slice(1), f);
        return Math.max(option1, option2);
    }
    
    return Math.max(robber(a, true), robber(a, false));
}

console.log(houseRobber([2,3,2]))
console.log(houseRobber([1,2,3,1]))