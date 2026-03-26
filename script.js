console.log("JavaScript is connected!")
const texts = [ 

    "Hi, I'm Bone Paledi!", 

    "I'm a Web Developer", 

    "I Build interesting and cool things", 

    "Welcome to My Portfolio!" 

]; 
let textIndex = 0; 

let charIndex = 0; 

let isDeleting = false; 

const typingElement = document.getElementById('typing-headline'); 

 

function typeEffect() { 

    const currentText = texts[textIndex]; 

    if (isDeleting) { 

        typingElement.textContent = currentText.substring(0, charIndex - 1); 

        charIndex--; 

    } else { 

        typingElement.textContent = currentText.substring(0, charIndex + 1); 

        charIndex++; 

    } 

    if (!isDeleting && charIndex === currentText.length) { 

        isDeleting = true; 

        setTimeout(typeEffect, 2000); 

        return; 

    } 

    if (isDeleting && charIndex === 0) { 

        isDeleting = false; 

        textIndex = (textIndex + 1) % texts.length; 

    } 

    const speed = isDeleting ? 50 : 100; 

    setTimeout(typeEffect, speed); 

} 

 

typeEffect(); 
 

