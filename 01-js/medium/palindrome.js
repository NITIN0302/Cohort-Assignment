/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) 
{
	str = str.toLowerCase()
        let str1 = ""
        for(let i=0;i<str.length;i++)
        {
            if(str.charAt(i)>="a" && str.charAt(i) <= "z")
            {
                str1 = str1 + str.charAt(i);
            }
        }
        let s = 0;
        let e = str1.length - 1
        while(s<=e)
                {
                        if(str1.charAt(s) != str1.charAt(e))
                                {

                                        return false;
                                }
                                s++;
                                e--;
                }
                return true;
}

module.exports = isPalindrome;
