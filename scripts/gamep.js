// Spelsidans spel-informations-objekt: "games".

const games = [{
        name: "game4",
        description: "Best game",
        filename: "game4.PNG",
        alt: "img4",
        link: "https://google.com",
    },
    {
        name: "Dinorun",
        description: "Avoid the beige RGB haters",
        filename: "RGB_Dinorun.png",
        alt: "img3",
        link: "../pages/Dinorun.html",
    },
    {
        name: "Color Blast!",
        description: "Destroy infinite enemy spaceships",
        filename: "colorblast.PNG",
        alt: "img2",
        link: "../pages/colorblast.html",
    },
    {
        name: "Front-End Quiz",
        description: "Are you a front-end ninja?",
        filename: "game1.png",
        alt: "img1",
        link: "../pages/quiz.html",
    },
];


// For-loop för respektive spels spel-information, bilder, design och funktionalitet.

const dynamic = document.querySelector('.game-container');
for (let i = 0; i < games.length; i++) {
    const fetch = document.querySelector('.game-container').innerHTML;
    dynamic.innerHTML = `<div class="game" onclick="window.open('${games[i].link}', 'newurl.html','mywindow');" style="cursor: pointer;">
        <img src="../media/images/${games[i].filename}" alt="${games[i].alt}" class="thumbnail">
            <div class="content">
                <img  src="../media/images/${games[i].filename}" alt="${games[i].alt}" class="game-icon">
                    <div class="info">
                        <h4 class="game-name">${games[i].name}</h4>
                        <p class="game-desc">${games[i].description}</p>
                    </div>
            </div>
        </div>` + fetch;
}