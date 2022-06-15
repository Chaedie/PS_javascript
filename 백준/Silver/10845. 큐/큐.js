//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

class Queue {
  constructor() {
    this.queue = [];
    this.start = 0;
    this.end = 0;
  }

  push(value) {
    this.queue[this.end] = value;
    this.end++;
  }

  pop() {
    if (this.empty() === 1) {
      return -1;
    }
    const value = this.queue[this.start];
    delete this.queue[this.start];
    this.start++;
    return value;
  }

  size() {
    return this.end - this.start;
  }

  empty() {
    if (this.size() === 0) {
      return 1;
    }
    return 0;
  }

  front() {
    if (this.empty() === 1) {
      return -1;
    }
    return this.queue[this.start];
  }

  back() {
    if (this.empty() === 1) {
      return -1;
    }
    return this.queue[this.end - 1];
  }
}

//* 인풋 - 커스텀
console.log(sol());

//* 시스템
function sol() {
  let answer = '';
  const n = parseInt(input[0]);
  let commands = '';
  let queue = new Queue();

  for (let i = 1; i <= n; i++) {
    commands = input[i].split(' ');

    switch (commands[0].trim()) {
      case 'push':
        queue.push(parseInt(commands[1]));
        break;
      case 'front':
        answer += queue.front() + '\n';
        break;
      case 'back':
        answer += queue.back() + '\n';
        break;
      case 'size':
        answer += queue.size() + '\n';
        break;
      case 'empty':
        answer += queue.empty() + '\n';
        break;
      case 'pop':
        answer += queue.pop() + '\n';
        break;

      default:
        break;
    }
  }
  return answer;
}
