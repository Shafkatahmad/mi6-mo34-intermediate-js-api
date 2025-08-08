let a = 5;
function add(num1, num2) {
  const result = num1 + num2 + a;
  return result;
}

// can not access "result" because it is in 
// console.log(result);

// can access the variable "a" because it is declared in Global Execution Context
console.log(a);
const sum = add(4, 5);
console.log(sum);