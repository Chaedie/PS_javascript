function solution(n, t, m, p) {
    //n진법, t개 구하기, 인원 m (반복주기), 튜브의 순서 p
    let total = '';
    for(let i = 0; total.length < m * t + p; i++) {
        total += i.toString(n);
    }
    console.log(total)
    
    return total.split('').filter((x, i) => {
        if (i < m * t) {
            return i % m === p - 1
        }}).join('').toUpperCase()
}