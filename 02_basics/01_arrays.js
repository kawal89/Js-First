//arrays

const myArr = [0,1,2,3]
const myHeros= ["shkltiman","nagraaj","superman","spiderman","batman"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr);
//console.log(myHeros);
//console.log(myArr2);
//console.log(myArr[0]);

//Array Methods
//myArr.push(4);
//console.log(myArr);
//myArr.push(5);
//console.log(myArr);
//myArr.pop();
//console.log(myArr);

//myArr.unshift(9)
//console.log(myArr);
//myArr.shift()
//console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);

//Slice, Splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ",myArr)
const myn2 = myArr.splice(1,3)

console.log("C ",myArr);
console.log(myn2);