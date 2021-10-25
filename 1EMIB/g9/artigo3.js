//CRIEI ARQUIVOS DIFERENTES PQ ESTAVA DANDO ERRO.

const artigo = [
    {
        imgl: "https://cdn.discordapp.com/attachments/637682526063820821/900850896580276324/logo2.png",
        imgg: "https://m.extra.globo.com/incoming/2994494-ee4-7bb/w488h275-PROP/lingua-3.jpg",
        tit: "THE BIGGEST TONGUE IN THE WORLD",
        autor: "Gabriel Garuti",
        data: "21/10 - 18:02",
        text: "A student from California, USA, entered the Guinness Book of Records with the largest tongue in the world. Chanel Tapper's tongue, which appears in the 2012 edition of the traditional book, measures an impressive 9.75 centimeters. Chanel's tongue is twice the average size. It's about the same length as an iPhone. The student said she discovered she had a huge tongue when she was eight years old, while posing for Halloween photos showing the organ. ",
        text2: "",
        imge: "https://cdn.discordapp.com/attachments/637682526063820821/900850896580276324/logo2.png",   
    }
];


window.addEventListener("DOMContentLoaded", function(){
    const tit = document.querySelector("#tit");
    const autor = document.querySelector("#autor");
    const hora = document.querySelector("#hora");
    const logo = document.querySelector("#logo");
    const imgGrande = document.querySelector("#imgGrande");
    const logo_b = document.querySelector("#logo_b");
    const texto = document.querySelector("#texto");


    tit.innerHTML = artigo[0].tit;
    autor.innerHTML = artigo[0].autor;
    hora.innerHTML = artigo[0].data;
    texto.innerHTML = artigo[0].text;
    logo.src = artigo[0].imgl;
    imgGrande.src = artigo[0].imgg;
    logo_b.src = artigo[0].imge;
});

