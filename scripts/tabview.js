function UpdateTabWidth(tab_view, sidebar, tab_content)
{
    var width = tab_view.offsetWidth - sidebar.offsetWidth - 1;
    tab_content.setAttribute("style", "width: " + width + "px;");
}

function OpenTab(event, tab_id)
{
    var sidebars     = document.getElementsByClassName("sidebar"    );
    var tab_contents = document.getElementsByClassName("tab-content");
    var tabs;

    for (var i = 0; i < sidebars.length; ++i)
    {
        if (tabs == null)
        {
            tabs = sidebars[i].getElementsByClassName("tab");
        }
        else
        {
            tabs.concat(sidebars[i].getElementsByClassName("tab"));
        }
    }

    for (var i = 0; i < tab_contents.length; i++)
    {
        tab_contents[i].style.display = "none";
        tab_contents[i].className     = tab_contents[i].className.replace(" active", "");
    }

    for (var i = 0; i < tabs.length; i++)
    {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }

    var sidebar = event.currentTarget.parentElement;

    while (sidebar != document && (!sidebar.classList.contains("sidebar") || !sidebar.classList.contains("main")))
    {
        sidebar = sidebar.parentElement;
    }

    if (sidebar != document)
    {
        UpdateTabWidth(document.getElementById(tab_id).parentElement, sidebar, document.getElementById(tab_id));
    }

    document.getElementById(tab_id).style.display  = "block";
    document.getElementById(tab_id).className     += " active";
    event.currentTarget.className                 += " active";
}

function TabsOnResize()
{
    // -------------------------------------------------------------------------
    // Adjust height
    // -------------------------------------------------------------------------
    var tab_views     = document.getElementsByClassName("tab-view");
    var headers       = document.getElementsByTagName  ("header"  );
    var navs          = document.getElementsByTagName  ("nav"     );
    var footers       = document.getElementsByTagName  ("footer"  );
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

    for (i = 0; i < tab_views.length; ++i)
    {
        var sidebars = tab_views[i].getElementsByClassName("sidebar"    );
        var contents = tab_views[i].getElementsByClassName("tab-content");

        tab_views[i].setAttribute("style", "height: " + height + "px;");

        for (var j = 0; j < sidebars.length; ++j)
        {
            sidebars[j].setAttribute("style", "height: " + height + "px;");
        }

        for (var j = 0; j < contents.length; ++j)
        {
            if (contents[j].classList.contains("active"))
            {
                contents[j].setAttribute("style", "height: " + height + "px;");
            }
        }
    }

    // -------------------------------------------------------------------------
    // Adjust width
    // -------------------------------------------------------------------------

    for (var i = 0; i < tab_views.length; ++i)
    {
        var sidebars = tab_views[i].getElementsByClassName("sidebar"    );
        var contents = tab_views[i].getElementsByClassName("tab-content");

        for (var j = 0; j < sidebars.length; ++j)
        {
            if (sidebars[j].classList.contains("main"))
            {
                for (var k = 0; k < contents.length; ++k)
                {
                    if (contents[k].classList.contains("active"))
                    {
                        UpdateTabWidth(tab_views[i], sidebars[i], contents[k]);
                    }
                }
            }
        }
    }
}
