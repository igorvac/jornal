const news = [{
        Image: "journal.png",

    },
    {
        title: "Comparing The flash and Riverdale",

    },
    {
        title: "Author: Joao Pedro",

    },
    {
        title: "12/03/2021 - 23:45",

    },
    {
        txt: " The North American Streamer and YouTuber called Niftski managed to end an entire match of Mario bros in (4m54s97ms), surpassing in less than a second the previous mark that stopped at (4m55s23ms).",

    },
    {
        txt: "The video was shared by the official youtuber channel as well as on their social networks and shows the entire match, with the timer running on the left of the screen.",

    },
    {
        Image: "banner.png",

    },
    {
        Image: "banner2.png",

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