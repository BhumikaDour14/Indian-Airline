//let arr=[1,2,4,6,8];
//arr.pop();//remove last element from array
//arr.shift();//remove first elemrnt from arrat and unshift-> add
//arr.splice(2,1,23,24,78);//position of elemnt to add,no.of elements to delect, add elemrnts in the array.
//arr.slice(2);

//LOOPS
//CLASSICAL FOR LOOP
// let b=[34,5,24,89,6,8];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }



//for each loop
// a.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// });



// let object={
//     a:1, b:2, c:3
// }
// //for in loop
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key,element);

//     }
// }


//for of loop
//  for (const value of a) { //in place of value we can write iterator also
//     console.log(value);
//  }



//let square = [2, 5, 7, 9, 11, 13];
//let newArr = [];
// for (let index = 0; index < square.length; index++) {
//     const element = square[index];
//     newArr.push(element**2)
// }

//TO print square we dont have to follow above method
//insted we can (USE OF MAP )
//  let newArr = square.map((e)=>{
//     return e**2
//  })
// console.log(newArr);


//USE OF FILTER
// const geaterThanSeven=(e)=>{
//     if(e>7){
//         return true;
//     }
//     return false;
// }
// console.log(square.filter(geaterThanSeven));


//USE OF REDUCE METHOD
// let arr2 = [1, 2, 3, 4, 5];
// const red = (a, b) => {
//     return a + b
// }
// console.log(arr2.reduce(red));


//QUESTION ON FACTORIAL...
// let a=5;
// let arr2=[];
// for (let i =1;i<=a;i++) {
//    arr2.push(i); //IF WE HAVE TO STORE NUMBER IN ARRAY WE USE [PUSH] 
// }
// console.log(arr2);

// const factorial =(a,b)=>{
//     return a*b
// }
// console.log("Factorial is: "+arr2.reduce(factorial));


//  OR  we can use this method also to store elements in arr
//let a=6
//function factorial(number){
 //let arr= Array.from(Array(number+1).keys())  //in this (keys) is a function, (number+1) becoz we have to print from 1 to n
//console.log(arr.slice(1,)) //her slice(1,) means it start from starting index(given:1) to end of the array.
//let c=arr.slice(1,).reduce((a, b)=> a*b) //it is the shortcut,not nessasary to write return ,it will automatically return it
//return c
//}
//factorial(a)



//main js

//DOM COMMAND
// document.body.firstElementChild
// document.body.firstElementChild.childNodes
// document.body.firstElementChild.children

// console.log("hurre!!")
// let boxes=document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor="blue"

//document.getelementById(redBox).style.backgroundColor="blue"
//document.querySelector(".box").style.backgroundColor = "purple";

