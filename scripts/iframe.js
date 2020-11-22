function ResizeIFrames()
{
  var videos = document.getElementsByClassName("video" );

  for (var i = 0; i < videos.length; ++i)
  {
    var height = videos[i].offsetWidth * (9.0 / 16.0);
    videos[i].style.height = height + "px";
  }
}