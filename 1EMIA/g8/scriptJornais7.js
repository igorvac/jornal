const news = [
    {
        Image: "https://drive.google.com/file/d/18kzgNv_E2ZaXr7Nq7RauORtisrL76Z_-/view?usp=sharing",
        Image1: "https://exame.com/wp-content/uploads/2021/01/muskbezos.jpg",
        title: "Ellon Musk and Jeff Bezos",
        txt1: "Autor: Oliver Kanai de Trindade",
        txt2: "18/10/2021 - 08:00"
    },
    {
        txt1: "Ellon Musk - CEO and CTO of SpaceX, CEO of Tesla Motors, Vice President of OpenAI, Founder and",
        txt2: "CEO of Neuralink, and Co-founder and President of SolarCity.",
        txt3: "Jeff Bezos - Founder, President and CEO of Amazon.",
        txt4: "These two are the two richest people in the world, but even being the richest there is still a",
        txt5: "difference, between Ellon Musk and Jeff Bezos, being Ellon Musk the richest with a 'small' difference",
        txt6: "between them, but even with that difference they still have a lot of money.",
        Image: "https://conteudo.imguol.com.br/c/noticias/19/2021/05/02/elon-musk-e-jeff-bezos-1619973541761_v2_450x337.jpg"
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
        Rt1.innerHTML = news[1].txt1;
        Rt2.innerHTML = news[1].txt2;
        Rt3.innerHTML = news[1].txt3;
        Rt4.innerHTML = news[1].txt4;
        Rt5.innerHTML = news[1].txt5;
        Rt6.innerHTML = news[1].txt6;
    })