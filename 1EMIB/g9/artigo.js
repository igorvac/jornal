const artigo = [
    {
        imgl: "https://cdn.discordapp.com/attachments/637682526063820821/900850896580276324/logo2.png",
        imgg: "https://cdn.discordapp.com/attachments/637682526063820821/900772253774516234/Untitled-1.png",
        tit: "RAFT VS MINECRAFT",
        autor: "Gabriel Garuti",
        data: "21/10 - 18:02",
        text: "     I think minecraft is worse than Raft, because Raft have better graphics, more itens, is more easier and is very different comparing the other games which you have to survive, in Raft you are lost and spawn on a piece of wood and need to collect the trash in the sea to upgrade your boat, you can find islands, fishes and even a shark.The final of the game you find a abondened metal structure, exploring the structure you find a room with a board discovering you are not lost, the world is flooded. But im minecraft is always the same, you collect wood build your house, mine ores in caves and kill the final boss, which is a black dragon, the name of the dragon is Ender Dragon, to defeat him you have to break some crystals, these crystals cure the dragon, defeating him you beat the game. But also of the games you can play with your friends, that turns everything cooler.",
        text2: "",
        imge: "https://cdn.discordapp.com/attachments/637682526063820821/900850896580276324/logo2.png"   
    },
    {
        imgl: "https://cdn.discordapp.com/attachments/637682526063820821/900850896580276324/logo2.png",
        imgg: "https://febreteen.com.br/wp-content/uploads/2020/09/Outer-Banks-Stranger-Things.jpg",
        tit: "OUTER BANKS VS STRANGER THINGS",
        autor: "Gabriel Garuti",
        data: "21/10 - 18:55",
        text: "     Launched in 2020, the plot centers on John B. (Chase Strokes), a young resident of the island of the Outer Banks, who is part of a group known as the Pogues — meaning, the local, ignored poor. There, a new summer is about to start, alongside friends JJ (Rudy Pankow), Kiara (Madison Bailey) and Pope (Jonathan Daviss). However, they find a destroyed boat that takes them on an intense treasure hunt, while the protagonist wants to find out what happened to his missing father. And, as a teen plot, it obviously has room for romance between John B. and wealthy Sarah (Madelyn Cline). On November 6, 1983 in the small town of Hawkins, Indiana, 12-year-old Will Byers mysteriously disappears. Will's mother, Joyce, becomes frantic and tries to find Will while police chief Jim Hopper starts to investigate, and so do Will's friends Dustin, Mike and Lucas. The next day, a psychokinetic girl who knows Will's whereabouts is found by the boys. As they discover the truth, a sinister government agency tries to cover them up, while a more insidious force lurks just below the surface.",
        text2: "",
        imge: "https://cdn.discordapp.com/attachments/637682526063820821/900850896580276324/logo2.png"   
    },
];


window.addEventListener("DOMContentLoaded", function(){
    const h_1 = document.querySelector("#h_1");
    const h_2 = document.querySelector("#h_2");
    const h_3 = document.querySelector("#h_3");
    const img_1 = document.querySelector("#img_1");
    const img_2 = document.querySelector("#img_2");
    const img_3 = document.querySelector("#img_3");
    const p_1 = document.querySelector("#p_1");


    h_1.innerHTML = artigo[0].tit;
    h_2.innerHTML = artigo[0].autor;
    h_3.innerHTML = artigo[0].data;
    p_1.innerHTML = artigo[0].text;
    img_1.src = artigo[0].imgl;
    img_2.src = artigo[0].imgg;
    img_3.src = artigo[0].imge;
});

window.addEventListener("DOMContentLoaded", function(){
    const h11 = document.querySelector("#h11");
    const h22 = document.querySelector("#h22");
    const h33 = document.querySelector("#h33");
    const img11 = document.querySelector("#img11");
    const img22 = document.querySelector("#img22");
    const img33 = document.querySelector("#img33");
    const p11 = document.querySelector("#p11");


    h11.innerHTML = artigo[1].tit;
    h22.innerHTML = artigo[1].autor;
    h33.innerHTML = artigo[1].data;
    p11.innerHTML = artigo[1].text;
    img11.src = artigo[1].imgl;
    img22.src = artigo[1].imgg;
    img33.src = artigo[1].imge;

});


