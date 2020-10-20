function CentreX()
{
  document.querySelectorAll(".centre-x").forEach(elem =>
  {
    var parent_width  = GetNodeWidth (elem.parentNode);
    var elem_width    = GetNodeWidth (elem           );

    elem.style.transform = "translateX("
                         + ((parent_width  - elem_width ) * 0.5)
                         + "px)";
  });
}

function CentreY()
{
  document.querySelectorAll(".centre-y").forEach(elem =>
  {
    var parent_height = GetNodeHeight(elem.parentNode);
    var elem_height   = GetNodeHeight(elem           );

    elem.style.transform = "translateY("
                         + ((parent_height - elem_height) * 0.5)
                         + "px)";
  });
}

function Centre()
{
  document.querySelectorAll(".centre").forEach(elem =>
  {
    var parent_width  = GetNodeWidth (elem.parentNode);
    var parent_height = GetNodeHeight(elem.parentNode);
    var elem_width    = GetNodeWidth (elem           );
    var elem_height   = GetNodeHeight(elem           );

    elem.style.transform = "translate("
                         + ((parent_width  - elem_width ) * 0.5)
                         + "px, "
                         + ((parent_height - elem_height) * 0.5)
                         + "px)";
  });
}

function PositionAll()
{
  Centre();
  CentreX();
  CentreY();
}
