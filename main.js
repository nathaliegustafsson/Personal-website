let messageArray = ["I'm Nathalie and welcome to my website!"];
let textPosition = 0;
let speed = 100;

function typeWriter() {
    document.querySelector(".welcome-paragraph").
    innerHTML = messageArray[0].substring(0,
        textPosition) + "<span>\u25ae</span>";
    
    if(textPosition++ != messageArray[0].length)
        setTimeout(typeWriter, speed);
}

window.addEventListener('load', typeWriter);


