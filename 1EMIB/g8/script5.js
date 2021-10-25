const imagem = [{
        imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900141064655089744/Centro_de.png"
    },
    {
        imagem: "https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2021/10/round-6.jpg"
    },
]
const imagem3 = [{
    imagem: "https://playzuando.com.br/wp-content/uploads/2021/10/squid-game-round-6-netflix-518x307.jpg.webp"
}]

const titulo = [{
    titulo: "The big Round 6 family"
}]

const autor = [{
    autor: "Author: Lucas Rodrigues Alves"
}]

const data = [{
    data: "8/07/2019 12:32"
}]

const text = [{
    text: "“Round 6” is a korean series from netflix,it was directed and written by Hwang Dong-hyuk.During the series we see many people fight for their lives and for a chance to pay off all of their debt, and to fight for their lives they have to win child games.The games include red light green light (the game where you have to stop moving after the doll stops saying “Mugunghwa Kkoci Pieot Seumnida”) and the dalgona candy game where you need to get the drawing out of the rest of the candy without breaking it.Since Round 6 was launched, many people have been comparing it to a japanese movie from 2014 called “as the gods will” and a Brazilian series from 2016 called “3%”."
}]

const texti = [{
    texti: "Many twitter users have accused Round 6 from plagiarism because it tells a story where people have to compete for their lives while playing children games, the same thing as “as the gods will”, but the director was able to prove that he did not copy the japanese movie, since he wrote “Round 6” in 2009 but was only able to make it a true project recently.“Round 6” is also really similar to “3%”, but it’s not similar enough for twitter users to say he also copied “3%” since in “3%” the only similar thing is that they have to do tests where they risk their lives, but the prize is being able to continue living on earth,and they don’t even play child games."
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