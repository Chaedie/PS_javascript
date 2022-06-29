//* 메인함수 (백준용 인풋 등 처리)
function main() {
  //* 인풋 (디폴트)
  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  let input = require('fs').readFileSync(filePath);
  if (input.length !== 0) {
    input = input.toString().trim().split('\n');
    //* 인풋 (커스텀)
    const n = +input;
  }

  //* 함수 콜 (고정)
  if (input.length === 0) {
    console.log(solution());
  } else {
    let answer = solution(n);
    answer = typeof answer === 'number' ? answer : answer.trim();
    console.log(answer);
  }
}
main();

//* 로직함수
function solution() {
  let dp = [-1];
  for (let i = 0; i < 10000; i++) {
    dp[i + 1] = d(i + 1);
  }

  let answer = [];
  for (let i = 0; i < 10000; i++) {
    if (dp.indexOf(i + 1) === -1) {
      answer.push(i + 1);
    }
  }

  return answer.join('\n');
}

function d(n) {
  let strN = n + '';
  let answer = n;

  strN.split('').forEach((value, idx) => (answer += +value));

  return Number(answer);
}
