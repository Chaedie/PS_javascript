function solution(nums) {
    let selectMap = new Map();
    let len = nums.length;
    let halfLen = nums.length / 2;
    let count = 0;
    
    for (let i = 0; i < len; i++) {
        if (count === halfLen) {
            return count;
        }
        if (!selectMap.has(nums[i])) {
            selectMap.set(nums[i], 1);
            count++
        }
    }
    
    return count;
}