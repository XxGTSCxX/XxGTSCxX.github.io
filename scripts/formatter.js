function LoadFormat(active_tab, active_item)
{
    var headers = document.getElementsByTagName("header");
    var footers = document.getElementsByTagName("footer");
    var nav     = document.getElementById      ("navbar");

    console.log(headers.length + `,` + footers.length);

    for (var i = 0; i < headers.length; ++i)
    {
        headers[i].innerHTML =
            `
            <img class="icon" style="margin-top: 25px;" src="assets/logo.png" alt="2019 Icon">

            <h1 style="margin-bottom: 0; margin-top: 0">GABRIELLE TAN SUAN CHOO</h1>

            <div class="row" style="margin-top: 0; min-width: 400px; overflow: hidden">
                <p class="column" style="text-align: right;  width: 48%; margin-top: 0">TECHNICAL UI DESIGNER</p>
                <p class="column" style="text-align: center; width: 4% ; margin-top: 0">❖                   </p>
                <p class="column" style="text-align: left;   width: 48%; margin-top: 0">TOOLS PROGRAMMER     </p>
            </div>
            `;
    }

    if (nav)
    {
        var home_tab    = `<a class="tab"        href="index.html"   >HOME    </a>`;
        var project_tab = `<a class="tab target" href="projects.html">PROJECTS</a>`;
        var resume_tab  = `<a class="tab"        href="resume.html"  >RESUME  </a>`;

        var eos_item    = `<a class="item" href="project - eos.html"   >EOS   </a>`;
        var dynamo_item = `<a class="item" href="project - dynamo.html">Dynamo</a>`;

        switch (active_tab)
        {
        case "home"   : home_tab    = `<a class="tab active"        href="index.html"   >HOME    </a>`; break;
        case "project": project_tab = `<a class="tab active target" href="projects.html">PROJECTS</a>`; break;
        case "resume" : resume_tab  = `<a class="tab active"        href="resume.html"  >RESUME  </a>`; break;
        }

        switch (active_item)
        {
        case "eos"   : eos_item    = `<a class="item" href="project - eos.html"   ><b>EOS   </b></a>`; break;
        case "dynamo": dynamo_item = `<a class="item" href="project - dynamo.html"><b>Dynamo</b></a>`; break;
        }

        nav.innerHTML = home_tab + `<div class="droplist">` + project_tab +
            `
            <div class="droplist-content">
                <a class="item" href="https://github.com/XxGTSCxX/Chilldew">Chilldew</a>
            ` + eos_item + dynamo_item +
            `
                </div>
            </div>` + resume_tab;
    }

    for (var i = 0; i < footers.length; ++i)
    {
        footers[i].innerHTML =
            `
            <b>Email:</b> g.tan@digipen.edu ❖ <b>GitHub:</b>
            <a href="https://github.com/XxGTSCxX">XxGTSCxX</a> ❖ <b>LinkedIn:</b>
            <a href="https://www.linkedin.com/in/gabrielle-tan-suan-choo/">gabrielle-tan-suan-choo</a>
            `;
    }
}
