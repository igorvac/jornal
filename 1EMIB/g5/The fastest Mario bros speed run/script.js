const news = [{
        Image: "journal.png",

    },
    {
        title: "Comparing The flash and Riverdale",

    },
    {
        title: "Author: Juca Soares",

    },
    {
        title: "12/03/2021 - 23:45",

    },
    {
        txt: " Riverdale are two different series with different genres flash is about action and Science fiction and Riverdale is about romance drama and suspense, in this text I gone have some points to analyze, this first point is the script, the script off both series are bad really bad, in both cases the script takes a long time to give decent character development, only to arrest the audience watching the series for long and drawn-out 21 episodes per season, but in the case of the flash series this is best done whenever something is happening, so the flash script is better than Riverdale. ",

    },
    {
        txt: "The second point is characters, many characters from both series are boring and tiresome with idiotic motivations, or even lack motivation and do something just because the script dictates, the Riverdale series is just another teen series that tackles sexual themes just to win audiences from 13 to 17 years old, this kind of scene in this series makes it hard to believe that it was made by an adult, not an adolescent , Is this point the flash is better than Riverdale.",

    },
    {
        Image: "riverdale.jpg",

    },
    {
        Image: "Flash.jpg",

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