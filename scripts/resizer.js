function ResizeWidescreens()
{
  var widescreens = document.querySelectorAll(".widescreen");

  widescreens.forEach(widescreen =>
  {
    SetNodeHeight(widescreen, GetNodeWidth(widescreen) * (9.0 / 16.0));
  });
}

function ResizeToFit()
{
  document.querySelectorAll(".fit").forEach(elem =>
  {
    var parent_width  = GetNodeWidth (elem.parentNode);
    var parent_height = GetNodeHeight(elem.parentNode);
    var elem_width    = GetNodeWidth (elem           );
    var elem_height   = GetNodeHeight(elem           );

    if ((elem instanceof Image) && elem.classList.contains("use_natural"))
    {
      elem_width  = elem.naturalWidth;
      elem_height = elem.naturalHeight;
    }

    var parent_ratio = parent_width / parent_height;
    var   elem_ratio =   elem_width /   elem_height;

    if (elem_ratio > parent_ratio)
    {
      SetNodeWidth (elem, parent_width                             );
      SetNodeHeight(elem, elem_height * (parent_width / elem_width));
    }
    else
    {
      SetNodeWidth (elem, elem_width * (parent_height / elem_height));
      SetNodeHeight(elem, parent_height                             );
    }
  });
}

function ResizeAll()
{
  ResizeWidescreens();
  ResizeToFit();
}
