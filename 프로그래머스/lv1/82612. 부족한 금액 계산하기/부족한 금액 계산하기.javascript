function solution(price, money, count) {
    var answer = 0;
    let priceXcount = price;
    
    for (let i = 1; i <= count; i++ ) {
        priceXcount = price * i;
        money -= priceXcount;
    }
    if (money < 0) {
        return Math.abs(money);
    }

    return answer;
}