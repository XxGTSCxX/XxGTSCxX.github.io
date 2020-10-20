var current_slide = 0;

// Next/previous controls
function NavigateSlides(index_offset)
{
  ShowSlide(current_slide + index_offset);
}

// Thumbnail image controls
function CurrentSlide(new_index)
{
  ShowSlide(new_index);
}

function ShowSlide(slide_index)
{
  var slides = document.querySelectorAll(".slide");
  var dots   = document.querySelectorAll(".dot"  );

  if (slides.length && slides.length == dots.length)
  {
    current_slide = slide_index;

    while (current_slide < 0)
    {
      current_slide += slides.length;
    }

    current_slide %= slides.length;

    slides.forEach(slide =>
    {
      slide.style.display = "none";
    });

    dots.forEach(dot =>
    {
      dot.className = dot.className.replace(" active", "");
    });

    slides[current_slide].style.display  = "block";
    dots  [current_slide].className     += " active";
    window.onresize();
  }
}
