// 714. Best Time to Buy and Sell Stock with Transaction Fee

var maxProfit = function (prices, fee) {
  let sell = 0;
  let buy = -prices[0];

  // am i assuming I bought a stock already??
  for (let i = 1; i < prices.length; i++) {
    // buy = stock bought yesterday
    // prices[i] = price of stock today
    sell = Math.max(sell, buy + prices[i] - fee);
    buy = Math.max(buy, sell - prices[i]);
  }

  return sell;
};