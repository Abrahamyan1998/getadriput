let btn = document.querySelectorAll(".btn");
let text = document.querySelectorAll(".text");
let clik0 = document.querySelector(".clik0");
let clik1 = document.querySelector(".clik1");
let clik2 = document.querySelector(".clik2");
let clik3 = document.querySelector(".clik3");
let moskva = document.querySelector(".moskva");
let tokio = document.querySelector(".tokio");
let berlin = document.querySelector(".berlin");

clik0.addEventListener("click", ()=>{
    moskva.style.display = "block";
    tokio.style.display = "block";
    berlin.style.display = "block";
})

clik1.addEventListener("click", ()=>{
    moskva.style.display = "block";
    tokio.style.display = "none";
    berlin.style.display = "none";
})

clik2.addEventListener("click", ()=>{
    moskva.style.display = "none";
    tokio.style.display = "block";
    berlin.style.display = "none";
})

clik3.addEventListener("click", ()=>{
    moskva.style.display = "none";
    tokio.style.display = "none";
    berlin.style.display = "block";
})


// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", () =>{
//         for (let i = 0; i < text.length; i++) {
//     text[i].addEventListener("click", ()=>{
//         btn[0].style.display= "block"

//     })            
//         }
//     })
// }