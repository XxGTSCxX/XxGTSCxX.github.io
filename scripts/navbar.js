// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function StickyNavbarOnScroll()
{
    var navbar = document.getElementById("navbar");

    navbar.classList.remove("sticky");

    if (window.pageYOffset >= navbar.offsetTop)
    {
        navbar.classList.add("sticky")
    }
}
