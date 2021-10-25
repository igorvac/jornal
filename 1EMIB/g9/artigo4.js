//CRIEI ARQUIVOS DIFERENTES PQ ESTAVA DANDO ERRO.

const artigo = [
    {
        imgl: "https://cdn.discordapp.com/attachments/637682526063820821/900850896580276324/logo2.png",
        imgg: "https://cdn.discordapp.com/attachments/749938456972623902/900868170481549372/rainha.jpg",
        tit: "QUEEN ELIZABETH II SPENT THE NIGHT IN A HOSPITAL IN LONDON",
        autor: "Gabriel Garuti",
        data: "22/10 - 08:23",
        text: "Queen Elizabeth II spent the night in a hospital in London, but returned home this Thursday morning (21), according to Buckingham Palace. The 95-year-old monarch was only there for exams.The overnight stay would have been 'practical' as King Edward VII's Hospital is 20 miles from the Queen's residence in Windsor.",
        text2: "",
        imge: "https://cdn.discordapp.com/attachments/637682526063820821/900850896580276324/logo2.png",   
    }
];

window.addEventListener("DOMContentLoaded", function(){
    const tittle= document.querySelector("#tittle");
    const escritor= document.querySelector("#escritor");
    const horario= document.querySelector("#horario");
    const loguinho= document.querySelector("#loguinho");
    const imggg= document.querySelector("#imggg");
    const baixinho= document.querySelector("#baixinho");
    const textinho= document.querySelector("#textinho");

    tittle.innerHTML = artigo[0].tit;
    escritor.innerHTML = artigo[0].autor;
    horario.innerHTML = artigo[0].data;
    textinho.innerHTML = artigo[0].text;
    loguinho.src = artigo[0].imgl;
    imggg.src = artigo[0].imgg;
    baixinho.src = artigo[0].imge;
})