function solution(n, arr1, arr2) {
    const arrOr = []
    for (let i = 0; i < n; i++) {
        arrOr[i] = arr1[i] | arr2[i];
    }
    const answer = arrOr
        .map((el) => el.toString(2).padStart(n, 0))
        .map((el) => el.replace(/1/g, '#').replace(/0/g, ' '));
    
    return answer
}