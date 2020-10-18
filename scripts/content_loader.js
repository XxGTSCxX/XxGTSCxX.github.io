var resources = new Array();

function CompletionCheck(resource)
{
    // for (var i = 0; i < resources.length; ++i)
    // {
        // if (resource && resource.src == resources[i].src)
        // {
            // resources.splice(i, 1);
            // --i;
        // }
    // }

    // if (!resources.length)
    // {
        const postload = new Event("postload");
        window.dispatchEvent(postload);
        // console.log("load complete");
    // }
}

function AssignContent(node, content, append)
{
    if (append)
        node.innerHTML += content;
    else
        node.innerHTML  = content;

    node.querySelectorAll("img").forEach(resource =>
    {
        resources.push(resource);
        resource.onload = function() { CompletionCheck(resource); };
    });

    node.querySelectorAll("audio").forEach(resource =>
    {
        resources.push(resource);
        resource.onload = function() { CompletionCheck(resource); };
    });

    node.querySelectorAll("video").forEach(resource =>
    {
        resources.push(resource);
        resource.onloadeddata = function() { CompletionCheck(resource); };
    });

    node.querySelectorAll("iframe").forEach(resource =>
    {
        resources.push(resource);
        resource.onload = function() { CompletionCheck(resource); };
    });

    CompletionCheck(null);
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
