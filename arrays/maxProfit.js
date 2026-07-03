function maxProfit(prices) {
    let maxProfit = 0;
    let min = prices[0]

    for (let i = 0; i < prices.length; i++) {

        if (prices[i] < min) min=prices[i]
        let profit=prices[i]-min
        maxProfit=Math.max(maxProfit,profit)
        
    }
    return maxProfit;
}

console.log(maxProfit([2,5,7,2,8,6,3,8]))