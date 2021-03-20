const X = document.querySelector(".x");
const Y = document.querySelector(".y")

document.addEventListener('mousemove', (event) => {
    X.value = event.clientX;
    Y.value = event.clientY;
})