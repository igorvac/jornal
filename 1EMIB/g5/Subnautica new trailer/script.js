const news = [{
        Image: "journal.png",

    },
    {
        title: "Subnautica: Below zero new trailer",

    },
    {
        title: "Author: Jessica Yamada",

    },
    {
        title: "12/03/2021 - 23:45",

    },
    {
        txt: "After several years of early access, Subnautica: Below Zero will finally hit the PC in May (via Steam and Epic Store), but also Switch, PS4, PS5, Xbox One, and Xbox Series X|S.",

    },
    {
        txt: "The release date is set for May 14, and you can even book it for €29.99, but before that, how about a new cinematic trailer? The video presents a tantalizing glimpse into life on the 4546B before the mysterious events that will take it to the planet.",

    },
    {
        Image: "banner.jpg",

    },
    {
        Image: "banner1.jpg",

    },

]
window.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector("#pic1");
    img.src = news[0].Image;
    const h1 = document.querySelector("#title");
    h1.innerHTML = news[1].title;
    const h2 = document.querySelector("#subtitle");
    h2.innerHTML = news[2].title;
    const h3 = document.querySelector("#date");
    h3.innerHTML = news[3].title;
    const p = document.querySelector("#text");
    p.innerHTML = news[4].txt;
    const p1 = document.querySelector("#text1");
    p1.innerHTML = news[5].txt;
    const img1 = document.querySelector("#img1");
    img1.src = news[6].Image;
    const img2 = document.querySelector("#img2");
    img2.src = news[7].Image;
})