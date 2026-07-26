// Run this file with: node example.js

const scores = [10, 20, 30];
console.log("start:", scores);

scores[1] = 99;
console.log("after scores[1] = 99:", scores);

scores.push(40);
console.log("after push(40):", scores);

const removed = scores.pop();
console.log("popped value:", removed);
console.log("after pop():", scores);

scores.unshift(1);
console.log("after unshift(1):", scores);

const firstRemoved = scores.shift();
console.log("shifted value:", firstRemoved);
console.log("after shift():", scores);
