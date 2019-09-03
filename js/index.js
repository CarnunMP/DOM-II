// Note: Very few of these event listeners do sensible or particularly interesting things! :P

// Makes the text of the nav elements bold on mouseover:
let anchorsArray = document.body.querySelectorAll("a");
// console.log(anchorsArray);
anchorsArray.forEach(a => {
    a.addEventListener("mouseover", () => {
        toggleBold(a);
    });

    function toggleBold(a) {
        if (a.style.fontWeight != "bold") {
            a.style.fontWeight = "bold";
        } else {
            a.style.fontWeight = "normal";
        }
    }
});

// Makes a space bar press scroll to the bottom of the page:
window.addEventListener("keydown", (pressed) => {
    if (pressed.key === " ") {
        window.scrollTo(0,document.body.scrollHeight);
    }
});