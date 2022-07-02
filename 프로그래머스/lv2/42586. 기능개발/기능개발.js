function solution(progresses, speeds) {
    // 100 되면 pop
    // 하루 한번 speed 만큼 progresses 올라감
    // 배포마다 몇개가 배포되는지 return 
   
    const arr = progresses.map((x, i) => Math.ceil((100 - x)/speeds[i]));
    const result = [];
    let count = 1;
    let maxDay = 0;
    console.log(arr)
    arr.forEach((x, i) => {
        if (x > maxDay) {
            maxDay = x;
        }
        if (i === arr.length - 1) {
            result.push(count);
        } else if (arr[i + 1] > maxDay) {
            result.push(count);
            count = 1;
            maxDay = 0;
        } else {
            count++;
        }
    })

    return result
        
    
}