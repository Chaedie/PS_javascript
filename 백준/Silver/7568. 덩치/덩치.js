//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
let [n, ...big] = input;
n = +n;
big = big.map((x) => x.split(' ').map((x) => +x));
//* 함수 콜 (고정)
let answer = solution(n, big);
console.log(answer === 'number' ? answer : answer.trim());
//* 로직함수
function solution(n, big) {
 
  for (let i = 0; i < n; i++) {
    let rank = 1;
    for (let j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }
      if (big[j][0] > big[i][0] && big[j][1] > big[i][1]) {
        rank++;
      }
    }
    big[i].push(rank);
  }

  let answer = '';
  big.forEach((x) => (answer += `${x[2]} `));
  return answer;
}
