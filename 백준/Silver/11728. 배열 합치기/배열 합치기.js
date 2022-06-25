//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

//* 인풋 (커스텀)
const n = +input[0][0];
const m = +input[0][1];
const numsA = input[1].split(' ').map((num) => +num);
const numsB = input[2].split(' ').map((num) => +num);

//* 함수 콜 (고정)
const answer = solution(numsA, numsB);
console.log(answer.trim());

//* 로직함수
function solution(numsA, numsB) {
  let p1 = 0;
  let p2 = 0;
  let result = [];
  while (p1 <= numsA.length || p2 <= numsB.length) {
    if (p1 >= numsA.length && p2 >= numsB.length) {
      break;
    }
    if (p1 >= numsA.length) {
      result.push(numsB[p2]);
      p2++;
      continue;
    }
    if (p2 >= numsB.length) {
      result.push(numsA[p1]);
      p1++;
      continue;
    }

    if (numsA[p1] < numsB[p2]) {
      result.push(numsA[p1]);
      p1++;
    } else {
      result.push(numsB[p2]);
      p2++;
    }
  }
  return result.join(' ');
}
