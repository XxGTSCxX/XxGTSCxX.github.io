function OnResourceLoaded()
{
  const postload = new Event("postload");
  window.dispatchEvent(postload);
}

function AssignContent(node, content, append)
{
  if (append)
    node.innerHTML += content;
  else
    node.innerHTML  = content;

  node.querySelectorAll("img").forEach(resource =>
  {
    resource.onload = OnResourceLoaded;
  });

  node.querySelectorAll("audio").forEach(resource =>
  {
    resource.onload = OnResourceLoaded;
  });

  node.querySelectorAll("video").forEach(resource =>
  {
    resource.onloadeddata = OnResourceLoaded;
  });

  node.querySelectorAll("iframe").forEach(resource =>
  {
    resource.onload = OnResourceLoaded;
  });

  OnResourceLoaded();
}

function LoadContentInto(filename, nodes, append = false)
{
  var xmlhttp;

  if (window.XMLHttpRequest)
  {
    xmlhttp = new XMLHttpRequest();
  }
  else
  {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.open("GET", filename, true);

  xmlhttp.onreadystatechange = function()
  {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
      if (nodes instanceof HTMLElement)
      {
        AssignContent(nodes, xmlhttp.responseText, append);
      }
      else
      {
        for (var i = 0; i < nodes.length; ++i)
        {
          AssignContent(nodes[i], xmlhttp.responseText, append);
        }
      }
    }
  };

  xmlhttp.send();
}

function SetupLayout()
{
  LoadContentInto("contents/header.html", document.getElementsByTagName("header"));
  LoadContentInto("contents/navbar.html", document.getElementById      ("navbar"));
  LoadContentInto("contents/footer.html", document.getElementsByTagName("footer"));
}
