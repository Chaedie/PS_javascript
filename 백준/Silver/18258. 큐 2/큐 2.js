//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  push(value) {
    this.queue[this.rear++] = value;
  }

  pop() {
    if (this.queue[this.front] === undefined) {
      return -1;
    }
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  size() {
    return this.rear - this.front;
  }

  empty() {
    if (this.queue[this.front] === undefined) {
      return 1;
    } else {
      return 0;
    }
  }

  peek() {
    if (this.queue[this.front] === undefined) {
      return -1;
    }
    return this.queue[this.front];
  }

  back() {
    if (this.queue[this.front] === undefined) {
      return -1;
    }
    return this.queue[this.rear - 1];
  }
}

//* 인풋 - 커스텀
console.log(sol());

//* 시스템
function sol() {
  const n = parseInt(input[0]);
  let queue = new Queue();
  let answer = '';

  for (let i = 1; i <= n; i++) {
    func = input[i].trim().split(' ');

    switch (func[0]) {
      case 'push':
        queue.push(parseInt(func[1]));
        break;
      case 'pop':
        answer += queue.pop() + '\n';
        break;
      case 'size':
        answer += queue.size() + '\n';
        break;
      case 'empty':
        answer += queue.empty() + '\n';
        break;
      case 'front':
        answer += queue.peek() + '\n';
        break;
      case 'back':
        answer += queue.back() + '\n';
        break;
    }
  }

  return answer;
}
