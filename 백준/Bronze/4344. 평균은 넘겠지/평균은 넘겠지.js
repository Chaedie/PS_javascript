//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
const n = Number(input[0]);

let inputs = new Array();
for (let i = 0; i < n; i++) {
  inputs = input[i + 1].split(' ').map((num) => Number(num));
  console.log(solution(inputs));
}

//* 시스템
function solution(inputs) {
  let n = inputs[0];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += inputs[i + 1];
  }

  let avg = sum / n;

  let countUpperAvg = 0;
  for (let i = 0; i < n; i++) {
    if (inputs[i + 1] > avg) {
      countUpperAvg++;
    }
  }

  return ((countUpperAvg / n) * 100).toFixed(3) + '%';
}
