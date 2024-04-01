const foo = () => 'bar';

const sum = 1 + 1;
const difference = 10 - 1;

const add = (parameter1, parameter2) => parameter1 + parameter2;
console.log(add(2, 3));

const twoAdder = x => x + 2;

const sumFunction = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
};

console.log(sumFunction(1, 2));

const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2);
console.log(squares);

const overdueTodoItems = [
  {title: 'Task 1'},
  {title: 'Task 2'},
  {title: 'Task 3'}
];

const finishedItems = overdueTodoItems.map(item => {
  item.className = "complete";
  return item;
});

const header = document.createElement('h1');
header.innerText = `You finished ${finishedItems.length} items!`;
document.body.appendChild(header);

const divide = (x, y) => x / y;
console.log(divide(2000, 100));

const square = x => x * x;
console.log(square(5));
