const news = [{
        Image: "journal.png",

    },
    {
        title: "Comparing Subnautica and Minecraft ",

    },
    {
        title: "Author: Jonas Da Silva",

    },
    {
        title: "12/03/2021 - 23:45",

    },
    {
        txt: "  Subnautica and Minecraft are both game about exploration and survivor, in my opnion subnautica is more interesting then Minecraft, and I gone explain the reasons off why this is my thought. The first point I going to present is the history, the history off subnautica is better than Minecraft, the reason off this is because subnautica have radios, and cutscenes about the history. And the second point is the gameplay, the gameplay in subnautica is cooler than Minecraft, in terms of gameplay.",

    },
    {
        txt: "  The last point I wone to introduce is price, in this point I gone compare the price off Minecraft and subnautica, the price off subnautica is 60R$ and Minecraft cost 24,90R$ this is the basic version, the complete version is 89,89R$, that means Minecraft is more expensing the subnautica in the complete version but in the basic version subnautica is more expensive than Minecraft.",

    },
    {
        Image: "subnautica.jpg",

    },
    {
        Image: "nether.jpg",

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