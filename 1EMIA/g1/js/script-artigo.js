const noticias = [
    {
        // ARTIGO CSGO X VALORANT
        img1: "https://a.espncdn.com/photo/2020/1204/r785603_1279x719_16-9.png",
        titulo: "CSGO or VALORANT",
        autor: "Author: Luiz Felipe Coelho Ramos",
        data: "12/09/2005 - 14:30",
        text1: "Counter-Strike: Global Offensive (or CS GO) and Valorant are the two biggest shooting games played currently. The recoil of CS GO is very similar to the real gun. And Valorant's have a smaller indentation than CS:GO's, so they are easier to be controlled. The CS GO economy is much fairer than the Valorant. CSGO has a much greater diversity of maps than any other game and CSGO has a range of weapon  damage that is more impactful than Valorant. That is, in my opinion Counter-Strike: Global Offensive is better than Valorant.",
        text2: "Counter-Strike: Global Offensive (or CS GO) and Valorant are the two biggest shooting games played currently. The recoil of CS GO is very similar to the real gun. And Valorant's have a smaller indentation than CS:GO's, so they are easier to be controlled. The CS GO economy is much fairer than the Valorant. CSGO has a much greater diversity of maps than any other game and CSGO has a range of weapon  damage that is more impactful than Valorant. That is, in my opinion Counter-Strike: Global Offensive is better than Valorant.",
        img2: "https://cdn.discordapp.com/attachments/666328888179294228/900887840152514600/fallen.jpg"
    },

    {
        // ARTIGO BURJ
        img1: "https://i.pinimg.com/originals/61/9a/70/619a70d000fb883fd02230615c689c39.jpg",
        titulo: "Burj Khalifa",
        autor: "Author: Vinicius Benatti Fonseca",
        data: "27/03/2017 - 11:08",
        text1: "The biggest building in the world is the Burj Khalifa, with 828 meters. It is located in Dubai, United Arab Emirates. It has 163 floors, there are so many floors that the elevator has a speed of 10 meters per second.Besides being the biggest building in the world, and the biggest tourist world in the city of Dubai. It was built in the period 2004-2009 and was only opened to the public on January 4, 2010, that is, 6 years after construction began.",
        text2: "The biggest building in the world is the Burj Khalifa, with 828 meters. It is located in Dubai, United Arab Emirates. It has 163 floors, there are so many floors that the elevator has a speed of 10 meters per second.Besides being the biggest building in the world, and the biggest tourist world in the city of Dubai. It was built in the period 2004-2009 and was only opened to the public on January 4, 2010, that is, 6 years after construction began.",
        img2: "https://cdn.discordapp.com/attachments/666328888179294228/901110373422350356/1-burj-khalifa.jpg"
    },

    {
        // Dark x Squid Game
        img1: "https://cdn.discordapp.com/attachments/666328888179294228/900907396841504858/darkxround6.jpg",
        titulo: "Dark X Squid Game",
        autor: "Author: Caio de Conti Bucciarelli",
        data: "05/11/2020 - 22:09",
        text1: "The Dark and Squid Game are two series created by netflix. Squid Game and newer than Dark. In my opinion Squid Game is better than dark, because the story of Dark is very confusing and fictional. However, Dark is still a fantastic series and much loved by many people around the world. Squid Game is a series from South Korea, while dark is a series from North America. Therefore, the dubbing and voice of actors from the series Dark are better than Squid Games.",
        text2: "The Dark and Squid Game are two series created by netflix. Squid Game and newer than Dark. In my opinion Squid Game is better than dark, because the story of Dark is very confusing and fictional. However, Dark is still a fantastic series and much loved by many people around the world. Squid Game is a series from South Korea, while dark is a series from North America. There fore, the dubbing and voice of actors from the series Dark are better than Squid Games.",
        img2: "https://cdn.discordapp.com/attachments/666328888179294228/901111284920094760/616QXs8yg0L.png",
    },

    {
        // Global Teacher Prize
        img1: "https://static.youthop.com/uploads/2021/04/global-teacher-prize-2021.jpg",
        titulo: "Global Teacher Prize",
        autor: "Author: Carlos Henrique Yamana de Abreu",
        data: "01/06/2013 - 18:12",
        text1: "A professor from Fiap School competed for the Global Teacher Prize and won the prize. This award is considered the “Nobel of Education”. He rewards the best professor among the nominees, who had an exceptional performance.There were two other famous professors who competed for the award, such as: Aristotle, Albert Einstein and Nancie Atwell.",
        text2: "A professor from Fiap School competed for the Global Teacher Prize and won the prize. This award is considered the “Nobel of Education”. He rewards the best professor among the nominees, who had an exceptional performance.There were two other famous professors who competed for the award, such as: Aristotle, Albert Einstein and Nancie Atwell.",
        img2: "https://cdn.discordapp.com/attachments/666328888179294228/901091006215254067/gtp-award.png"
    }

];

window.addEventListener("DOMContentLoaded", function(){

    // ARTIGO CSGO X VALORANT
    const imgartigocsgo = document.querySelector("#img1-artigo-csgo");
    const tituloartigocsgo = document.querySelector("#titulo-artigo-csgo");
    const autorartigocsgo = document.querySelector("#autor-artigo-csgo");
    const dataartigocsgo = document.querySelector("#data-artigo-csgo");
    const texto1artigocsgo = document.querySelector("#texto1-artigo-csgo");
    const texto2artigocsgo = document.querySelector("#texto2-artigo-csgo");
    const img2artigocsgo = document.querySelector("#img2-artigo-csgo");
    
    imgartigocsgo.src = noticias[0].img1;
    tituloartigocsgo.innerHTML = noticias[0].titulo;
    autorartigocsgo.innerHTML = noticias[0].autor;
    dataartigocsgo.innerHTML = noticias[0].data;
    texto1artigocsgo.innerHTML = noticias[0].text1;
    texto2artigocsgo.innerHTML = noticias[0].text2;
    img2artigocsgo.src = noticias[0].img2;
})

window.addEventListener("DOMContentLoaded", function(){
    // ARTIGO BURJ
    const img1artigoburj = document.querySelector("#img1-artigo-burj");
    const tituloartigoburj = document.querySelector("#titulo-artigo-burj");
    const autorartigoburj = document.querySelector("#autor-artigo-burj");
    const dataartigoburj = document.querySelector("#data-artigo-burj");
    const texto1artigoburj = document.querySelector("#texto1-artigo-burj");
    const texto2artigoburj = document.querySelector("#texto2-artigo-burj");
    const img2artigoburj = document.querySelector("#img2-artigo-burj");
    
    img1artigoburj.src = noticias[1].img1;
    tituloartigoburj.innerHTML = noticias[1].titulo;
    autorartigoburj.innerHTML = noticias[1].autor;
    dataartigoburj.innerHTML = noticias[1].data;
    texto1artigoburj.innerHTML = noticias[1].text1;
    texto2artigoburj.innerHTML = noticias[1].text2;
    img2artigoburj.src = noticias[1].img2;
})

window.addEventListener("DOMContentLoaded", function(){
    // ARTIGO Dark x Squid Game
    const img1artigodark = document.querySelector("#img1-artigo-dark");
    const tituloartigodark = document.querySelector("#titulo-artigo-dark");
    const autorartigodark = document.querySelector("#autor-artigo-dark");
    const dataartigodark = document.querySelector("#data-artigo-dark");
    const texto1artigodark = document.querySelector("#texto1-artigo-dark");
    const texto2artigodark = document.querySelector("#texto2-artigo-dark");
    const img2artigodark = document.querySelector("#img2-artigo-dark");
    
    img1artigodark.src = noticias[2].img1;
    tituloartigodark.innerHTML = noticias[2].titulo;
    autorartigodark.innerHTML = noticias[2].autor;
    dataartigodark.innerHTML = noticias[2].data;
    texto1artigodark.innerHTML = noticias[2].text1;
    texto2artigodark.innerHTML = noticias[2].text2;
    img2artigodark.src = noticias[2].img2;
})

window.addEventListener("DOMContentLoaded", function(){
    // ARTIGO Global Teacher Prize 
    const img1artigogtp = document.querySelector("#img1-artigo-gtp");
    const tituloartigogtp = document.querySelector("#titulo-artigo-gtp");
    const autorartigogtp = document.querySelector("#autor-artigo-gtp");
    const dataartigogtp = document.querySelector("#data-artigo-gtp");
    const texto1artigogtp = document.querySelector("#texto1-artigo-gtp");
    const texto2artigogtp = document.querySelector("#texto2-artigo-gtp");
    const img2artigogtp = document.querySelector("#img2-artigo-gtp");
    
    img1artigogtp.src = noticias[3].img1;
    tituloartigogtp.innerHTML = noticias[3].titulo;
    autorartigogtp.innerHTML = noticias[3].autor;
    dataartigogtp.innerHTML = noticias[3].data;
    texto1artigogtp.innerHTML = noticias[3].text1;
    texto2artigogtp.innerHTML = noticias[3].text2;
    img2artigogtp.src = noticias[3].img2;
})