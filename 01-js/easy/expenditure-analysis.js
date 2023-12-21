/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) 
{
	if(transactions.length == 0)
	{
		return []
	}
	let ans = []
	let ispresent = false;
	let a1 = {
		"category":transactions[0]["category"],
		"totalSpent":transactions[0]["price"]
	}
	ans.push(a1)

	for(let i=1;i<transactions.length;i++)
	{
		ispresent = false;
		for(let j=0;j<ans.length;j++)
		{
			if(ans[j]["category"] == transactions[i]["category"])
			{
				ans[j]["totalSpent"] += transactions[i]["price"];
				ispresent = true;
				break;
			}
		}
		if(ispresent == false)
		{
			let a2 = {
				"category" : transactions[i]["category"],
				"totalSpent" : transactions[i]["price"]
			}
			ans.push(a2)
		}
	}

	return ans
}

module.exports = calculateTotalSpentByCategory;
