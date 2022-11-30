// Text typing animation

let messageArray = ["I'm Nathalie and welcome to my website!"];
let textPosition = 0;
let speed = 100;

function typeWriter() {
    document.querySelector(".welcome-paragraph").
    innerHTML = messageArray[0].substring(0, 
        textPosition) + "<span></span>";
    
    if(textPosition++ != messageArray[0].length)
        setTimeout(typeWriter, speed);
}

window.addEventListener('load', typeWriter);


// Hamburger andimation and sidebar
window.onload = function() {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}




















// Animation on hamburger-icon

// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//     if (!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// });



