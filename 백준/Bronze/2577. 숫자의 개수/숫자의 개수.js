//* 시스템
function solution(target) {
  let answer = '';

  for (let i = 0; i < 10; i++) {
    let count = 0;

    for (let j = 0; j < target.length; j++) {
      if (Number(target[j]) === i) {
        count += 1;
      }
    }

    answer += count + '\n';
  }
  return answer;
}

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

//* 인풋 - 커스텀
const input = fs.readFileSync(filePath).toString().split('\n');
// const n = Number(input[0].trim());
// const nums = input[0].split(' ').map((num) => Number(num));

//*아웃풋
console.log(solution(String(input[0] * input[1] * input[2])));
