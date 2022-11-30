let images = document.querySelectorAll(".images");
let square = document.querySelector(".square-img");
let container = document.querySelector(".container");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
        let a = images[i].getAttribute("src")
        let b = images[i].getAttribute("src")
        square.setAttribute("src", b)
        square.setAttribute("src", a)



    })

}


