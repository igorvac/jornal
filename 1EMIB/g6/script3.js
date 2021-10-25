const dados = [
    {
        imagem: "https://pbs.twimg.com/profile_images/614128989112782848/S8826jXM.jpg",

        imagemP: "https://img.ibxk.com.br/2018/5/programas/16092408171230102.jpg",
        
        titulo: "Games",

        subtitulo: "Author: Luiza Saracol Ribeiro",

        data: "21/10/2021 - 00:00",

        conteudo: "We all have moments when we think how good it would be to switch lives with someone or even start all over again. Since this is not possible in real life, why not enjoy the vast virtual world?",
        
        submateria: "According to our research, it is possible to say that the two best games are Avakin Life and The Sims. They are basically virtual worlds, but there are some differences that make public opinion different. For those who like architecture more, The Sims is more focused on building houses than on Avakin Kife, for example. However, the socialization part is more limited, The sims have less interaction than Avakin Life. Is the same in reality, many times people are very similar, but none will be the same.",
       
        subimagem: "https://i.ytimg.com/vi/Ax5tTTjXxWE/maxresdefault.jpg"
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