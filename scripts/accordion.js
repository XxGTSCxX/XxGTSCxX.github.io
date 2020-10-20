function OnAccordionClick()
{
    this.classList.toggle("active");

    window.onresize();

    var panel = this.nextElementSibling;

    if (panel)
    {
        if (this.classList.contains("active"))
        {
            panel.style.marginBottom = "32px";
        }
        else
        {
            panel.style.marginBottom = "0";
        }
    
        if (panel.style.maxHeight)
        {
            panel.style.maxHeight = null;
        }
        else
        {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        window.onresize();
    }
}

function AccordionInit()
{
    var accordions = document.getElementsByClassName("accordion");

    for (var i = 0; i < accordions.length; ++i)
    {
        accordions[i].addEventListener("click", OnAccordionClick);
    }
}
