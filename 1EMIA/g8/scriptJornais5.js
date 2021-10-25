const news = [
    {
        Image: "https://drive.google.com/file/d/18kzgNv_E2ZaXr7Nq7RauORtisrL76Z_-/view?usp=sharing",
        Image1: "https://altamontanha.com/wp-content/uploads/2021/06/monte-everest-og-702x459.jpg",
        title: "Mount Everest",
        txt1: "Autor: Oliver Kanai de Trindade",
        txt2: "15/10/2021 - 15:00"
    },
    {
        txt1: "Mount Everest or, in its Portuguese form, Evereste, also known in Nepal as Sagarmāthā, is the highest",
        txt2: "mountain on Earth. Its peak is 8,848.86 meters above sea level, in the Himal Mahalangur sub mountain",
        txt3: "range, in the Himalayas.",
        txt4: "Everest attracts many climbers, some of them experienced. There are two main climbing routes: one",
        txt5: "approaching the summit from the south-east face in Nepal and the other from the north face in Tibet.",
        txt6: "While the default route does not pose substantial challenges to the climbing technique, Everest does",
        txt7: "pose hazards such as mountain sickness, weather conditions, wind, as well as important objective",
        txt8: "hazards such as avalanches. In 2016, there were well over 200 corpses on the mountain, some of",
        txt9: "which even serve as landmarks. They made several movies about this mountain, but one of the best",
        txt10: "known is Everest, the movie talks about the 1966 accident in which 9 people died and Beck Weathers",
        txt11: "one of the survivors miraculously managed to reach Everest base camp.",
        Image: "https://www.paraquedismoskycompany.com.br/wp-content/uploads/2021/01/conhecer-o-monte-everest.png"
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
        const Rt9 = document.querySelector("#Rt9");
        const Rt10 = document.querySelector("#Rt10");
        const Rt11 = document.querySelector("#Rt11");
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
    })