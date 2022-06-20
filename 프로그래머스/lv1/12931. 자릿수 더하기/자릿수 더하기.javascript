function solution(n)
{
    var answer = 0;
    let strN = n + '';
    for (let i = 0; i < strN.length; i++ ) {
        answer += parseInt(strN[i]);
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(answer)

    return answer;
}