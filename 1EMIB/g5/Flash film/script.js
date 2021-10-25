const news = [{
        Image: "journal.png",

    },
    {
        title: "Flash film",

    },
    {
        title: "Author: Eduardo Daniel",

    },
    {
        title: "12/03/2021 - 23:45",

    },
    {
        txt: "Warner Bros. released this Saturday (16) the first teaser of the film The Flash, starring Ezra Miller. The weft should rotate around the Flashpoint arc (or Flashpoint). In the story, the hero races against time to prevent his mother's murder, but the act has consequences in the timeline. Not many details about a plot in the film have yet been released, but it appears that Michael Keaton will return to the role of Gotham billionaire Bruce Wayne",

    },
    {
        txt: "The actor played the Batman in 1989's Batman and 1992's Batman: The Return. The cast also features Ben Affleck (also Bruce Wayne / Batman), Kiersey Clemons (Iris West), Maribel Verdú (Nora Allen ), Ron Livingston (Henry Allen), Saoirse-Monica Jackson and Rudy Mancuso. Directed by Andy Muschietti (It: The Thing and It - Chapter 2).",

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