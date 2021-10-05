//var nums = [2, 3, 6, 6, 5];
var nums = [2, 2, 10, 7, 9, 8];
function getSecondLargest(nums) {
    // Complete the function

    var largest = nums[0];
    var second = nums[0];

    for (var i = 1; i < nums.length; i++) {
        var x = 0;
        if (nums[i] > largest) {
            x = largest;
            largest = nums[i];
            if (x > second) {
                second = x;
            }
        } else if (nums[i] > second && nums[i] < largest) {
            second = nums[i]
        }

    }
    console.log("Largest: " + largest);
    console.log("Second: " + second);
    return second;
}

console.log("Get Second Largest");
console.log(getSecondLargest(nums));
