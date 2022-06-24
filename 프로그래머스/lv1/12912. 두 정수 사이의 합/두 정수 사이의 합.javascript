function solution(a, b) {
    let maxNum = a > b ? a : b;
    let minNum = a > b ? b : a;
    let sum = 0;
    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }
    
    return sum;
}