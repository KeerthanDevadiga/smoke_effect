

const root = document.querySelector(".container");
let x = 0;
let y= 0;
window.addEventListener("mousemove", (e) => {
x = e.clientX;
y = e.clientY;

})
function draw() {
    const smoke = document.createElement("div");
    smoke.classList.add("smoke");
    smoke.style.left = x + "px";
    smoke.style.top = y + "px";

   root.appendChild(smoke);
    
    smoke.animate(
        [
            {
                backgroundColor: "magenta",
                filter: "blur(10px)",
            },
            {
                backgroundColor: "yellow",
                filter:"blur(20px)",
                top: y-(Math.random() * 400) + "px",
                opacity : 0,
                scale: 3
            }
        ],
        {
            duration: 500
        }

    );
    setTimeout(() => smoke.remove(),500);
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

