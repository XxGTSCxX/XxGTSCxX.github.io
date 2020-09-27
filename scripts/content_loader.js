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
            <div class="panel row">
                <div class="column" style="width: 50%">
                    <img src="assets/cards/chilldew-repocard.png" alt="Chilldew Project">
                </div>

                <div class="column" style="width: 50%">
                    <tag class="programming">Engine Programmer</tag>

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
            </div>
            `;
    }

    for (var i = 0; i < eos_briefs.length; ++i)
    {
        LoadHeader(eos_briefs[i], `EOS (2020)`);

        eos_briefs[i].innerHTML +=
            `
            <div class="panel row">
                <div class="column" style="width: 50%">
                    <img src="assets/cards/eos-card.png" alt="EOS by Bonsai Tavern">
                </div>

                <div class="column" style="width: 50%">
                    <tag class="leadership">Producer</tag> <tag class="programming">Back-end Programmer</tag>

                    <p>
                        <a href="https://games.digipen.edu/games/eos"><b>EOS</b></a> is a 3D puzzle game made by an
                        11 person team, Bonsai Tavern, for our 3rd year Digipen games project. I was the producer
                        for the first semester before stepping down to fully focus on my technical responsibilities
                        in the second semester. Some of the things I've implemented include:
                    </p>

                    <ul>
                        <li>Property Reflection  </li>
                        <li>De/Serialiser        </li>
                        <li>Configuration Manager</li>
                        <li>3D Animations        </li>
                        <li>Prefab System        </li>
                    </ul>

                    <p>
                        You can learn more about my contributions and what I've learnt from the project
                        in my write-up <a href="project - eos.html">here</a>.
                    </p>
                </div>
            </div>
            `;
    }

    for (var i = 0; i < dynamo_briefs.length; ++i)
    {
        LoadHeader(dynamo_briefs[i], `Dynamo (2019)`);

        dynamo_briefs[i].innerHTML +=
            `
            <div class="panel row">
                <div class="column" style="width: 50%">
                    <img src="assets/cards/dynamo-card.png" alt="Dynamo by Cognito">
                </div>

                <div class="column" style="width: 50%">
                    <tag class="programming">Graphics Programmer</tag> <tag class="design">Technical UI Designer</tag>

                    <p>
                        <b><a href="https://games.digipen.edu/games/dynamo">Dynamo</a></b> is a 2D platformer game made by a 7
                        person team, Cognito (yes, I suggested that just so we could say we were <i>in</i>cognito), for our 2nd
                        year Digipen games project. The project spanned two trimesters and I spent the first trimester as the
                        Graphics Programmer before taking on the secondary role of a Technical UI Designer in the second trimester.
                        Some of the things I've implemented include:
                    </p>

                    <ul>
                        <li>2D Graphics System (OpenGL API)          </li>
                        <li>Texture Loader                           </li>
                        <li>Font Loading & Atlas Generation          </li>
                        <li>Colour Blending                          </li>
                        <li>UI Tools (canvas, textbox, anchors, etc.)</li>
                        <li>In-Game UI Design & Implementation       </li>
                        <li>Some UI Art Assets                       </li>
                    </ul>

                    <p>
                        You can learn more about my contributions in my write-up <a href="project - dynamo.html">here</a>.
                    </p>
                </div>
            </div>
            `;
    }

    for (var i = 0; i < des260_briefs.length; ++i)
    {
        LoadHeader(des260_briefs[i], `DES260: User Experience Design (2019)`);

        des260_briefs[i].innerHTML +=
            `
            <div class="panel row">
                <div class="column center-align" style="width: 50%">
                    <video width="90%" controls>
                        <source src="assets/DES260/DES260 - Showcase.mp4" type="video/mp4">
                    </video>
                </div>

                <div class="column" style="width: 50%">
                    <tag class="design">UI/UX Designer</tag>

                    <p>
                        For one of my design electives, I took the User Experience module and from there learnt the basics
                        in UI/UX Design, including different fidelities of wireframes, basic colour theory, spacing and
                        alignment, etc. And for our final project, we get to design and implement a prototype for a hypothetical
                        game, Chain of Jewels. I had the opportunity to try my hand on implementing things like:
                    </p>

                    <ul>
                        <li>Mid-Fidelity Wireframes       </li>
                        <li>Photobashing Mockups          </li>
                        <li>Prototyping Layouts with Unity</li>
                    </ul>

                    <p>
                        <i>Write-up is still a work in progress. I will be sharing some examples of the things I've
                        implemented in the write-up I make.</i>
                    </p>
                </div>
            </div>
            `;
    }

    for (var i = 0; i < gat316_briefs.length; ++i)
    {
        LoadHeader(gat316_briefs[i], `The World of Secret Singapore (2020)`);

        gat316_briefs[i].innerHTML +=
            `
            <div class="panel row">
                <div class="column" style="width: 50%">
                    <img src="assets/cards/gat316-card.png" alt="The World of Secret Singapore">
                </div>

                <div class="column" style="width: 50%">
                    <tag class="programming">Systems Designer</tag> <tag class="design">Level Designer</tag> <tag class="design">Material Shader</tag>

                    <p>
                        For our GAT316 module, 3D Game Design II, we formed 4 person teams and were tasked to design a 3D
                        open world game using Unreal Engine 4. From this, I was exposed the some of the design considerations
                        needed compared to linear games and the importance of quality over quantity. Some of the things I
                        implemented include:
                    </p>

                    <ul>
                        <li>Metric Gym                      </li>
                        <li>Material Shaders for UI Feedback</li>
                        <li>Level Design                    </li>
                        <li>Quest Design                    </li>
                    </ul>

                    <p>
                        <i>Write-up is still a work in progress. I will be sharing some examples of the things I've
                        implemented in the write-up I make.</i>
                    </p>
                </div>
            </div>
            `;
    }

    for (var i = 0; i < gat315_briefs.length; ++i)
    {
        LoadHeader(gat315_briefs[i], `GAT315: 3D Game Design I (2019)`);

        gat315_briefs[i].innerHTML +=
            `
            <div class="panel row">
                <div class="column center-align" style="width: 50%">
                    <img class="medium-width" src="assets/cards/gat315-card.jpg" alt="Unreal Tornement">
                </div>

                <div class="column" style="width: 50%">
                    <tag class="design">Level Designer</tag>

                    <p>
                        For this module, we formed pair teams and were tasked to design a 3D multi-player game using Unreal
                        Tornament. For this project, we could fully focus on the level design and maximising player engagement
                        with pre-established mechanics. I was also exposed the some of the design considerations when it came
                        to multiplayer games.
                    </p>

                    <p>
                        <i>Write-up is still a work in progress. I will be sharing some examples of the things I've
                        implemented in the write-up I make.</i>
                    </p>
                </div>
            </div>
            `;
    }

    for (var i = 0; i < gat251_briefs.length; ++i)
    {
        LoadHeader(gat251_briefs[i], `Beyond (2019)`);

        gat251_briefs[i].innerHTML +=
            `
            <div class="panel row">
                <div class="column" style="width: 50%">
                    <img src="assets/cards/beyond-card.png" alt="Beyond">
                </div>

                <div class="column" style="width: 50%">
                    <tag class="design">Game Designer</tag> <tag class="design">Level Designer</tag> <tag class="design">UI Designer</tag>

                    <p>
                        For my GAM251 module, 2D Game Design II, as misleading as the name is, we were tasked to design a 3D
                        game of our own choosing. The module taught us how to create a fantasy for player immersion and how to
                        utilise design techniques to capture and guide the player's attention as they progress in the game. It
                        acted as my proper introduction into 3D game design. For this project, I used Unreal Engine to create
                        my game, and I was able to dabble into:
                    </p>

                    <ul>
                        <li>Game Design  </li>
                        <li>Level Design </li>
                        <li>System Design</li>
                        <li>UI Design    </li>
                    </ul>
    
                    <p>
                        <i>Write-up is still a work in progress. I will be sharing some examples of the things I've
                        implemented in the write-up I make.</i>
                    </p>
                </div>
            </div>
            `;
    }

    for (var i = 0; i < eng230_briefs.length; ++i)
    {
        LoadHeader(eng230_briefs[i], `The Interview (2020)`);

        eng230_briefs[i].innerHTML +=
            `
            <div class="panel row">
                <div class="column center-align" style="width: 50%">
                    <img class="medium-width" src="assets/cards/eng230-card.png" alt="The Interview">
                </div>

                <div class="column" style="width: 50%">
                    <tag class="leadership">Director</tag> <tag class="design">Screenplay Writer</tag> <tag class="design">Storyboarder</tag> <tag class="design">Sound Designer</tag> <tag class="design">Video Editor</tag>

                    <p>
                        For my English elective on Speculative Fiction, our final project was to produce a Horror short film in
                        a 5 person team. For this project, I took on the role of the Director which allowed me to dabble into
                        everything. For this film, I contributed via:
                    </p>

                    <ul>
                        <li>Screenplay Writing</li>
                        <li>Storyboarding     </li>
                        <li>Sound Design      </li>
                        <li>Video Editing     </li>
                    </ul>

                    <p>
                        <i>Write-up is still a work in progress. I will be sharing some examples of the things I've
                        implemented in the write-up I make.</i>
                    </p>
                </div>
            </div>
            `;
    }

    for (var i = 0; i < mus115_briefs.length; ++i)
    {
        LoadHeader(mus115_briefs[i], `MUS115: Fundamentals of Music and Sound Design (2019)`);

        mus115_briefs[i].innerHTML +=
            `
            <div class="panel row">
                <div class="column center-align" style="width: 50%">
                    <video width="90%" controls>
                        <source src="assets/mus115/Mus115_g.tan_wk05_movie.mp4" type="video/mp4">
                    </video>
                </div>

                <div class="column" style="width: 50%">
                    <tag class="design">Sound Design</tag> <tag class="design">Music Composition</tag>

                    <p>
                        For this elective, I was taught the basics of sound design and music composition. I was also given
                        the opportunity to try my hands on both through the various assignments and projects we had there.
                    </p>

                    <p>
                        The example on the left is from an assignment where we compose a loopable BGM for an existing game.
                        This meant that the music should not be tiresome to listen for extended periods of time and should
                        be fitting for the game.
                    </p>

                    <p>
                        <i>Write-up is still a work in progress. I will be sharing some examples of the things I've
                        implemented in the write-up I make.</i>
                    </p>
                </div>
            </div>
            `;
    }
}
