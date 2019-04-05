class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const item = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return item;
  }
  peek() {
    return this.items[this.lowestCount];
  }

  clear() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }
}
module.exports = Queue;

function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
      eliminatedList.push(queue.dequeue());
  }
  return {
      eliminated: eliminatedList,
      winner: queue.dequeue()
  }
}

const names = ['Bryan', 'Caitlin', 'Jeremy', 'Mom', 'Sally', 'Josh', 'Dad']
const result = hotPotato(names, 513)

// result.eliminated.forEach(person => {
//     console.log(`${person} was eliminated from the game`)
// })
// console.log(`${result.winner} won!`)