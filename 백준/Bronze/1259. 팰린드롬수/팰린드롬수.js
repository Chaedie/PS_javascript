//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

//* 인풋 (커스텀)
inputNums = input.map((num) => +num);
//* 함수 콜 (고정)
let answer = solution(inputNums);
answer = typeof answer === 'number' ? answer : answer.trim();
console.log(answer);

//* 로직함수
function solution(inputNums) {
  const result = [];

  for (let i = 0; i < inputNums.length; i++) {
    if (inputNums[i] === 0) {
      break;
    }
    isPalindrome(inputNums[i]) ? result.push('yes') : result.push('no');
  }

  return result.join('\n');
}

function isPalindrome(num) {
  let str = num + '';
  let isTrue = true;

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      isTrue = false;
    }
  }

  return isTrue;
}
