// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

function TwoSumII(numbers, target) {
    for(let i=0,j=numbers.length; i<=j;)
    {
        if(numbers[i]+numbers[j]==target)
        {
            return [i+1,j+1];
        }
        else if(numbers[i]+numbers[j]<target)
        {
            i++;
        }
        else
        {
            j--;
        }
    }
}

console.log(TwoSumII([2,3,4,5,6,7],9));
console.log(TwoSumII([-22,100,200,344],300));