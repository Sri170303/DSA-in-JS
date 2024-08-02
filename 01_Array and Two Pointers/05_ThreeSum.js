function threeSum(nums)
{   
    nums.sort(function(a,b){return a-b});
    let target_index=0,i=1,j=nums.length-1;
    let arr = new Array();
    let target_value = -nums[target_index];
    while(target_index<=j-2)
    {   
        while(i<j)
        {
            if(nums[i]+nums[j]==target_value)
            {
                arr.push([nums[target_index],nums[i],nums[j]]);
                i++;
                while(nums[i]==nums[i-1])
                {
                    i++;
                }
                j--;
                while(nums[j]==nums[j+1])
                {
                    j--;
                }
            }
            else if(nums[i]+nums[j]<target_value)
            {
                i++;
                while(nums[i]==nums[i-1])
                {
                    i++;
                }
            }
            else
            {
                j--;
                while(nums[j]==nums[j+1])
                {
                    j--;
                }
            }
        }
        target_index++;
        while(nums[target_index]==nums[target_index-1])
        {
            target_index++;
        }
        i=target_index+1;
        target_value = -nums[target_index];
        j=nums.length-1;
    }
    return arr;   
}

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));