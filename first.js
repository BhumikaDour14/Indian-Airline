// console.log("hello world...")
// console.log("hello bhumika...")
// console.log("code is running...")
// console.log("don't give up ")
// let c = "harry";

// let b = 36;
// let 34c="hello"; this is not allowed variable name does not start with no.

// let z = 5.54;
// let p = true;
// let q = undefined;
// let r = null;
// console.log(b,c,z,p,q,r);
// console.log(typeof b,typeof c,typeof z,typeof p,typeof q,typeof r); 


//LOOPS
//normal for loop
// for (let i = 0; i < 10;i++) {
//   console.log(i);
// }

//for-in loop
//this is used for object
// let obj={
//     name:"bhu",
//     role:"developer"
// }
// for (const key in obj) {
//          const element = obj[key];
//         console.log(key,element)
// }

//for-of loop
//this is for array
// for (const iterator of "DoIt") {
//     console.log(iterator) //instead of iterator we can use any name
// }


//while loop
// let i=3;
// while(i<6){
//     console.log(i)
//     i++;
// }

//do while loop
// let a=10;
// do{
//    console.log(a) 
//    a++;
// }while(a<7);


//FUNCTIONSunctio
// function sum(a,b,c=1){
    // console.log(a+b)
//     return a+b+c
// }
// result1 = sum(4,10,2);
// result2 = sum(22,11);

// console.log("the sum of these numbers is:",result1);
// console.log("the sum of these numbers is:",result2);


//OR
// function nice(name){
    //     console.log("hey "+ name +"you are beaytiful")
    //     console.log("hey "+ name +"you can do it ")
    // console.log(name+ " you can pass this test")
    // }
    // nice("bhumika") 

                     //String
let nam ="bhumika";
//this is called TEMPLATE LITERALS ,it use backtics(`) instead of double quotes(") to define string.
let friend =`ritzzzz`;
console.log("my name is "+ nam + " and my friend name is "+friend);
//  ${} this is called STRING INTERPOLATION, It can directly insert variable into template literals.
console.log(`my name is ${nam} and my friend name is ${friend}`)

let b="mummy"
// upperCase & lowerCase is function thatwhy we use () this
console.log(b.toUpperCase());
console.log(b.toLowerCase());
// length is property thatwhy we don't use () this 
console.log(b.length);
console.log(b.slice(1,4));
console.log(b.slice(2));
console.log(b.concat(nam,friend,"papa"));



