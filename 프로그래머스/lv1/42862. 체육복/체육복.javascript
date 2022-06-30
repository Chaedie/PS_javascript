function solution(n, lost, reserve) {
    // 학생수 2 이상 30이하
    // 도난 1이상 n이하 중복 없음
    // 여벌 1이상 n이하 중복 없음
    // 여벌 => 도난빌려줌 (바로 옆만 가능)
    
    // 1) 배열을 1로 채우고 (0은 0)
    const arr = new Array(n + 1).fill(1);
    arr[0] = 0;    
    
    // 2) 도난 당한 학생은 -1, 여벌 학생은 +1
    reserve.forEach((x) => arr[x]++);
    console.log(arr)
    lost.forEach((x) => arr[x]--);
    console.log(arr)
    
    
    // 3) 체육복 갯수가 0이면 주변 2인 친구한테 하나 가져오기    
    for (let i = 1; i < n + 1; i++) {
        if (arr[i] === 0) {
            askFriend(arr, i);            
        }
    }
    
    console.log(arr)
    return arr.filter((x) => x > 0).length
    
}

function askFriend(arr, i) {
    // 앞 친구가 2개면 빌리기
    if (arr[i - 1] === 2) {
        arr[i - 1]--;
        arr[i]++;
        return 
    }
    // 뒷친구 없으면 나가기
    if (i + 1 === arr.length) {
        return;
    }
    // 뒷친구 있으면서, 2개면 빌리기
    if ( arr[i + 1] === 2) {
        arr[i + 1]--;
        arr[i]++;
        return
    }
    // 아니면 나가기
    return;
}