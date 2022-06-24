function solution(num) {
    
    if (num === 1) {
        return 0;
    }

    let count = 0;
    while (num !== 1){
        if (count === 500) {
            return -1;
        }
        if (num % 2 === 0) {
            num = num / 2
            count++;
        } else if (num % 2 === 1) {
            num = num * 3 + 1
            count++;
        }
    }
    
    return count;
    
}