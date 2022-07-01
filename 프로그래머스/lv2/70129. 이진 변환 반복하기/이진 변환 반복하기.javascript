function solution(s) {
    // 이진변환 : 모든 0을 제거, x의 길이를 c라하면 c를 2진법으로 표현한 문자열 로 변경
    // s가 1이 될때까지 이진변환하기, return {이진변환의 횟수, 제거된 0의 갯수}
    const answer = {
        count : 0,
        popedZero : 0,
        s : s,
    }

    while(true) {
        binaryConversion(answer);
        if (answer.s === '1') {
            return [answer.count, answer.popedZero];
        }
    }
    
    return 
}

function binaryConversion(answer) {
    let preLen = answer.s.length;
    answer.s = answer.s.split('').filter((x) => x === '1').join('')
    let proLen = answer.s.length;
    
    answer.count += 1;
    answer.popedZero += (preLen - proLen);
    answer.s = answer.s.length.toString(2);
    
    return;
}