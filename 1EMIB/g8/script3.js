const imagem = [{
        imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900141064655089744/Centro_de.png"
    },
    {
        imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900574713179410432/f0b18556834701ff3a41b4b1307d7fc1.jpg"
    },
]
const imagem3 = [{
    imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900575473883574352/661840.jpg"
}]

const titulo = [{
    titulo: "The tallest roller coaster in the world"
}]

const autor = [{
    autor: "Author: Gustavo Fernandes"
}]

const data = [{
    data: "29/02/2020 12:45"
}]

const text = [{
    text: "Nowadays the tallest roller coaster in the world is the Kingda Ka, the roller coaster is located in “Six Flags Great Adventure” in the USA, the roller coaster has 139 meters,"
}]

const texti = [{
    texti: "has a speed up to 206 km/h, the duration of a turn is 50 seconds and the Kingda Ka was inaugurated on May 21, 2005."
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