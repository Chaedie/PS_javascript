function solution(s) {
    let nums = [];
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i]) >= 0 && Number(s[i]) <= 9) {
            nums.push(s[i]);
        } else {
            let strI = checkStr(s, i);
            nums.push(strI[1]);
            i += strI[0].length - 1;
        }
    }
    return Number(nums.join(''));
}

function checkStr(s, idx) {
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    let compare = s[idx] + s[idx + 1] + s[idx + 2]; 
    switch (compare) {
        case 'zer': 
            return [nums[0], 0];
        case 'one':
            return [nums[1], 1];
        case 'two':
            return [nums[2], 2];
        case 'thr':
            return [nums[3], 3]
        case 'fou':
            return [nums[4], 4]
        case 'fiv':
            return [nums[5], 5]
        case 'six':
            return [nums[6], 6]
        case 'sev':
            return [nums[7], 7]
        case 'eig':
            return [nums[8], 8]
        case 'nin':
            return [nums[9], 9]
    }
}