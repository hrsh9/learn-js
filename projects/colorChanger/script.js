const box = document.querySelectorAll(".box");
const body = document.querySelector("body");

box.forEach((i) =>{
    i.addEventListener('click',(e) => {
        body.style.backgroundColor = e.target.id;
    });
});