var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};


var driver = function() {
    var nums = [2, 7, 11, 15];
    var target = 9;
    var indexes = twoSum(nums, target);
    console.log(indexes);
}

driver();