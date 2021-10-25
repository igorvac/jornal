const news = [{
        Image: "journal.png",

    },
    {
        title: "Minecraft update 1.19",

    },
    {
        title: "Author: Juliana Paiva",

    },
    {
        title: "12/03/2021 - 23:45",

    },
    {
        txt: "Want to know more about the Minecraft 1.19 update? The Wild Update was revealed at Minecraft Live 2021, where we got details about all of the new additions, including frogs, fireflies, and mangrove swamps. This will be the first Minecraft update in 2022, and will be the next major update after Caves and Cliffs part 2.",

    },
    {
        txt: "This guide will explain everything that you can expect with Minecraft 1.19, so that you don’t go wild looking for details all over. Minecraft 1.19, also known as The Wild Update, is currently set to release in 2022. As we saw with 2021’s Caves and Cliffs Update, release plans can change quite drastically, and we’ll be sure to update you here with any news regarding the release plans for 1.19.",

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