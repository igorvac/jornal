const news = [
    {
        Image: "https://drive.google.com/file/d/18kzgNv_E2ZaXr7Nq7RauORtisrL76Z_-/view?usp=sharing",
        Image1: "https://p2.trrsf.com/image/fget/cf/1200/675/middle/images.terra.com/2021/09/13/51441195721_e127205a36_o.jpg",
        title: "Neymar",
        txt1: "Autor: Caio Eduardo Sampaio de Souza",
        txt2: "18/10/2021 - 16:10"
    },
    {
        txt1: "Neymar is the second greatest football player in the world, playing for Brazil, he has already",
        txt2: "scored more than 55 goals in 105 matches! The current champion of football. He is considered the",
        txt3: "main Brazilian footballer today and one of the best footballers in the world today. He won twice",
        txt4: "in a row the award for best South American player of the year, in 2011 and 2012, and a Puskás award,",
        txt5: "for most beautiful goal of the year, in 2011. Neymar debuted at the age of 18 and is currently the",
        txt6: "number 10, shirt, the main player and the second best scorer in the history of the Brazilian team,",
        txt7: "only behind Pelé. Off the field, Neymar is one of the most successful athletes in the world. Neymar",
        txt8: "plays as a striker, having played as a center forward, false 9, second striker and as a left winger.",
        txt9: "Neymar plays as a striker, having played as a center forward, false 9, second striker and as a left",
        txt10: "winger. Neymar received his first call-up on 26 July 2010 by coach Mano Menezes, who had just taken",
        txt11: "over. The call was for the friendly against the United States, in New Jersey, in the game, Neymar",
        txt12: "scored a head goal, his first goal with his shirt, right on his debut.",
        Image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/08/113689.jpg"
    }
    ];
    
    window.addEventListener("DOMContentLoaded", function(){
    
        const img = document.querySelector("#pic1");
        img.src = news[0].Image;
    
        const img2 = document.querySelector("#pic2");
        img2.src = news[0].Image1;

        const img3 = document.querySelector("#pic3");
        img3.src = news[1].Image;
    
        const titulo1 = document.querySelector("#tit1");
        const p1 = document.querySelector("#p1");
        const p2 = document.querySelector("#p2");
        titulo1.innerHTML = news[0].title;
        p1.innerHTML = news[0].txt1;
        p2.innerHTML = news[0].txt2;
    
        const Rt1 = document.querySelector("#Rt1");
        const Rt2 = document.querySelector("#Rt2");
        const Rt3 = document.querySelector("#Rt3");
        const Rt4 = document.querySelector("#Rt4");
        const Rt5 = document.querySelector("#Rt5");
        const Rt6 = document.querySelector("#Rt6");
        const Rt7 = document.querySelector("#Rt7");
        const Rt8 = document.querySelector("#Rt8");
        const Rt9 = document.querySelector("#Rte1");
        const Rt10 = document.querySelector("#Rt10");
        const Rt11 = document.querySelector("#Rt11");
        const Rt12 = document.querySelector("#Rt12");
        Rt1.innerHTML = news[1].txt1;
        Rt2.innerHTML = news[1].txt2;
        Rt3.innerHTML = news[1].txt3;
        Rt4.innerHTML = news[1].txt4;
        Rt5.innerHTML = news[1].txt5;
        Rt6.innerHTML = news[1].txt6;
        Rt7.innerHTML = news[1].txt7;
        Rt8.innerHTML = news[1].txt8;
        Rt9.innerHTML = news[1].txt9;
        Rt10.innerHTML = news[1].txt10;
        Rt11.innerHTML = news[1].txt11;
        Rt12.innerHTML = news[1].txt12;
    })