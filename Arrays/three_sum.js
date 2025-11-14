var threeSum = function(nums) {

    let n = nums.length;
    let result = new Array();
    nums.sort((a, b) => {return a-b});
    // console.log(nums);

    let i = 0;
    while (i < n-2) {
        let target = -nums[i];
        let j = i+1, k = n-1;
        while (j < k) {
            let sum = nums[j] + nums[k];
            if (sum == target) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                while (j < k && nums[j] == nums[j-1]) {
                    j++;
                }
                k--;
                while (j < k && nums[k] == nums[k+1]) {
                    k--;
                }

            }
            else if (sum < target) {
                j++;
                while (j < k && nums[j] == nums[j-1]) {
                    j++;
                }
            }
            else {
                k--;
                while (j < k && nums[k] == nums[k+1]) {
                    k--;
                }
            }
        }

        i++;
        while (i < n-2 && nums[i] == nums[i-1]) {
            i++;
        }
    }

    return result;
};

var driver = function() {
    var nums = [-1,0,1,2,-1,-4];
    var triplets = threeSum(nums);
    console.log(triplets);
}

driver();