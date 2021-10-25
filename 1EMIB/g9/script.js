const news = [
    {
        tit: "OUTER BANKS VS STRANGER THINGS",
        text:"The fans talk abou the series Outer Banks and Stranger Things. Which one has the best plot?",
        img: "https://cdn.discordapp.com/attachments/637682526063820821/900773952102727750/Untitled-2.png"
    },
    {
        tit: "RAFT VS MINECRAFT",
        text:"The community discuss about Minecraft and Raft. Which one is better??",
        img: "https://cdn.discordapp.com/attachments/637682526063820821/900772253774516234/Untitled-1.png"
    },
    {
        tit: "Quinn Elizabeth II",
        text:"The Quenn Elizabeth II went to the hospital and people get scared.",
        img: "https://cdn.discordapp.com/attachments/568273480303378433/900890175582908437/Vitor_1.jpg"
    },
    {
        tit: "The biggest tongue in the world",
        text:"Guinness Book of Records with the largest tongue in the world",
        img: "https://cdn.discordapp.com/attachments/568273480303378433/900890702408454245/Vitor_2.jpg"
    },
    {
        tit: "The biggest tongue in the world",
        text:"Guinness Book of Records with the largest tongue in the world",
        img: "https://cdn.discordapp.com/attachments/568273480303378433/900890702408454245/Vitor_2.jpg"
    },
    {
        tit: "Quinn Elizabeth II",
        text:"The Quenn Elizabeth II went to the hospital and people get scared",
        img: "https://cdn.discordapp.com/attachments/568273480303378433/900890175582908437/Vitor_1.jpg"
    }
];

window.addEventListener("DOMContentLoaded", function(){
    const h_1 = document.querySelector("#h_1");
    const p_1 = document.querySelector("#p_1");
    const img_1 = document.querySelector("#img_1");

    h_1.innerHTML = news[0].tit;
    p_1.innerHTML = news[0].text;
    img_1.src = news[0].img;

    
    const h_2 = document.querySelector("#h_2");
    const p_2 = document.querySelector("#p_2");
    const img_2 = document.querySelector("#img_2");

    h_2.innerHTML = news[1].tit;
    p_2.innerHTML = news[1].text;
    img_2.src = news[1].img;

    
    const h_3 = document.querySelector("#h_3");
    const p_3 = document.querySelector("#p_3");
    const img_3 = document.querySelector("#img_3");

    h_3.innerHTML = news[2].tit;
    p_3.innerHTML = news[2].text;
    img_3.src = news[2].img;

    
    const h_4 = document.querySelector("#h_4");
    const p_4 = document.querySelector("#p_4");
    const img_4 = document.querySelector("#img_4");

    h_4.innerHTML = news[3].tit;
    p_4.innerHTML = news[3].text;
    img_4.src = news[3].img;

    
    const h_5 = document.querySelector("#h_5");
    const p_5 = document.querySelector("#p_5");
    const img_5 = document.querySelector("#img_5");

    h_5.innerHTML = news[4].tit;
    p_5.innerHTML = news[4].text;
    img_5.src = news[4].img;

    
    const h_6 = document.querySelector("#h_6");
    const p_6 = document.querySelector("#p_6");
    const img_6 = document.querySelector("#img_6");

    h_6.innerHTML = news[5].tit;
    p_6.innerHTML = news[5].text;
    img_6.src = news[5].img;
});



