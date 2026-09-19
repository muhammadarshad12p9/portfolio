const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;


        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );


        contactForm.reset();

    });

}

const sections =
    document.querySelectorAll("section");


const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function() {

    let current = "";


    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function(link) {

        link.style.color = "";

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.style.color = "#38bdf8";

        }

    });

});