function solution(N, stages) {
    // 1) 각 스테이지별로 실패한 사람의 수 카운트
    const failCount = [];
    for (let i = 1; i <= N; i++) {
        failCount[i] = stages.filter((stage) =>  i === stage).length;
    }
    
    // 2) 각 스테이지별로 실패율 계산 ([stage, 실패율])
    const failRate = [];
    for (let i = 1; i <= N; i++) {
        failRate[i] = [i, failCount[i] / stages.filter((stage) => stage >= i).length];
    }
    console.log(failRate);
    
    // 3) 실패율이 높은 순서로 인덱스 뽑기
    return failRate.sort((a, b) => b[1] - a[1]).map((el) => el[0]).filter((el) => el > 0);
}