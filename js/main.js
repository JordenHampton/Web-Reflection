const fig = document.querySelector('.fig');
let active = false;
document.cookie = "cookie=true"; 

fig.addEventListener('click', () => {

    if (active === false) {
        // Merge lines and hide 1
        document.querySelector('.line-2').style.margin = "-.2rem 0";
        document.querySelector('.line-2').style.visibility = "hidden";

        // Make space for objects
        document.querySelector('.burger-container').style.marginTop = "1rem";
        document.querySelector('.burger-container').style.height = "1.15rem";

        // Reduce width of lines to fit better
        document.querySelector('.line-1').style.width = "1.8rem";
        document.querySelector('.line-3').style.width = "1.8rem";

        // Rotate lines into a cross
        
        document.querySelector('.line-1').style.transform = "rotate(45deg)";
        document.querySelector('.line-3').style.transform = "rotate(-45deg)";

        document.querySelector('.mobile-nav-container').style.display = "initial";
        document.querySelector('.main-container').style.marginLeft = "-18rem";
        document.querySelector('header').style.marginLeft = "-18rem";
        document.querySelector('.nav-sep').style.width = "35vw";

        active = true;

    } else {
        // Merge lines and hide 1
        document.querySelector('.line-2').style.margin = ".3rem 0";
        document.querySelector('.line-2').style.visibility = "visible";

        // Make space for objects
        document.querySelector('.burger-container').style.marginTop = ".34rem";
        document.querySelector('.burger-container').style.height = "1.8rem";

        // Reduce width of lines to fit better
        document.querySelector('.line-1').style.width = "2rem";
        document.querySelector('.line-3').style.width = "2rem";


        // Rotate lines into a cross
        
        document.querySelector('.line-1').style.transform = "rotate(0deg)";
        document.querySelector('.line-3').style.transform = "rotate(0deg)";

        document.querySelector('.mobile-nav-container').style.display = "none";
        document.querySelector('.main-container').style.marginLeft = "0rem";
        document.querySelector('header').style.marginLeft = "0rem";

        active = false;
    }
});

