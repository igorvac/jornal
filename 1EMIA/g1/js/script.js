const noticias = [
    {
        titulo: "CSGO or VALORANT",
        text: "Counter-Strike: Global Offensive (CSGO) is better than Valorant.",
        img: "https://cdn.discordapp.com/attachments/666328888179294228/900776340989546586/valorant-csgo.jpg",
    },

    {
        titulo: "Burj Khalifa",
        text: "The biggest building in the world is the Burj Khalifa.",
        img: "https://cdn.discordapp.com/attachments/666328888179294228/900778999557537802/Capa_2.jpg",
    },

    {
        titulo: "Dark x Squid Game",
        text: "The Dark series is better than the Squid Game series.",
        img: "https://cdn.discordapp.com/attachments/666328888179294228/900854686880514089/R6Dark.png",
    },

    {
        titulo: "Global Teacher Prize",
        text: "Professor in Global teacher Prize.",
        img: "https://cdn.discordapp.com/attachments/708043894339666040/900783848806297671/global-teacher-prize-736x341.jpg",
    }
];

window.addEventListener("DOMContentLoaded", function(){

    //csgo x valorant
    const imgcsxvava = document.querySelector("#img-csxvava");
    const h1csxvava = document.querySelector("#h1-csxvava");
    const pcsxvava = document.querySelector("#p-csxvava");

    h1csxvava.innerHTML = noticias[0].titulo;
    pcsxvava.innerHTML = noticias[0].text;
    imgcsxvava.src = noticias[0].img;

    //burj khalifa
    const imgburj = document.querySelector("#img-burj");
    const h1burj = document.querySelector("#h1-burj");
    const pburj = document.querySelector("#p-burj");

    h1burj.innerHTML = noticias[1].titulo;
    pburj.innerHTML = noticias[1].text;
    imgburj.src = noticias[1].img;

    //dark x squid game
    const imgdarkr6 = document.querySelector(".img-darkr6");
    const h1darkr6 = document.querySelector(".h1-darkr6");
    const pdarkr6 = document.querySelector(".p-darkr6");

    h1darkr6.innerHTML = noticias[2].titulo;
    pdarkr6.innerHTML = noticias[2].text;
    imgdarkr6.src = noticias[2].img;

    //dark x squid game 2
    const imgdarkr62 = document.querySelector("#img-darkr62");
    const h1darkr62 = document.querySelector("#h1-darkr62");
    const pdarkr62 = document.querySelector("#p-darkr62");

    h1darkr62.innerHTML = noticias[2].titulo;
    pdarkr62.innerHTML = noticias[2].text;
    imgdarkr62.src = noticias[2].img;

    //Global Teacher Prize
    const imgGTP = document.querySelector(".img-GTP");
    const h1GTP = document.querySelector(".h1-GTP");
    const pGTP = document.querySelector(".p-GTP");

    h1GTP.innerHTML = noticias[3].titulo;
    pGTP.innerHTML = noticias[3].text;
    imgGTP.src = noticias[3].img;

    //Global Teacher Prize 2
    const imgGTP2 = document.querySelector("#img-GTP2");
    const h1GTP2 = document.querySelector("#h1-GTP2");
    const pGTP2 = document.querySelector("#p-GTP2");

    h1GTP2.innerHTML = noticias[3].titulo;
    pGTP2.innerHTML = noticias[3].text;
    imgGTP2.src = noticias[3].img;
})



