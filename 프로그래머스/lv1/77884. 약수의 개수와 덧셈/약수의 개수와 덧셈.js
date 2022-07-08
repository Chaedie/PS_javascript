function solution(left, right) {

    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (getDividableNum(i) % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    return answer;
}

function getDividableNum(num) {
    const arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    
    return arr.length;
}