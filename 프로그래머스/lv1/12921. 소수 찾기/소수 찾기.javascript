function solution(n) {
    const primeNums = new Array(n + 1).fill(true);
    
    for (let i = 2; i <= n; i++) {
        if (primeNums[i] === false) {
            continue;
        }
        for (let j = 2 * i; j <= n; j += i) {
            primeNums[j] = false;
        }
        // if (isPrime(i)) {
        //     for(let j = 2 * i; j <= n; j += i) {
        //         primeNums[j] = false;
        //     }
        // } else {
        //     primeNums[i] = false;
        // }
    }
    
    primeNums[0] = false;
    primeNums[1] = false;
    return primeNums.filter((bool) => bool === true).length;
}

// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
    
//     return true;
// }