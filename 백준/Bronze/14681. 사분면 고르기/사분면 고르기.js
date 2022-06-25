const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  const a = +input[0];
  const b = +input[1];
  //* 함수 콜 (고정)
  const answer = solution(a, b);
  console.log(answer);

  //* 로직함수
  function solution(a, b) {
    if (a > 0 && b > 0) {
      return '1';
    }
    if (a > 0 && b < 0) {
      return '4';
    }
    if (a < 0 && b > 0) {
      return '2';
    }
    if (a < 0 && b < 0) {
      return '3';
    }
    return 0;
  }

  process.exit();
});