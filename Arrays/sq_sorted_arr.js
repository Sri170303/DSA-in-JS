var sortedSquares = function(nums) {

    let n = nums.length;
    let i = 0, j = n-1;

    let sq_arr = new Array(n);

    let k = 0;

    while (i  <= j) {
        let sq1 = nums[i]*nums[i];
        let sq2 = nums[j]*nums[j];
        if (sq1 >= sq2) {
            sq_arr[n-1-k] = sq1;
            i++;
        }
        else {
            sq_arr[n-1-k] = sq2;
            j--;
        }
        k++;
    }

    return sq_arr;
};

var driver = function() {
    var nums = [-4,-1,0,3,10];

    var sq_arr = sortedSquares(nums);

    console.log(sq_arr);
}

driver();
