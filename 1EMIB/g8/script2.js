const imagem = [{
        imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900141064655089744/Centro_de.png"
    },
    {
        imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900571518629711912/fifa-20-vs-pes-20.jpg"
    },
]
const imagem3 = [{
    imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900571547411030066/fifa-or-pes.jpg"
}]

const titulo = [{
    titulo: "PES AND FIFA, WHICH IS BETTER?"
}]

const autor = [{
    autor: "Author: Arthur Marcio Silva"
}]

const data = [{
    data: "12/04/2020 22:45"
}]

const text = [{
    text: "A lot of people at the games world talk about the main games of soccer that we have nowadays, FIFA and PES Now, we will see some things in which Fifa is better than PES and later we will see what PES is better than FIFA. So FIFA has better graphics than PES, more teams, players and competitions."
}]

const texti = [{
    texti: "And about PES, the game is one of the best soccer games since the end of 90’s and PES has a gameplay better than FIFA So now of we know about the characteristics of the 2 games, say for us, which do you think of is the best game of soccer, FIFA or PES?"
}]

window.addEventListener("DOMContentLoaded", function() {
    let img = [];
    for (let i = 0; i < imagem.length; i++) {
        img.push(
            document.querySelector("#img" + i)
        );
    }

    for (let i = 0; i < imagem.length; i++) {
        img[i].src = imagem[i].imagem;
    }

    let img3 = [];
    for (let i = 0; i < imagem3.length; i++) {
        img3.push(
            document.querySelector(".imgtext")
        );
    }

    for (let i = 0; i < imagem3.length; i++) {
        img3[i].src = imagem3[i].imagem;
    }

    let tit = [];
    for (let i = 0; i < titulo.length; i++) {
        tit.push(
            document.querySelector("#titulo")
        );
    }

    for (let i = 0; i < titulo.length; i++) {
        tit[i].innerHTML = titulo[i].titulo;
    }

    let txt = [];
    for (let i = 0; i < titulo.length; i++) {
        txt.push(
            document.querySelector(".text")
        );
    }

    for (let i = 0; i < text.length; i++) {
        txt[i].innerHTML = text[i].text;
    }

    let txti = [];
    for (let i = 0; i < titulo.length; i++) {
        txti.push(
            document.querySelector(".texti")
        );
    }

    for (let i = 0; i < texti.length; i++) {
        txti[i].innerHTML = texti[i].texti;
    }

    let autorr = [];
    for (let i = 0; i < autor.length; i++) {
        autorr.push(
            document.querySelector(".autor")
        );
        for (let i = 0; i < autor.length; i++) {
            autorr[i].innerHTML = autor[i].autor;
        }
    }

    let dataa = [];
    for (let i = 0; i < data.length; i++) {
        dataa.push(
            document.querySelector(".data")
        );
        for (let i = 0; i < data.length; i++) {
            dataa[i].innerHTML = data[i].data;
        }
    }
});