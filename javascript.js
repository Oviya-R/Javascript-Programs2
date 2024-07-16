//array creation and initialization
let arr = [1,2,3,4,5]
console.log(arr.length);

//array Manipulation-add elements
let fruits1 = ["Apple","Orange","Banana","kiwi","jackfruit"];
fruits1.push("Mango");
console.log(fruits1);

let fruits2 = ["Apple","Orange","Banana","kiwi","jackfruit"];
fruits2.unshift("Mango");
console.log(fruits2);

//Removing elements
let fruits3 = ["Apple","Orange","Banana","kiwi","jackfruit"];
fruits3.pop();
console.log(fruits3);

let fruits4 = ["Apple","Orange","Banana","kiwi","jackfruit"];
fruits4.shift();
console.log(fruits4);

//Array searching
let num=[1,2,3,4,5,6,7]
console.log(num.indexOf(5));

let birds=["Parrot","Peocock","Swan"];
console.log(birds.includes("Swan"));

//Array sorting
let value=[4,6,8,2,9,0,4,2,6,7,8];
value.sort();
console.log(value);

//Array finding Maximum and Minimum
let numbers = [3,4,5,6,2,7,8,3,9]
numbers.sort();
console.log(numbers[numbers.length-1]);
console.log(numbers[0]);

//Flatenning Arrays
let vegetables=["Potato","Tomato","Carrot",["Bottlegaurd","bittergaurd"]];
console.log(vegetables.flat());

//Array Spreading
let classA=[2,3,4,5,6,7];
let classB=[7,5,3,6,8,3,9]
console.log(...classA,...classB);








