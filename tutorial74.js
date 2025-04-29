let Button =document.getElementById("button")
Button.addEventListener("dblclick", ()=>{
    //alert("I was clicked, Yahh!!")
    document.querySelector(".box").innerHTML="<b>I was clicked</b>Yahh!!"
})