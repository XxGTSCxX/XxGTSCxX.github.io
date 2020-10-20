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
