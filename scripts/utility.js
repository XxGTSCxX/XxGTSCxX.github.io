function GetNodeWidth(node)
{
  if (node instanceof Image)
  {
    return node.width;
  }

  return node.offsetWidth;
}

function GetNodeHeight(node)
{
  if (node instanceof Image)
  {
    return node.height;
  }

  return node.offsetHeight;
}

function SetNodeWidth(node, width)
{
  if (node instanceof Image)
  {
    node.width = width;
  }

  node.style.width = width + "px";
}

function SetNodeHeight(node, height)
{
  if (node instanceof Image)
  {
    node.height = height;
  }

  node.style.height = height + "px";
}

function PauseAllVideosInElement(elem)
{
  var videos  = elem.querySelectorAll("video" );
  var iframes = elem.querySelectorAll("iframe");

  videos.forEach(video =>
  {
    video.pause();
  });

  iframes.forEach(iframe =>
  {
    var iframe_source = iframe.src;
    iframe.src = iframe_source;
  });
}
