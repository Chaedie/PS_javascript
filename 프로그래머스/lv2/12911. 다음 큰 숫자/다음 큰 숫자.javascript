function solution(n) {
    let next = n;
    const nCountOne = n.toString(2).split('').filter((x) => x === '1').length;
    while (true) {
        next++;
        if (next.toString(2).split('').filter((x) => x === '1').length === nCountOne) {
            return next;
        }
    }
}