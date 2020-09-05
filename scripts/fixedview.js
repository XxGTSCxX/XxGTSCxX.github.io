function ViewOnResize()
{
    // -------------------------------------------------------------------------
    // Adjust height
    // -------------------------------------------------------------------------
    var fixed_view    = document.getElementById      ("fixed-view");
    var headers       = document.getElementsByTagName("header"    );
    var navs          = document.getElementsByTagName("nav"       );
    var footers       = document.getElementsByTagName("footer"    );
    var view_height   = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var remove_height = 0;
    var footer_height = 0;

    for (var i = 0; i < navs.length; ++i)
    {
        if (navs[i].classList.contains("bar"))
        {
            remove_height = navs[i].offsetHeight;
        }
    }

    for (var i = 0; i < footers.length; ++i)
    {
        remove_height += footers[i].offsetHeight;
        footer_height += footers[i].offsetHeight;
    }

    for (var i = 0; i < headers.length; ++i)
    {
        remove_height += headers[i].offsetHeight;
    }

    var height = view_height - remove_height;

    fixed_view.setAttribute("style", "height: " + height + "px;");
}
