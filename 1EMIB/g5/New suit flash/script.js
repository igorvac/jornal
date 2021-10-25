const news = [{
        Image: "journal.png",

    },
    {
        title: "New suit flash",

    },
    {
        title: "Author: Lucas Guarido",

    },
    {
        title: "12/03/2021 - 23:45",

    },
    {
        txt: "During DC FanDome, fans got their first glimpse at Barry Allen's new suit for the upcoming eighth season of The Flash, with a notable detail being taken from the classic comic series' design. New images from the upcoming eighth season of The Flash display a brand new look for the world-famous speedster.",

    },
    {
        txt: "The Flash, played by Grant Gustin, has seen his suit change and evolve over the course of the past seven seasons of the series; there is one detail from the character's comic design that remained absent until now: the iconic Golden Boots. Fans have been theorizing and wondering if this version of Barry would ever wear the iconic boots and now those questions have finally been answered.",

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