function NavbarInit(active_tab, active_item)
{
    var tab  = document.getElementById(active_tab  + "_tab" );
    var item = document.getElementById(active_item + "_item");

    if (tab)
    {
        tab.classList.add("active");
    }

    if (item)
    {
        item.classList.add("active");
    }
}

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
