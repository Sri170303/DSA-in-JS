function squareOfSortedArray(nums) {
    let i = 0;
    let j= nums.length-1;
    let arr = new Array();
    let k  = nums.length-1;
    while(i<=j)
    {   
        if(nums[i]*nums[i]<nums[j]*nums[j])
            {
                arr[k]=(nums[j]*nums[j]);
                k--;
                j--;
            }
        else if(nums[i]*nums[i]==nums[j]*nums[j])
            {   
                
                if(i==j)
                {
                    arr[k]=(nums[i]*nums[i]);
                    return arr;      
                }
                else
                {
                    arr[k]=(nums[i]*nums[i]);
                    k--;
                    arr[k]=(nums[i]*nums[i]);
                    k--;
                    i++;
                    j--;
                }
            }
        else
            {
                arr[k]=(nums[i]*nums[i]);
                k--;
                i++;
            }
    }
    return arr;       
}

console.log(squareOfSortedArray([-10000,-9999,-7,-5,0,0,10000]));