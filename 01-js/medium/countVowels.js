/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    	let vowel = "aeiouAEIOU"
	let count = 0;
	let vowelstr = vowel.split("")
	for(let i=0;i<str.length;i++)
	{
		for(let j=0;j<vowelstr.length;j++)
		{
			if(vowelstr[j] == str.charAt(i))
				{
					count++;
				}
		}
	}
	return count 
}

module.exports = countVowels;
