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

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  size() {
    return this.rear - this.front;
  }

  peek() {
    return this.queue[this.front];
  }
}
//* 인풋 - 커스텀
console.log(sol());

//* 시스템
function sol() {
  const n = parseInt(input[0]);
  let queue = new Queue();

  for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
  }

  while (queue.size() !== 1) {
    queue.dequeue();
    queue.enqueue(queue.dequeue());
  }

  return queue.peek();
}
