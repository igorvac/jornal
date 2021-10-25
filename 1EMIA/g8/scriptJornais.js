const news = [
    {
        Image: "https://drive.google.com/file/d/18kzgNv_E2ZaXr7Nq7RauORtisrL76Z_-/view?usp=sharing"
    },
    {
        Image: "https://p7c2f4u4.rocketcdn.me/wp-content/uploads/2020/08/Updates-terraria-vs-minecraft.png"
    },
    {
        title: "Minecraft X Terraria",
        txt1: "Autor: Caio Eduardo Sampaio de Souza",
        txt2: "21/10/2021 - 14:25"
    },
    {
        txt1: "Minecraft. A game created in 2009 by Noch Persson, a Swedish programmer. The game is very simple.",
        txt2: "You start out as a character named Steve, you can destroy or build anything you want, and your main goal",
        txt3: "is to reach the other world and kill a giant monster named Ender Dragon." ,
        txt4: "Terraria. It began to be produced in 2011 by game developer Re-Logic. It has the same ",
        txt5: "theme of destroying and building, but with some limitations. And this game doesn´t have ",
        txt6: "a specific 'goal', nor a main boss, you do it if you want to do it, almost like Minecraft,",
        txt7: "but completely different. An estimated 50,000 copies of the  game were sold on the way of",
        Image: "https://picsum.photos/450/250",
        txt8: "its release, with over 17,000 players online. The game received positive reviews from critics."
    }
];

window.addEventListener("DOMContentLoaded", function(){
    const img = document.querySelector("#pic1");
    img.src = news[0].Image;

    const img2 = document.querySelector("#pic2");
    img2.src = news[1].Image;

    const img3 = document.querySelector("#pic3");
    img3.src = news[3].Image;

    const titulo1 = document.querySelector("#tit1");
    const p1 = document.querySelector("#p1");
    const p2 = document.querySelector("#p2");
    titulo1.innerHTML = news[2].title;
    p1.innerHTML = news[2].txt1;
    p2.innerHTML = news[2].txt2;

    const Rt1 = document.querySelector("#Rt1");
    const Rt2 = document.querySelector("#Rt2");
    const Rt3 = document.querySelector("#Rt3");
    const Rt4 = document.querySelector("#Rt4");
    const Rt5 = document.querySelector("#Rt5");
    const Rt6 = document.querySelector("#Rt6");
    const Rt7 = document.querySelector("#Rt7");
    const Rt8 = document.querySelector("#Rt8");
    Rt1.innerHTML = news[3].txt1;
    Rt2.innerHTML = news[3].txt2;
    Rt3.innerHTML = news[3].txt3;
    Rt4.innerHTML = news[3].txt4;
    Rt5.innerHTML = news[3].txt5;
    Rt6.innerHTML = news[3].txt6;
    Rt7.innerHTML = news[3].txt7;
    Rt8.innerHTML = news[3].txt8;
})