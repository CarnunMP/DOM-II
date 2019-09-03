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

// Makes mouse wheel change the image opacity instead of scroll:
window.addEventListener("wheel", (event) => {
    event.preventDefault();

    let images = document.querySelectorAll("img");
    images.forEach(image => {
        if (image.style.opacity === "") {
            image.style.opacity = "1.0";
        }
        (event.deltaY > 0) ? decreaseOpacity(image) : increaseOpacity(image);
    });

    function decreaseOpacity(image) {
        image.style.opacity = (parseFloat(image.style.opacity) * 0.9).toString();
    }

    function increaseOpacity(image) {
        let imageOpacity = parseFloat(image.style.opacity);
        imageOpacity = imageOpacity * 1.1;
        image.style.opacity = Math.min(1, imageOpacity).toString();
    }
}, {passive: false}); // (Chrome ignores .preventDefault() otherwise, in this case.)