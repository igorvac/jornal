const news = [
    {
        Image: "https://drive.google.com/file/d/18kzgNv_E2ZaXr7Nq7RauORtisrL76Z_-/view?usp=sharing",
        Image1: "https://exame.com/wp-content/uploads/2017/02/etna.jpg",
        title: "Vulcan in Italia",
        txt1: "Autor: Oliver Kanai de Trindade",
        txt2: "18/10/2021 - 08:00"
    },
    {
        txt1: "There are places worth visiting in life and others that need to be known before they disappear. In",
        txt2: "southern Italy, however, there is a city that, despite having lost all of its inhabitants and having",
        txt3: "been buried under 5 meters of volcanic rubble, not only refuses to die but continues to lavishly hand",
        txt4: "out utensils, frescoes and inscriptions that deserve it. be contemplated and revered. A World Heritage",
        txt5: "Site, Pompeii is less visited than the Coliseum, but in terms of preservation and size, it is",
        txt6: "unbeatable as an archaeological site, even when compared to the wonders of Egypt. Covered by a blanket",
        txt7: "of ash and pumice poured by the fury of Vesuvius, whose eruption, in AD 79, took the lives of all",
        txt8: "the inhabitants who did not escape in time, the city is now undergoing a new cycle of excavations,",
        txt9: "which has I aim to bring to light relics that are in danger of being damaged under the weight of the",
        txt10: "same debris that encapsulated them nearly 2,000 years ago.  Even though it's sad, the most interesting",
        txt11: "thing about this volcano is that the people who didn't escape in time were petrified.",
        Image: "https://static.escolakids.uol.com.br/2020/11/vulcao-indonesia.jpg"
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