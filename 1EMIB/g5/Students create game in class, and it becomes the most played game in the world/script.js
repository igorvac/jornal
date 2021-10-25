const news = [{
        Image: "journal.png",

    },
    {
        title: "Students create game in class, and it becomes the most played game in the world",

    },
    {
        title: "Author: Carlos Almeida",

    },
    {
        title: "12/03/2021 - 23:45",

    },
    {
        txt: "The game fall guys, managed to reach the most played game mark in the world, declining after a while, what few people don't know is that fall guys were created in a classroom in a school in the United States by a group of 6 people and the teacher.",

    },
    {
        txt: "Fall guys is a game that can be played with friends, your objective along with other 49 players is to pass the levels facing several obstacles, whoever comes last is eliminated from the game.",

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