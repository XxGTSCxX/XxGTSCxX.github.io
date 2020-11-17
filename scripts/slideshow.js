let slide_positions = new Map();

function SlidesInit()
{
  var containers = document.querySelectorAll(".slideshow-container");
  containers.forEach(container =>
  {
    ShowSlide(container.id, 0);
  });
}

// Next/previous controls
function NavigateSlides(slide_set_id, index_offset)
{
  if (slide_positions.has(slide_set_id))
  {
    ShowSlide(slide_set_id, slide_positions.get(slide_set_id) + index_offset);
  }
}

// Thumbnail image controls
function CurrentSlide(slide_set_id, new_index)
{
  ShowSlide(slide_set_id, new_index);
}

function ShowSlide(slide_set_id, slide_index)
{
  var container = document.getElementById(slide_set_id);

  if (container.classList.contains("slideshow-container"))
  {
    var slides = container.querySelectorAll(".slide");
    var dots   = container.querySelectorAll(".dot"  );

    if (slides.length && slides.length == dots.length)
    {
      while (slide_index < 0)
      {
        slide_index += slides.length;
      }

      slide_index %= slides.length;

      slides.forEach(slide =>
      {
        slide.style.display = "none";
      });

      dots.forEach(dot =>
      {
        dot.className = dot.className.replace(" active", "");
      });

      slides[slide_index].style.display  = "block";
      dots  [slide_index].className     += " active";
      slide_positions.set(slide_set_id, slide_index);
      window.onresize();
    }
  }
}
