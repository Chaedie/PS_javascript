function solution(n) {
    let soobacs = '';
    
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            soobacs += '수'
        } else {
            soobacs += '박'
        }        
    }
    
    return soobacs;
}