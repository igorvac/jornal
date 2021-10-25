const dados = [
    {
        imagem: "https://pbs.twimg.com/profile_images/614128989112782848/S8826jXM.jpg",

        imagemP: "https://img.olhardigital.com.br/wp-content/uploads/2021/05/avatar-divulgacao.jpg",
        
        titulo: "Curiosities",

        subtitulo: "Author: Luiza Saracol Ribeiro",

        data: "21/10/2021 - 00:00",

        conteudo: "Firstly, it is important to highlight the world's highest-grossing film, which is Avatar. The largestrevenue in history with a value of U$: 2 847 246 203, it's not a small thing, right?.",
        
        submateria: "The 20th century fox did well because, in addition to all this success, cinema is the pinnacle ofpublic viewing. The repercussion of a movie is very relevant, and it involves many things like special effects, soundtrack, plot. The choice of each of these topics should be careful, as they will always complain and compare with other works, but if yours has a difference, it will be highlighted. Avatar is a shocking film for society because it portrays exactly what happens in the world and shows the human being as the worst species, which it is.",
       
        subimagem: "https://tecnoblog.net/meiobit/wp-content/uploads/2020/01/20200131avatar_1-680x382.jpg"
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