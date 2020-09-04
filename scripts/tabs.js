function OpenTab(event, tab_id)
{
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");

    for (i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-links");

    for (i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tab_id).style.display  = "block";
    event.currentTarget.className                 += " active";
}

function TabsOnResize()
{
    document.getElementById("tab-view").style.height = window.ClientRect.height;
}
