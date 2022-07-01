function solution(n) {
    // 1) 부분합인거 같은데 일단 투포인터로 O(n!)로 해보자.
    let sum = 1;
    let count = 0;
    let p1 = 1;
    let p2 = p1 + 1
    //2) 투포인터 시간초과 -> 부분합 ㄱㄱ
    while (p1 < n) {
        
        while (p2 < n) {
            sum += p2;
            if (n === sum) {
                count++;
                break;
            }
            if (n < sum) {
                break;
            }
            p2++;
        }
        sum -= p2;
        sum -= p1;
        p1++;
    }
    
    // n 하나 있는 케이스
    return count + 1
}