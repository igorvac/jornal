const dados = [
    {
        imagem: "https://pbs.twimg.com/profile_images/614128989112782848/S8826jXM.jpg",

        imagemP: "http://farofageek.com.br/wp-content/uploads/2017/11/Liga-da-Justica-v-Vingadores-800x423.png",
        
        titulo: "Films",

        subtitulo: "Author: Luiza Saracol Ribeiro",

        data: "21/10/2021 - 00:00",

        conteudo: "These two films are very famous and compared to each other, after all they are two 'rivals' and even, so one resembles the other, but there are some differences.",
        
        submateria: "It's funny that in the Justice League the characters have a 'code' of (almost) never killing, but in Avengers, they go to great lengths to kill enemies. Regarding strategy, they both have geniuses, but the Justice League is more privileged than the Avengers, which does not mean they have fewer cards up their sleeves, on the contrary, it is possible to say that they are more cunning than the League. And when it comes to guns, their arsenal is more iconic than the Justice League's as well. Anyway, if you like action and superpowers, you're on the right way... Good movie ;)",
       
        subimagem: "https://i.pinimg.com/originals/c5/1d/8b/c51d8bd3d78147fafbc75674eadc315c.jpg"
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