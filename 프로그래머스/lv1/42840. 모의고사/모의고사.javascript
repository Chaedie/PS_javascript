function solution(answers) {
    const method2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const method3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const arr1 = new Array(answers.length).fill(0).map((x, i) => x = (i % 5) + 1);
    const arr2 = new Array(answers.length).fill(0).map((x, i) => x = method2[i % 8])
    const arr3 = new Array(answers.length).fill(0).map((x, i) => x = method3[i % 10] )
    
    const result = [];
    result.push([1, answers.filter((x, i) => x === arr1[i]).length])
    result.push([2, answers.filter((x, i) => x === arr2[i]).length])
    result.push([3, answers.filter((x, i) => x === arr3[i]).length])
    
    const maxScore = Math.max(result[0][1], result[1][1], result[2][1]);
    
    return result.filter((x, i) => x[1] === maxScore).map((x) => x[0])
}