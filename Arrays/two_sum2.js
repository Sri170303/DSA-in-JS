var twoSum = function(numbers, target) {
    let n = numbers.length;
    let i = 0, j = n-1;
    while (i < j) {
        let sum = numbers[i] + numbers[j];
        if (sum == target) {
            return [i+1, j+1];
        }
        else if (sum < target) {
            i++;
        }
        else {
            j--;
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
