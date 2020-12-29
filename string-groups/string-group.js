function test(nums, queries, w) {
    const sol = [];
    while (queries.length > 0) {
        const q = queries[0];
        let curCount = 0;
        for (let i = 0; i <= nums.length - w; i++) {
            for (let j = i; j < i+w; j++) {
                if (q === nums[j]) {
                    curCount++;
                    break;
                }
            }
        }
        
        queries.splice(0,1);
        sol.push(curCount);
    }
    return sol;
}

console.log(test([2,1,2,3,4], [2,1], 3))