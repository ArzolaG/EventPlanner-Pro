const slider = () => {
    const rightArrow = document.querySelector("#right-arrow");
    const leftArrow = document.querySelector("#left-arrow");
    const showcaseContainer = document.querySelector("#showcase-container");
    const showcase = document.querySelector(".showcase");
    let index = 0;

    if (showcaseContainer.clientWidth !== 0) {
        rightArrow.addEventListener("click", () => {
            if (index < showcase.children.length) {
                index++;
                leftArrow.style.opacity = "1";

                if (index === showcase.children.length) {
                    rightArrow.style.opacity = "0.5";
                }
                showcaseContainer.scrollLeft += showcaseContainer.clientWidth;
            }
        });

        leftArrow.addEventListener("click", () => {
            if (index > 0) {
                index--;
                rightArrow.style.opacity = "1";

                if (index === 0) {
                    leftArrow.style.opacity = "0.5";
                }

                showcaseContainer.scrollLeft -= showcaseContainer.clientWidth;
            }
        });
    }
};

const mobileSlider = () => {
    const rightArrow = document.querySelector("#right-arrow");
    const leftArrow = document.querySelector("#left-arrow");
    const showcaseMobile = document.querySelector("#showcase-mobile");
    let index = 0;

    if (showcaseMobile.clientWidth !== 0) {
        rightArrow.addEventListener("click", () => {
            if (index < showcaseMobile.children.length - 1) {
                index++;
                leftArrow.style.opacity = "1";

                if (index === showcaseMobile.children.length - 1) {
                    rightArrow.style.opacity = "0.5";
                }

                showcaseMobile.scrollLeft += showcaseMobile.clientWidth + 15;
            }
        });

        leftArrow.addEventListener("click", () => {
            if (index > 0) {
                index--;
                rightArrow.style.opacity = "1";

                if (index === 0) {
                    leftArrow.style.opacity = "0.5";
                }

                showcaseMobile.scrollLeft -= showcaseMobile.clientWidth + 15;
            }
        });
    }
};

const mobileMenu = () => {
    const hamburgerIcon = document.querySelector(".menu-icon");
    const navItemsHandler = document.querySelectorAll("#mobile-nav li a");

    navItemsHandler.forEach((element) => {
        element.addEventListener("click", () => {
            document.getElementById("mobile-nav").classList.toggle("active");
        });
    });

    hamburgerIcon.addEventListener("click", () => {
        document.getElementsByClassName("line")[0].classList.toggle("active");
        document.getElementsByClassName("line")[1].classList.toggle("active");
        document.getElementsByClassName("line")[2].classList.toggle("active");

        document.getElementById("mobile-nav").classList.toggle("active");
        document.body.classList.toggle("fixed");
    });
};

mobileMenu();
slider();
mobileSlider();
