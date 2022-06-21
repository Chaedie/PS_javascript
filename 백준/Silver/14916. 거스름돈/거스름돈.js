//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 메인함수
// const [n, k] = input[0].split(' ').map((num) => parseInt(num));
const n = parseInt(input[0]);

let answer = sol(n);
console.log(answer);
//* 로직함수
function sol(n) {
  let money = n;
  let answer = 0;
  divideByFive = Math.floor(money / 5);

  for (let i = divideByFive; i >= 0; i--) {
    money = money - i * 5;
    answer += i;
    if (money % 2 === 0) {
      answer += money / 2;
      return answer;
    }
    answer = 0;
    money = n;
  }

  return -1;
}
