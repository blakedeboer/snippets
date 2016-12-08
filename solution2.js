
const prices = [10, 70, 80, 5, 8, 200, 3, 9];
const badPrices = [-10, -12, -18, -38];

function getMaxProfit(prices) {
	//assume length of prices is at least 2
	let maxProfit = prices[1] - prices[0];
	//let buyPrice = prices[0];
	let minPrice = prices[0];

	for (let i = 1; i < prices.length; i++) {
		let prev = i - 1;
		console.log("analyzing price ", prices[i]);

		if (prices[prev] < minPrice) {
			minPrice = prices[prev];
			console.log("setting minPrice to ", minPrice);
		}

		if (prices[i] - minPrice > maxProfit) {
			maxProfit = prices[i] - minPrice;
			console.log("setting maxProfit to ", maxProfit);
		}
	}

	return maxProfit;
}


const numbers = [1, 2, 6, 5, 9];

// [2*6*5*9, 1*6*5*9, 1*2*5*9, 1*2*6*9, 1*2*6*5]
/*************
use greedy
so what is our A) best answer so far? and B) additional value?


[1, 2, 6, 5, 9]

[2*6*5*9, 1*6*5*9, 1*2*5*9, 1*2*6*9, 1*2*6*5]

When the array is 5, it's the same as if it's 4, but you also multiply the 5th
number to every combination when it's array is 4, but you add a combination
where it's only the previous elements together


[1, 2, 6, 5]

[2*6*5, 1*6*5, 1*2*5, 1*2*6]

When the array is 4, it's the same as if it's 3, but you also multiply the 4th 
number to every combination when it's array is 3, but you add a combination
where it's only the previous elements together

[1, 2, 6]

[2*6, 1*6, 1*2]

When the array is 3, it's the same as if it's 2, but you also multiply the 3rd
number with the other two scenarios

[1, 2]

[2, 1]

When the array is just two, it's the two multiplied together



******************/

let answer = getMaxProfit(badPrices);

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("answer").innerHTML = answer;	
});
