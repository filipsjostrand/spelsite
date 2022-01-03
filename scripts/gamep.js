const games = [{
        name: "game4",
        description: "Best game",
        filename: "game4.PNG",
        alt: "img4",
        link: "https://google.com",
    },
    {
        name: "game3",
        description: "Great game",
        filename: "game3.PNG",
        alt: "img3",
        link: "https://duckduckgo.com",
    },
    {
        name: "game2",
        description: "Good game",
        filename: "game2.PNG",
        alt: "img2",
        link: "https://bing.com",
    },
    {
        name: "",
        description: "QUIZ TIME!",
        filename: "game1.png",
        alt: "img1",
        link: "../pages/quiz.html",
    },
];

const dynamic = document.querySelector('.game-container');
for (let i = 0; i < games.length; i++) {
    const fetch = document.querySelector('.game-container').innerHTML;
    dynamic.innerHTML = `<div class="game" onclick="window.open('${games[i].link}', 'newurl.html','mywindow');" style="cursor: pointer;">
        <img src="../media/images/${games[i].filename}" alt="${games[i].alt}" class="thumbnail">
            <div class="content">
                <img  src="../media/images/${games[i].filename}" alt="${games[i].alt}" class="game-icon">
                    <div class="info">
                        <h4 class="title">${games[i].description}</h4>
                        <p class="game-name">${games[i].name}</p>
                    </div>
            </div>
        </div>` + fetch;
}