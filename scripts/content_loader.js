function LoadHeader(element, title)
{
    if (element.classList.contains(`h1`))
    {
        element.innerHTML = `<h1 class="accordion">` + title + `</h1>`;
    }
    else if (element.classList.contains(`h2`))
    {
        element.innerHTML = `<h2 class="accordion">` + title + `</h2>`;
    }
    else if (element.classList.contains(`h3`))
    {
        element.innerHTML = `<h3 class="accordion">` + title + `</h3>`;
    }
    else if (element.classList.contains(`h4`))
    {
        element.innerHTML = `<h4 class="accordion">` + title + `</h4>`;
    }
    else
    {
        element.innerHTML = `<p class="accordion">` + title + `</p>`;
    }
}

function LoadBriefs()
{
    var chilldew_briefs = document.getElementsByClassName("chilldew-brief");
    var eos_briefs      = document.getElementsByClassName("eos-brief"     );
    var dynamo_briefs   = document.getElementsByClassName("dynamo-brief"  );
    var des260_briefs   = document.getElementsByClassName("des260-brief"  );
    var gat316_briefs   = document.getElementsByClassName("gat316-brief"  );
    var gat315_briefs   = document.getElementsByClassName("gat315-brief"  );
    var gat251_briefs   = document.getElementsByClassName("gat251-brief"  );
    var eng230_briefs   = document.getElementsByClassName("eng230-brief"  );
    var mus115_briefs   = document.getElementsByClassName("mus115-brief"  );

    for (var i = 0; i < chilldew_briefs.length; ++i)
    {
        LoadHeader(chilldew_briefs[i], `Chilldew (2020)`);

        chilldew_briefs[i].innerHTML +=
            `
            <div class="panel">
                <div class="center-align">
                    <img class="medium-width" src="assets/cards/chilldew-repocard.png" alt="Chilldew Project">
                </div>

                <p>
                    The <a href="https://github.com/XxGTSCxX/Chilldew">Chilldew project</a> is a personal game engine and
                    editor project that I'm currently working on. It is the cumulation of all the things I have learnt in my
                    time at Digipen and the project I use to test any programming concepts that I am curious about, such as
                    data oriented programming.
                </p>

                <p>
                    I'm currently also looking into <a href="https://travis-ci.org/">Travis-CI</a> as a start to continuous
                    integration and deployment. I'm hoping to implement that into my Chilldew project once I have a better
                    understanding on how to set it up. I'm currently using a
                    <a href="https://github.com/XxGTSCxX/travis-ci-cpp-example">forked project</a> to better understand the
                    tool.
                </p>
            </div>
            `;
    }

    for (var i = 0; i < eos_briefs.length; ++i)
    {
        LoadHeader(eos_briefs[i], `EOS (2020)`);

        eos_briefs[i].innerHTML +=
            `
            <div class="panel">
                <div class="center-align">
                    <img class="medium-width" src="assets/cards/eos-card.png" alt="EOS by Bonsai Tavern">
                </div>

                <p>
                    EOS is the game made by an 11 person team, Bonsai Tavern, for our 3rd year Digipen games project. I was
                    the producer for the first semester before stepping down to fully focus on my technical responsibilities
                    in the second semester. You can learn more about my contributions and what I've learnt from the project
                    in my write-up <a href="project - eos.html">here</a>.
                </p>
            </div>
            `;
    }

    for (var i = 0; i < dynamo_briefs.length; ++i)
    {
        LoadHeader(dynamo_briefs[i], `Dynamo (2019)`);

        dynamo_briefs[i].innerHTML +=
            `
            <div class="panel">
                <div class="center-align">
                    <img class="medium-width" src="assets/cards/dynamo-card.png" alt="Dynamo by Cognito">
                </div>

                <p>
                    <b><a href="https://games.digipen.edu/games/dynamo">Dynamo</a></b> is the game made by a 7 person team,
                    Cognito (yes, I suggested that just so we could say we were <i>in</i>cognito), for our 2nd year Digipen
                    games project. The project spanned two trimesters and I spent the first trimester as the Graphics
                    Programmer before taking on the secondary role of a Technical UI Designer in the second trimester. You
                    can learn more about my contributions in my write-up <a href="project - dynamo.html">here</a>.
                </p>
            </div>
            `;
    }

    for (var i = 0; i < des260_briefs.length; ++i)
    {
        LoadHeader(des260_briefs[i], `DES260: User Experience Design (2019)`);

        des260_briefs[i].innerHTML +=
            `
            <div class="panel">
                <p class="center-align"><i>Write-up is still a work in progress.</i></p>

                <p>
                    For one of my design electives, I took the User Experience module and from there learnt about the
                    wireframes, the different levels of fidelity that they could have, mockups, and experienced what
                    it's like to quickly iterate and prototypes for these layouts using Unity. You can learn and see
                    my work in my write-up here.
                </p>
            </div>
            `;
    }

    for (var i = 0; i < gat316_briefs.length; ++i)
    {
        LoadHeader(gat316_briefs[i], `GAT316: 3D Game Design II (2020)`);

        gat316_briefs[i].innerHTML +=
            `
            <div class="panel">
                <p class="center-align"><i>Write-up is still a work in progress.</i></p>

                <p>
                    For this module, we formed 4 person teams and were tasked to design a 3D open world game. From this,
                    I was exposed the some of the design considerations needed compared to linear games.
                    <!--You can learn and see my work in my write-up here.-->
                </p>
            </div>
            `;
    }

    for (var i = 0; i < gat315_briefs.length; ++i)
    {
        LoadHeader(gat315_briefs[i], `GAT315: 3D Game Design I (2019)`);

        gat315_briefs[i].innerHTML +=
            `
            <div class="panel">
                <p class="center-align"><i>Write-up is still a work in progress.</i></p>

                <p>
                    For this module, we formed pair teams and were tasked to design a 3D multi-player game using Unreal
                    Tornament. From this, I was exposed the some of the design considerations when it came to multiplayer
                    games.
                    <!--You can learn and see my work in my write-up here.-->
                </p>
            </div>
            `;
    }

    for (var i = 0; i < gat251_briefs.length; ++i)
    {
        LoadHeader(gat251_briefs[i], `GAT251: 2D Game Design II (2019)`);

        gat251_briefs[i].innerHTML +=
            `
            <div class="panel">
                <p class="center-align"><i>Write-up is still a work in progress.</i></p>

                <p>
                    For this module, as misleading as the name is, we were tasked to design a 3D game of our own choosing.
                    The module taught us how to create a fantasy for player immersion and how to utilise design techniques
                    to capture and guide the player's attention as they progress in the game. It acted as my proper
                    introduction into 3D game design.
                    <!--You can learn and see my work in my write-up here.-->
                </p>
            </div>
            `;
    }

    for (var i = 0; i < eng230_briefs.length; ++i)
    {
        LoadHeader(eng230_briefs[i], `ENG230: Speculative Fiction (2020)`);

        eng230_briefs[i].innerHTML +=
            `
            <div class="panel">
                <p class="center-align"><i>Write-up is still a work in progress.</i></p>

                <p>
                    For this elective, our final project was to produce a Horror short film in a 5 person team. For this
                    project, I took on the role of a producer which allowed me to dabble into everything. I also worked
                    on the sound design, mixing, and editing and so will be discussing more on that.
                    <!--You can learn and see my work in my write-up here.-->
                </p>
            </div>
            `;
    }

    for (var i = 0; i < mus115_briefs.length; ++i)
    {
        LoadHeader(mus115_briefs[i], `MUS115: Fundamentals of Music and Sound Design (2019)`);

        mus115_briefs[i].innerHTML +=
            `
            <div class="panel">
                <p class="center-align"><i>Write-up is still a work in progress.</i></p>

                <p>
                    For this elective, I was taught the basics of sound design and music composition. I was also given
                    the opportunity to try my hands on both through the various assignments and projects we had there.
                    <!--You can learn and see my work in my write-up here.-->
                </p>
            </div>
            `;
    }
}
