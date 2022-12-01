window.addEventListener('DOMContentLoaded', main);

function main() {
    setupMobileMenu();
    startTypeWriter();
}

// Hamburger and sidebar animation
function setupMobileMenu() {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav a');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

    for (const link of navLinks) {
        link.addEventListener('click', function() {
            menu_btn.classList.toggle('is-active');
            mobile_menu.classList.toggle('is-active');
        })
    }
}


// Typewriter effect
function startTypeWriter() {
    const p = document.querySelector(".welcome-paragraph");
    const message = "I'm Nathalie and welcome to my website!";
    const speed = 100;
    let textPosition = 0;
    
    function printNextCharacter() {
        // Span is the blinking border
        p.innerHTML = message.substring(0, textPosition) + "<span></span>";
        
        if (textPosition != message.length) {
            setTimeout(printNextCharacter, speed);
        }
        textPosition += 1;
    }
    printNextCharacter();
}
