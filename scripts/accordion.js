function IsAccordion(accordion)
{
  return accordion.classList.contains("accordion");
}

function OpenAccordion(accordion)
{
  if (IsAccordion(accordion) && !accordion.classList.contains("active"))
  {
    accordion.classList.add("active");
    window.onresize();

    var panel = accordion.nextElementSibling;

    if (panel)
    {
      panel.style.marginBottom  = "32px";
      panel.style.maxHeight     = panel.scrollHeight + "px";

      window.onresize();
    }
  }
}

function CloseAccordion(accordion)
{
  if (IsAccordion(accordion) && accordion.classList.contains("active"))
  {
    accordion.classList.remove("active");
    window.onresize();

    var panel = accordion.nextElementSibling;

    if (panel)
    {
      panel.style.marginBottom  = "0px";
      panel.style.maxHeight     = null;

      PauseAllVideosInElement(panel);
      window.onresize();
    }
  }
}

function OnAccordionClick()
{
  if (this.classList.contains("active"))
  {
    CloseAccordion(this);
  }
  else
  {
    OpenAccordion(this);
  }

  // this.classList.toggle("active");

  // window.onresize();

  // var panel = this.nextElementSibling;

  // if (panel)
  // {
    // if (this.classList.contains("active"))
    // {
      // panel.style.marginBottom = "32px";
    // }
    // else
    // {
      // panel.style.marginBottom = "0";
    // }

    // if (panel.style.maxHeight)
    // {
      // panel.style.maxHeight = null;
    // }
    // else
    // {
      // panel.style.maxHeight = panel.scrollHeight + "px";
    // }

    // PauseAllVideosInElement(panel);
    // window.onresize();
  // }
}

function AccordionInit()
{
  var accordions = document.getElementsByClassName("accordion");

  for (var i = 0; i < accordions.length; ++i)
  {
    accordions[i].addEventListener("click", OnAccordionClick);
  }
}
