function solution(x) {
    // x % (x의 모든 자릿수의 합) === 0 이면 하샤드 수
    
    let strN = x + '';
    let sum = 0;
    for (let i = 0; i < strN.length; i++) {
        sum += Number(strN[i]);
    }

    return x % sum === 0;
}