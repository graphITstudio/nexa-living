/* ========================================
   NEXA LIVING
   MAIN JAVASCRIPT
======================================== */


/* ========================================
   MOBILE MENU
======================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";


        menuToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );


        navLinks.classList.toggle(
            "is-open"
        );


        menuToggle.classList.toggle(
            "is-open"
        );

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            navLinks.classList.remove(
                "is-open"
            );


            menuToggle.classList.remove(
                "is-open"
            );

        });

    });

}