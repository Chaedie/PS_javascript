function solution(d, budget) {
    d.sort((a, b) => a - b);
    console.log(d)
    
    
    let money = budget;
    let count = 0;
    for(let i = 0; i < d.length; i++) {
        if (money - d[i] >= 0) {
            money = money - d[i];
            count++;
            console.log(money, d[i], count)
        } else {
            break;
        }
    }
    
    return count
}