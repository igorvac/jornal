const dados = [
    {
        imagem: "https://pbs.twimg.com/profile_images/614128989112782848/S8826jXM.jpg",

        imagemP: "http://cdn.espn.com.br/image/wide/622_8c0594db-0c41-4f30-a758-00987565d04e.jpg",
        
        titulo: "Sports",

        subtitulo: "Author: Luiza Saracol Ribeiro",

        data: "21/10/2021 - 00:00",

        conteudo: "Football is a variation of rugby, allowing players brute strength and agility. It emerged from a series of three games between Harvard and McGill, Montreal, in 1867 and is very famous to this day. But only in the 1930s, it was popular for women to play and the 1940s was when the rules were adapted to be less violent and aggressive, only then was it more respected.",
        
        submateria: "The whole story and its evolution are very important, but even today it is absurd to see that while the Men's League moves millions of dollars to its players, athletes often have to pay to be able to train. But speaking of evolutions, the first female professional league in history began to be played in May 2021 in the United States. The league has 32 teams spread across two conferences and is considered a milestone for women in the sport. We know that in this macho world, these achievements are very relevant for female participation in society. Therefore, what we must do is always encourage women to have a greater participation, so that there is no longer a distinction between 'male' sport and 'female' sport.",
       
        subimagem: "https://s2.glbimg.com/VQOPz1jqSUDKvWXtr_zi4zWeUjE=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/1/Y/vjfxyGR669mi4j7D0zNg/49044568397-0d99b39345-k.jpg"
    }
]

window.addEventListener("DOMContentLoaded", function(){ 
    let img = [];
    let img1 = [];
    let ttl = [];
    let subt = [];
    let dt = [];
    let cont = [];
    let subm = [];
    let subi = [];

    for (let i = 0; i < dados.length;i++) {
        img.push(
            document.querySelector("#img" + i)
        ); 
    } 

    for (let i = 0; i < dados.length;i++) {
        img1.push(
            document.querySelector("#img1" + i)
        ); 
    } 

    for (let i = 0; i < dados.length;i++) {
        ttl.push(
            document.querySelector("#ttl" + i)
        );
    }

    for (let i = 0; i < dados.length;i++) {
        subt.push(
            document.querySelector("#subt" + i)
        );
    }

    for (let i = 0; i < dados.length;i++) {
        dt.push(
            document.querySelector("#dt" + i)
        );
    }

    for (let i = 0; i < dados.length;i++) {
        cont.push(
            document.querySelector("#cont" + i)
        );
    }

    for (let i = 0; i < dados.length;i++) {
        subm.push(
            document.querySelector("#subm" + i)
        );
    }

    for (let i = 0; i < dados.length;i++) {
        subi.push(
            document.querySelector("#subi" + i)
        );
    }


    
    for (let i = 0; i < dados.length;i++) {
    img[i].src       = dados[i].imagem;
    }

    for (let i = 0; i < dados.length;i++) {
        img1[i].src       = dados[i].imagemP;
        }
    
    for (let i = 0; i < dados.length;i++) {
    ttl[i].innerHTML = dados[i].titulo;
    }

    for (let i = 0; i < dados.length;i++) {
    subt[i].innerHTML = dados[i].subtitulo;
    }

    for (let i = 0; i < dados.length;i++) {
    dt[i].innerHTML = dados[i].data;
    }

    for (let i = 0; i < dados.length;i++) {
    cont[i].innerHTML = dados[i].conteudo;
    }

    for (let i = 0; i < dados.length;i++) {
    subm[i].innerHTML = dados[i].submateria;
    }

    for (let i = 0; i < dados.length;i++) {
    subi[i].src       = dados[i].subimagem;
    }
});