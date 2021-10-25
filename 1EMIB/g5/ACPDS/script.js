const news = [{
        txt: "Minecraft",
    },
    {
        txt: "Subnautica",
    },
    {
        txt: "Riverdale",
    },
    {
        txt: "The Flash",
    },
    {
        txt: "Fallguys",
    },
    {
        Image: "sub.png",
        txt: "Subnautica and Minecraft are both game about exploration and survivor, in my opnion subnautica is more interesting then Minecraft, and I gone explain the reasons off why this is my thought.",
        title: "Comparing Subnautica and Minecraft "
    },
    {
        Image: "flash.png",
        txt: "Riverdale are two different series with different genres flash is about action and Science fiction and Riverdale is about romance drama and suspense",
        title: "Comparing The flash and Riverdale"
    },
    {
        Image: "mario.jpg",
        txt: "The North American Streamer and YouTuber called Niftski managed to end an entire match of Mario bros in (4m54s97ms)",
        title: "The fastest Mario bros speed run."
    },
    {
        Image: "fallguys.jpg",
        txt: "The game fall guys, managed to reach the most played game mark in the world, declining after a while, what few people don't know is that fall guys were created in a classroom in a school in the United States by a group of 6 people and the teacher. Fall guys is a game that can be played with friends, your objective along with other 49 players is to pass the levels facing several obstacles, whoever comes last is eliminated from the game.",
        title: "Students create game in class, and it becomes the most played game in the world."
    },
    {
        Image: "theflash2.jpg",
        txt: "During DC FanDome, fans got their first glimpse at Barry Allen's new suit for the upcoming eighth season of The Flash",
        title: "New suit flash"
    },
    {
        Image: "mineupdate.png",
        txt: "Want to know more about the Minecraft 1.19 update? The Wild Update was revealed at Minecraft Live 2021",
        title: "Minecraft update 1.19"
    },
    {
        Image: "belowzero.jpg",
        txt: "After several years of early access, Subnautica: Below Zero will finally hit the PC in May (via Steam and Epic Store)",
        title: "Subnautica new trailer"
    },
    {
        Image: "flashfilm.png",
        txt: "Warner Bros. released this Saturday (16) the first teaser of the film The Flash, starring Ezra Miller.",
        title: "Flash film"
    },
    {
        Image: "journal.png",

    }
]
window.addEventListener("DOMContentLoaded", function() {
    const pbar = document.querySelector("#bar1");
    pbar.innerHTML = news[0].txt;
    const pbar2 = document.querySelector("#bar2");
    pbar2.innerHTML = news[1].txt;
    const pbar3 = document.querySelector("#bar3");
    pbar3.innerHTML = news[2].txt;
    const pbar4 = document.querySelector("#bar4");
    pbar4.innerHTML = news[3].txt;
    const pbar5 = document.querySelector("#bar5");
    pbar5.innerHTML = news[4].txt;
    const img = document.querySelector("#pic1");
    const h2 = document.querySelector("#tit1");
    const p = document.querySelector("#p1");
    img.src = news[5].Image;
    h2.innerHTML = news[5].title;
    p.innerHTML = news[5].txt;
    const img2 = document.querySelector("#pic2");
    const h22 = document.querySelector("#tit2");
    const p2 = document.querySelector("#p2");
    img2.src = news[6].Image;
    h22.innerHTML = news[6].title;
    p2.innerHTML = news[6].txt;
    const img3 = document.querySelector("#pic3");
    const h23 = document.querySelector("#tit3");
    const p3 = document.querySelector("#p3");
    img3.src = news[7].Image;
    h23.innerHTML = news[7].title;
    p3.innerHTML = news[7].txt;
    const img4 = document.querySelector("#pic4");
    const h24 = document.querySelector("#tit4");
    const p4 = document.querySelector("#p4");
    img4.src = news[8].Image;
    h24.innerHTML = news[8].title;
    p4.innerHTML = news[8].txt;
    const img5 = document.querySelector("#pic5");
    const h25 = document.querySelector("#tit5");
    const p5 = document.querySelector("#p5");
    img5.src = news[9].Image;
    h25.innerHTML = news[9].title;
    p5.innerHTML = news[9].txt;
    const img6 = document.querySelector("#pic6");
    const h26 = document.querySelector("#tit6");
    const p6 = document.querySelector("#p6");
    img6.src = news[10].Image;
    h26.innerHTML = news[10].title;
    p6.innerHTML = news[10].txt;
    const img7 = document.querySelector("#pic7");
    const h27 = document.querySelector("#tit7");
    const p7 = document.querySelector("#p7");
    img7.src = news[11].Image;
    h27.innerHTML = news[11].title;
    p7.innerHTML = news[11].txt;
    const img8 = document.querySelector("#pic8");
    const h28 = document.querySelector("#tit8");
    const p8 = document.querySelector("#p8");
    img8.src = news[12].Image;
    h28.innerHTML = news[12].title;
    p8.innerHTML = news[12].txt;
    const img9 = document.querySelector("#pic9");
    img9.src = news[13].Image;
})