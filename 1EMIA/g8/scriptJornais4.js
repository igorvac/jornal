const news = [
    {
        Image: "https://drive.google.com/file/d/18kzgNv_E2ZaXr7Nq7RauORtisrL76Z_-/view?usp=sharing",
        Image1: "https://www.reuters.com/resizer/-yVMtzhr_id66tNcyR8xFmjyk2k=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PDFNRLX46FPJ5N2OQQO62T5LWM.jpg",
        title: "Pelé",
        txt1: "Autor: Caio Eduardo Sampaio de Souza",
        txt2: "08/10/2021 - 20:00"
    },
    {
        txt1: "Pelé, is the greatest football player who ever lived, scoring more goals than the current Neymar, he",
        txt2: "has already scored more than 70 goals in just 99 matches! A true football king. He is widely regarded",
        txt3: "as one of the greatest athletes of all time. During his national team career, he won three FIFA World",
        txt4: "Caps 1958, 1962 and 1970, being the only player to do so. In clubs, he is the top scorer in the",
        txt5: "for most beautiful goal of the year, in 2011. Neymar debuted at the age of 18 and is currently the",
        txt6: "history of Santos and led them to several achievements. Averaging almost one goal per game throughout",
        txt7: "his career, Pelé was a specialist in kicking the ball with either foot, as well as anticipating his",
        txt8: "opponents' movements on the field. He could also go deep and take on a playmaker role, providing",
        txt9: "assists with his vision and passing skill, and also using his dribbling skills to outrun opponents.",
        txt10: "Pelé's number of goals is often reported by FIFA as 1281 goals in 1363 games. This number includes",
        txt11: "goals scored in club friendlies, such as the international tours that Pelé completed with Santos",
        txt12: "and New York Cosmos.",
        Image: "https://img.r7.com/images/pele-23102018102032974?dimensions=660x360&&&&resize=660x360&crop=660x360+0+68"
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