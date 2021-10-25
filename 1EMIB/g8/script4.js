const imagem = [{
        imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900141064655089744/Centro_de.png"
    },
    {
        imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900579086471139398/Booktok-capa.jpg"
    },
]
const imagem3 = [{
    imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900579202305261588/E4WpdbAWUAEHlBA.jpg"
}]

const titulo = [{
    titulo: "Booktok and Booktt:what are they and do they help?"
}]

const autor = [{
    autor: "Author: Lucca Gonçalves dos santos "
}]

const data = [{
    data: "19/04/2020 20:45"
}]

const text = [{
    text: "If you use Twitter and TikTok you probably have already heard one of these terms, both of these are names for the specific part from Twitter and TikTok where people talk about books, they usually use something that is famous at the moment to talk about books and to inspire more people to read.Most of the Booktok and Booktt users are teenagers that like to read or are trying to start reading more, so most of the famous books are books that talk about things that teenagers like to talk about, so there are a lot of LGBTQIAP+ books, books about racism, books that were already famous like harry potter and many books from new writers.The most famous books at the moment are “red,white and royal blue”, ”the seven husbands of evelyn hugo” and “daisy jones and the six”, they doesn’t have a complicated vocabulary, making it easy for new people on Booktok and Booktt to read books that are trending.Booktok and Booktt have made reading very popular with teenagers,everytime you go to a bookshop you will probably see more teenagers than adults, most bookshops now have a specific part with books that are famous on Twitter and TikTok."
}]

const texti = [{
    texti: "A very popular Booktoker is leticia_biblio, in her videos we can see she really loves talking about books, we can also see many books that are famous and many that aren’t so famous, her videos are so good that everytime you watch one of the videos you feel like you should definitely grab a book and read it.Booktok and Booktt are places that aren’t “toxic” like most of twitter and TikTok, there are times where it can be a very bad place, but it’s very rare, people take care of each other and every time they recommend a book they do it in such a careful way, when you see someone recommending a book the person will probably have already said all the details about the book, like,what it talks about, if it’s hard cover,how much pages it has, the book rating(L,+10,+12) and there’s even a trigger warning, which are things that the book talks about that may trigger something bad(things like violence, suicide, health issues)So, in conclusion,Booktok and Booktt help many people to create the habit of reading by showing them every kinds of books, from romance to horror, it helped so much people since the quarantine, reading is something that can help many people keep their mental health good, everyone can be included and every new book can be talked about."
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