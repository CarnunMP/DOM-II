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

// Allows the user to change the position of the logo with a drag/drop:
let logo = document.body.querySelector(".logo-heading");
logo.setAttribute("draggable", "true");
logo.style.position = "relative";
logo.addEventListener("dragend", (event) => {
    logo.style.left = `${event.offsetX}px`; // This doesn't quite work as expected... but I'm not sure why!
});

// Makes everything inside a div 'wiggle' on load:
let everyDiv = document.body.querySelectorAll("div");
let everything = [];
everyDiv.forEach(div => {
    Array.from(div.children).forEach(thing => {
        // thing.addEventListener("load", wiggle(thing));
        everything.push(thing);
    });
});
// Hmm. Got lost trying to figure out animations in JS. Will get back to this!

// Changes background colour of the buttons on focus:
let buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.setAttribute("focusable", "true");
    button.addEventListener("focus", event => {
        console.log(event);
        event.target.style.background = "red";
    });
});
// This also doesn't work??

// Alright, time to change focus. I feel I've got event listeners down: no use getting caught up in the details!

// 'Nest two similar events somewhere in the site and prevent the event propagation properly':
let textContentDivs = document.querySelectorAll(".text-content");
textContentDivs.forEach(div => {
    div.addEventListener("click", () => {
        div.style.border = "2px solid black";
    })
    div.children[0].addEventListener("click", e => {
        div.children[0].style.background = "red";
        e.stopImmediatePropagation();
    });
});
// Looks to be working!