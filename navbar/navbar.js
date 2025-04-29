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

// console.log(o);
// o.salary="100crores";
// console.log(o);
// o.salary="500crores";
// console.log(o);

// function nice(name){
//     console.log("hey "+ name +" you are beaytiful")
//     console.log("hey "+ name +" you can do it ")
//     console.log(name+ " you can not pass this test")
// }
// nice("humika")

console.log("hiii my new starting")
let z=1;
console.log(z)
console.log(z+1)

//            FAULTY CALCULATER

let random=Math.random();
let a=prompt("enter first number");
let b=prompt("enter operation");
let c=prompt("enter second number");

let obj={
    "+":"-",
"*" : "+",
"-":"/",
"/":"**",

}

if(random > 0.1){

console.log(`the result is ${a} ${b} ${c}`)
alert(`the result is ${eval(` ${a} ${b} ${c}`)}`)
}
else{
    //perform wrong calculaton
    c=obj[c];
    alert(`the result is ${eval(` ${a} ${b} ${c}`)}`)
}


