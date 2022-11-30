let foto1 = document.querySelector(".foto1");
let btn1 = document.querySelector(".btn1");
let foto2 = document.querySelector(".foto2");
let foto3 = document.querySelector(".foto3");
let btn2 = document.querySelector(".btn2");
let foto4 = document.querySelector(".foto4");
let bloc1 = document.querySelector(".bloc1");
let bloc2 = document.querySelector(".bloc2");

btn1.addEventListener("click" , () => {
    let a = foto1.getAttribute("src");
    let b = foto2.getAttribute("src");
    foto1.setAttribute("src", b);
    foto2.setAttribute("src", a);

})


btn2.addEventListener("click" , () => {
    let c = foto3.getAttribute("src");
    let d = foto4.getAttribute("src");
    foto3.setAttribute("src", d);
    foto4.setAttribute("src", c);

})