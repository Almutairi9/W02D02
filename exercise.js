// function sum() {
// 	return 5 + 2;
// }
​
// function print(lama) {
// 	console.log(lama());
// }
​
// print(sum);
​
// const colors = ['blue', 'red', 'pink', 'white'];
​
// const newArr = colors.find(function (item, index) {
// 	return item === 'white';
// });
​
// console.log(newArr);
​
// const newArr = colors.reduce(function (acc, item, index) {
// 	acc += item + ' ,';
​
// 	return acc;
// });
​
// console.log(newArr);
​
//forEach map filter reduce sort find ...etc
​
// console.log(
// 	colors.forEach(function (item, index) {
// 		return item;
// 	}),
// );
​
// const newArr = colors.forEach(function (item, index) {
// 	return item;
// });
​
// const newArr = colors.map(function (item) {
// 	return item;
// });
​
// console.log(
// 	colors.map(function (sultan, noof) {
// 		return sultan + '!';
// 	}),
// );
​
// console.log(newArr);
​
// let num1 = 5;
​
// let num2 = num1++;
​
// console.log('num1= ', num1);
// console.log('num2= ', num2);
​
// const arr1 = [1, 2, 3, 4];
​
// const arr2 = arr1.forEach((item) => item);
​
// console.log('arr1= ', arr1);
// console.log('arr2= ', arr2);
​
//  [1,2,3]   => [2,3,4]
​
// const addOne = function (array) {
// 	let res = array.map((element) => {
// 		return element + 1;
// 	});
​
// 	return res;
// };
​
// const sultan = 'age';
​
// let obj = {
// 	name: 'mohammmed',
// 	age: 25,
// };
​
// localStorage.setItem('firstname', 'mohammed');
​
// localStorage.setItem('obj', JSON.stringify(obj));
​
// console.log(JSON.parse(localStorage.getItem('obj')).name);
​
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
​
// const arr3 = Object.entries(obj);
// console.log(arr3[1][1]);
​
// let obj2 = obj;
​
// obj2.name = 'lama';
​
// obj2['country'] = 'Saudi arabia';
​
// console.log(obj);
// console.log(obj2);
​
// dot notation
// console.log(obj.sultan);
// console.log(obj.name);
​
// bracket notation
//
// console.log(obj['sultan']);
// console.log(obj['name']);
​
// const sum = (num) => num + num;
​
// console.log(sum(2));
​
// const arr1 = [1, 2, 3];
​
// console.log('Max ', Math.max(...arr1));
// console.log('Max2 = ', Math.max(1, 2, 3));
​
// const obj1 = { name: 'sds', age: 5 };
​
// const obj2 = { ...obj1 };
​
//spread operator
// const arr2 = [...arr1];
​
// console.log(...arr1);
​
// arr2[0] = 0;
​
// console.log(arr1);
// console.log(arr2);
​
let num1 = 5;
// let num2;
​
// if (num1 > 10) {
// 	num2 = 10;
// } else {
// 	num2 = 20;
// }
​
// ternary operator
// let num2 = num1 > 10 ? 10 : 20;
​
// console.log(num2);
​
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => {
	return b - a;
});
console.log(numbers);
​
var items = [
	{ name: 'Edward', value: 21 },
	{ name: 'Sharpe', value: 37 },
	{ name: 'And', value: 45 },
	{ name: 'The', value: -12 },
	{ name: 'Magnetic', value: 13 },
	{ name: 'Zeros', value: 37 },
];
​
//sort by value
// console.log(
// 	items.sort(function (a, b) {
// 		return b.value - a['value'];
// 	}),
// );
​
// sort by name
console.log(
	items.sort(function (a, b) {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
​
		// names must be equal
		return 0;
	}),
);
​
console.log(items.sort((a, b) => a.value - b.value));