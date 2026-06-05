const text = "Java Full Stack Developer";
let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").textContent += text.charAt(i);

        i++;

        setTimeout(typing,100);
    }
}

typing();

/* Dark Mode */

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function(){

    document.body.classList.toggle("dark");
}

/* Contact Form */

const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e){

    e.preventDefault();

    msg.textContent = "Message Sent Successfully!";
    msg.style.color = "green";

    form.reset();
});
