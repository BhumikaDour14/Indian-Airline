function Adjective(){
let a="Crazy";
let b="Amazing";
let c="Fire";
let d =Math.floor(Math.random()*3)
if(d==1){return a}
else if(d==2){return b}
else {return c}}

function ShopName(){
let a="Engine";
let b="Foods";
let c="Garments";
let d =Math.floor(Math.random()*3)
if(d==1){return a}
else if(d==2){return b}
else {return c}
}

function AnotherName(){
    let a="Bros";
    let b="Limited";
    let c="Hub";
    let d =Math.floor(Math.random()*3)
    if(d==1){return a}
    else if(d==2){return b}
    else {return c}
    }

    console.log("Bussiness Name Generator\n" + Adjective()+" "+ ShopName()+" "+ AnotherName());