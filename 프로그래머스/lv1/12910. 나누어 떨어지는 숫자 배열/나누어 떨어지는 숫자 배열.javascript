function solution(arr, divisor) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            result.push(arr[i]);
        }
    }
    
    return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}