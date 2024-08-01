// https://leetcode.com/problems/reverse-string/

function reverseString(str)
{
    for(let i=0,j=str.length-1; i<j; i++,j--)
    {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
    }
    return str;
}

console.log(reverseString(["H","e","l","l","o"]))
