const news = [
    {
        Image: "https://drive.google.com/file/d/18kzgNv_E2ZaXr7Nq7RauORtisrL76Z_-/view?usp=sharing"
    },
    {
        txt1: "ESPORTE🏀",
        txt2: "POLITÍCA",
        txt3: "MILITAR",
        txt4: "MAIS NOTÍCIAS",
        txt5: "IMPACTOS MUNDIAIS"
    },
    {
        Image: "https://staticg.sportskeeda.com/editor/2021/03/55a41-16154091432184-800.jpg",
        txt: "Minecraft. A game created in 2009 by Noch",
        txt1: "persson a Swedish programmer. The game",
        txt2: "is very simple. You start out as a",
        txt3: "character named Steve, you can destroy",
        txt4: "or build...",
        title: "Minecraft X Terraria"
    },
    {
        Image: "http://www.cinetcetera.com.br/wp-content/uploads/2019/06/Spider-Man-vs-Venom-in-Web-of-Shadows-comic.jpg",
        txt: "'Venom' is a film that tells the story of",
        txt1: "an anti-hero, named Venom, based on the",
        txt2: "character of the same name from Marvel",
        txt3: "Comics. The Venom...",
        title: "Venom X Spider-Man"
    },
    {
        Image: "https://s.france24.com/media/display/fc38b2bc-b26c-11ea-b7b5-005056a964fe/2020-06-19T122447Z_1857599552_RC2CCH9IL1BR_RTRMADP_3_SOCCER-SPAIN-FCB-NEYMAR.JPG",
        txt: "Neymar is the second greatest football ",
        txt1: "player in the world, playing for Brazil,",
        txt2: "he has already scored more than 55 goals",
        txt3: "in 105 matches!...",
        title: "Neymar"
    },
    {
        Image: "https://exame.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-18-at-2.14.58-PM.jpeg",
        txt: "Pelé, is the greatest football player",
        txt1: "who ever lived, scoring more goals",
        txt2: "than the current Neymar, he has",
        txt3: "already scored more than 70...",
        title: "Pelé"
    },
    {
        Image: "https://triptins.com/wp-content/uploads/2020/10/Views-of-Mount-Everest.jpeg.webp",
        txt: "Mount Everest or, in its Portuguese form",
        txt1: "Evereste, also known in Nepal",
        txt2: "as Sagarmāthā, is the highest",
        txt3: "mountain on Earth. Its peak is...",
        title: "Mount Everest"
    },
    {
        Image: "https://www.diario1001viagens.com/uploads/1/2/9/3/12937111/6787809_orig.jpg?0",
        txt: "There are places worth visiting in",
        txt1: "life and others that need to be known",
        txt2: "before they disappear. In southern ",
        txt3: "Italy, however, there is a city...",
        title: "Vulcan of Italia"
    },
    {
        Image: "https://t2.tudocdn.net/548325?w=660&h=347",
        txt: "Ellon Musk - CEO and CTO of SpaceX,",
        txt1: "CEO of Tesla Motors, Vice President",
        txt2: "of OpenAI, Founder and CEO of ",
        txt3: "Neuralink, and Co-founder and...",
        title: "Ellon Musk and Jeff Bezos"
    }
];

window.addEventListener("DOMContentLoaded", function(){
    const img = document.querySelector("#pic1");
    img.src = news[0].Image;

    const categoria1 = document.querySelector("#categoria1");
    const categoria2 = document.querySelector("#categoria2");
    const categoria3 = document.querySelector("#categoria3");
    const categoria4 = document.querySelector("#categoria4");
    const categoria5 = document.querySelector("#categoria5");
    categoria1.innerHTML = news[1].txt1;
    categoria2.innerHTML = news[1].txt2;
    categoria3.innerHTML = news[1].txt3;
    categoria4.innerHTML = news[1].txt4;
    categoria5.innerHTML = news[1].txt5;

    const img1 = document.querySelector("#pict1");
    const h2Primeiro = document.querySelector("#tit1");
    const p1 = document.querySelector("#p1");
    const pc1 = document.querySelector("#pc1");
    const pc2 = document.querySelector("#pc2");
    const pc3 = document.querySelector("#pc3");
    const pc4 = document.querySelector("#pc4");
    img1.src = news[2].Image;
    h2Primeiro.innerHTML = news[2].title;
    p1.innerHTML = news[2].txt;
    pc1.innerHTML = news[2].txt1;
    pc2.innerHTML = news[2].txt2;
    pc3.innerHTML = news[2].txt3;
    pc4.innerHTML = news[2].txt4;

    const img2 = document.querySelector("#pict2");
    const h2Segundo = document.querySelector("#tit2");
    const p2 = document.querySelector("#p2");
    const pc5 = document.querySelector("#pc5");
    const pc6 = document.querySelector("#pc6");
    const pc7 = document.querySelector("#pc7");
    img2.src = news[3].Image;
    h2Segundo.innerHTML = news[3].title;
    p2.innerHTML = news[3].txt;
    pc5.innerHTML = news[3].txt1;
    pc6.innerHTML = news[3].txt2;
    pc7.innerHTML = news[3].txt3;

    const img3 = document.querySelector("#pict3");
    const h2Terceiro = document.querySelector("#tit3");
    const p3 = document.querySelector("#p3");
    const pco1 = document.querySelector("#pco1");
    const pco2 = document.querySelector("#pco2");
    const pco3 = document.querySelector("#pco3");
    img3.src = news[4].Image;
    h2Terceiro.innerHTML = news[4].title;
    p3.innerHTML = news[4].txt;
    pco1.innerHTML = news[4].txt1;
    pco2.innerHTML = news[4].txt2;
    pco3.innerHTML = news[4].txt3;

    const img4 = document.querySelector("#pict4");
    const h2Quarto = document.querySelector("#tit4");
    const p4 = document.querySelector("#p4");
    const pco4 = document.querySelector("#pco4");
    const pco5 = document.querySelector("#pco5");
    const pco6 = document.querySelector("#pco6");
    img4.src = news[5].Image;
    h2Quarto.innerHTML = news[5].title;
    p4.innerHTML = news[5].txt;
    pco4.innerHTML = news[5].txt1;
    pco5.innerHTML = news[5].txt2;
    pco6.innerHTML = news[5].txt3;

    const img5 = document.querySelector("#pict5");
    const h2Quinto = document.querySelector("#tit5");
    const p5 = document.querySelector("#p5");
    const pco7 = document.querySelector("#pco7");
    const pco8 = document.querySelector("#pco8");
    const pco9 = document.querySelector("#pco9");
    img5.src = news[6].Image;
    h2Quinto.innerHTML = news[6].title;
    p5.innerHTML = news[6].txt;
    pco7.innerHTML = news[6].txt1;
    pco8.innerHTML = news[6].txt2;
    pco9.innerHTML = news[6].txt3;

    const img6 = document.querySelector("#pict6");
    const h2Sexto = document.querySelector("#tit6");
    const p6 = document.querySelector("#p6");
    const pcon1 = document.querySelector("#pcon1");
    const pcon2 = document.querySelector("#pcon2");
    const pcon3 = document.querySelector("#pcon3");
    img6.src = news[7].Image;
    h2Sexto.innerHTML = news[7].title;
    p6.innerHTML = news[7].txt;
    pcon1.innerHTML = news[7].txt1;
    pcon2.innerHTML = news[7].txt2;
    pcon3.innerHTML = news[7].txt3;

    const img7 = document.querySelector("#pict7");
    const h2Setimo = document.querySelector("#tit7");
    const p7 = document.querySelector("#p7");
    const pcon4 = document.querySelector("#pcon4");
    const pcon5 = document.querySelector("#pcon5");
    const pcon6 = document.querySelector("#pcon6");
    img7.src = news[8].Image;
    h2Setimo.innerHTML = news[8].title;
    p7.innerHTML = news[8].txt;
    pcon4.innerHTML = news[7].txt1;
    pcon5.innerHTML = news[7].txt2;
    pcon6.innerHTML = news[7].txt3;
})