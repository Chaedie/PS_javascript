function solution(numbers) {
    let set = new Set();
    
    for (let p1 = 0; p1 < numbers.length; p1++) {
        for (let p2 = p1 + 1; p2 < numbers.length; p2++) {
            set.add(numbers[p1] + numbers[p2]);
        }
    }
    
    let result = [];
    for (let num of set) {
        result.push(num);
    }
    
    return result.sort((a, b) => a - b);   
}