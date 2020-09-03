const WEIGHT_LIMIT = 5;
const values = [3, 9, 12, 8]
const weights = [1, 3, 4, 2]

/**
 * Recursive solution
 * @param {number} pos 
 * @param {number[]} selected 
 */
function knapsack(pos, selected) {
    let totalValue = 0; 
    let totalWeight = 0;

    for (let i = 0; i < selected.length; i++) {
        totalValue += value[selected[i]];
        totalWeight += weight[selected[i]];
    }

    if (totalWeight > WEIGHT_LIMIT) {
        return [0, 0];
    }

    if (pos >= value.length) {
        return [totalValue, totalWeight];
    }

    const selectedCp = [...selected];
    selected.push(pos)
    let ans1 = knapsack(pos + 1, selected);
    let ans2 = knapsack(pos + 1, selectedCp);
    
    if (ans1[0] > ans2[0]) return ans1;
    return ans2;
}

/**
 * Knapsack Dynamic programming version
 * @param {number[]} value Array of values
 * @param {number[]} weight Array of weights
 * @param {number} limit Weight limit
 */
function knapsackDp(values, weights, limit) {

    // Make dp table
    const dp = [];
    for (let i = 0; i <= values.length; i++) {
        const row = [];
        for (let j = 0; j <= limit; j++) {
            row.push(0);
        }
        dp.push(row);
    }

    // Fill dp table
    for (let item = 1; item <= values.length; item++) {
        for (let weight_limit = 0; weight_limit <= limit; weight_limit++) {
            const value = values[item - 1];
            const weight = weights[item - 1];

            const currentMaxValue = dp[item - 1][weight_limit];
            // Can I fit weight in the weight limit?
            if (weight <= weight_limit) {
                if (weight < weight_limit) {
                    const maxPreviousWeight = weight_limit - weight;
                    const maxPreviousValue = dp[item - 1][maxPreviousWeight];
                    if (maxPreviousValue + value > currentMaxValue) {
                        dp[item][weight_limit] = maxPreviousValue + value;
                    } else {
                        dp[item][weight_limit] = currentMaxValue;
                    }
                } else {
                    if (value > currentMaxValue) {
                        dp[item][weight_limit] = value;
                    } else {
                        dp[item][weight_limit] = currentMaxValue;
                    }
                }
            } else {
                dp[item][weight_limit] = currentMaxValue;
            }
        }
    }
    return dp[values.length][limit];
}

// console.log(knapsackDp(values, weights, WEIGHT_LIMIT));
// console.log(knapsackDp([1, 5, 11, 5], [1, 5, 11, 5], 11))
console.log(knapsackDp([2, 2, 3, 5], [2, 2, 3, 5], 6))