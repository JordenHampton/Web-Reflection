const fig = document.querySelector('.fig');
const cookieClose = document.querySelector('.cookie-close');
const pageCover = document.querySelector('.page-cover');
let active = false;

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

        // Move page to the side

        document.querySelector('.mobile-nav-container').style.display = "initial";
        document.querySelector('.main-container').style.marginLeft = "-18rem";
        document.querySelector('header').style.marginLeft = "-18rem";
        document.querySelector('.nav-sep').style.width = "35vw";

        // Stop page from scrolling
        document.querySelector('body').style.overflowY = "hidden";

        // Show a transparent layer over content when menu is open
        document.querySelector('.page-cover').style.display = "initial";


        // To keep track of if menu is opened or closed.
        active = true;

    } else {
        // Unmerge lines and show 1
        document.querySelector('.line-2').style.margin = ".3rem 0";
        document.querySelector('.line-2').style.visibility = "visible";

        // Make space for objects
        document.querySelector('.burger-container').style.marginTop = ".34rem";
        document.querySelector('.burger-container').style.height = "1.8rem";

        // Reduce width of lines to fit better
        document.querySelector('.line-1').style.width = "2rem";
        document.querySelector('.line-3').style.width = "2rem";


        // Rotate lines into a straight line
        
        document.querySelector('.line-1').style.transform = "rotate(0deg)";
        document.querySelector('.line-3').style.transform = "rotate(0deg)";

        document.querySelector('.mobile-nav-container').style.display = "none";
        document.querySelector('.main-container').style.marginLeft = "0rem";
        document.querySelector('header').style.marginLeft = "0rem";


        // Allow page scrolling
        document.querySelector('body').style.overflowY = "initial";

        // Hide transparent layer
        document.querySelector('.page-cover').style.display = "none";

        active = false;
    }
});

pageCover.addEventListener('click', () => {
    
        // Unmerge lines and show 1
        document.querySelector('.line-2').style.margin = ".3rem 0";
        document.querySelector('.line-2').style.visibility = "visible";

        // Make space for objects
        document.querySelector('.burger-container').style.marginTop = ".34rem";
        document.querySelector('.burger-container').style.height = "1.8rem";

        // Reduce width of lines to fit better
        document.querySelector('.line-1').style.width = "2rem";
        document.querySelector('.line-3').style.width = "2rem";


        // Rotate lines into a straight line
        
        document.querySelector('.line-1').style.transform = "rotate(0deg)";
        document.querySelector('.line-3').style.transform = "rotate(0deg)";

        document.querySelector('.mobile-nav-container').style.display = "none";
        document.querySelector('.main-container').style.marginLeft = "0rem";
        document.querySelector('header').style.marginLeft = "0rem";


        // Allow page scrolling
        document.querySelector('body').style.overflowY = "initial";

        // Hide transparent layer
        document.querySelector('.page-cover').style.display = "none";

        active = false;
    
});


