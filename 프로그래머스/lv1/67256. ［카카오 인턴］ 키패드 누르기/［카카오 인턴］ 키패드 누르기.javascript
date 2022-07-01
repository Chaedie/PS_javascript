function solution(numbers, hand) {
    
    const answer = {
        powerHand : hand === 'left' ? 'L' : 'R',
        result : [],
        preLt : 10,
        preRt : 11,
    }
    
//     numbers.map((x) => {
//         if (x === '*') {
//             x = 10;
//         }
//     })
   
    
    
    let [l, r] = ['L', 'R'];
    for (let num of numbers) {
        // 147 왼손
        if ([1, 4, 7].includes(num)) {
            answer.result.push(l);
            answer.preLt = num;
            continue;
        // 369 오른손
        } else if ([3, 6, 9].includes(num)) {
            answer.result.push(r);
            answer.preRt = num;
            continue;
        // 2580 checkNear(); 
        } else {
            // 거리 같으면 오른손잡이-오른손 왼잡-왼
            let nearHand = checkNear(num, answer);
            answer.result.push(nearHand)
            if (nearHand === l) {
                answer.preLt = num;
            } else {
                answer.preRt = num;
            }
        }
    }    

    return answer.result.join('');
}

function checkNear(target, answer) {
    const pos = [[3, 1], 
        [0, 0], [0, 1], [0, 2],
        [1, 0], [1, 1], [1, 2],
        [2, 0], [2, 1], [2, 2], 
        [3, 0],         [3, 2]]; // * === 10, # === 11
    // preLt와 숫자간의 거리 재기 distLt
    // preRt와 숫자간의 거리 재기 distRt
    
    // if (target === '*') {
    //     target = 10;
    // }
    // if (target === '#') {
    //     target = 11;
    // }
    
    let x = Math.abs(pos[answer.preLt][0] - pos[target][0]);
    let y = Math.abs(pos[answer.preLt][1] - pos[target][1]);
    let distLt = x + y;
    
    x = Math.abs(pos[answer.preRt][0] - pos[target][0]);
    y = Math.abs(pos[answer.preRt][1] - pos[target][1]);
    let distRt = x + y;
    
    // 만약 거리가 같다면 return answer.hand
    if (distLt === distRt) {
        return answer.powerHand;
    }
    
    // 두 거리 중 작은거 return minDistance
    return Math.min(distLt, distRt) === distLt ? 'L' : 'R';
    
}