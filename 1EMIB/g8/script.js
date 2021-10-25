const imagem = [{
        imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900141064655089744/Centro_de.png"
    },
    {
        imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900579202305261588/E4WpdbAWUAEHlBA.jpg"
    },
    {
        imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900579086471139398/Booktok-capa.jpg"
    },
    {
        imagem: "https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2021/10/round-6.jpg"
    },
    {
        imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900571547411030066/fifa-or-pes.jpg"
    },
    {
        imagem: "https://cdn.discordapp.com/attachments/892133403309269063/900575473883574352/661840.jpg"
    },
    {
        imagem: "https://playzuando.com.br/wp-content/uploads/2021/10/squid-game-round-6-netflix-518x307.jpg.webp"
    }
];

const texto = [{

        texto: "If you use Twitter and TikTok you probably have already heard one of these terms, both of these are names for the specific part from Twitter and TikTok where people talk about books, they usually use something that is famous at the moment to talk about books and to inspire more people to read.Most of the Booktok and Booktt users are teenagers that like to read or are trying to start reading more, so most of the famous books are books that talk about things that teenagers like to talk about, so there are a lot of LGBTQIAP+ books, books about racism, books that were already famous like harry potter and many books from new writers.The most famous books at the moment are “red,white and royal blue”, ”the seven husbands of evelyn hugo” and “daisy jones and the six”, they doesn’t have a complicated vocabulary, making it easy for new people on Booktok and Booktt to read books that are trending.Booktok and Booktt have made reading very popular with teenagers,everytime you go to a bookshop you will probably see more teenagers than adults, most bookshops now have a specific part with books that are famous on Twitter and TikTok."

    },
    {

        texto: "A very popular Booktoker is leticia_biblio, in her videos we can see she really loves talking about books, we can also see many books that are famous and many that aren’t so famous, her videos are so good that everytime you watch one of the videos you feel like you should definitely grab a book and read it.Booktok and Booktt are places that aren’t “toxic” like most of twitter and TikTok, there are times where it can be a very bad place, but it’s very rare, people take care of each other and every time they recommend a book they do it in such a careful way, when you see someone recommending a book the person will probably have already said all the details about the book, like,what it talks about, if it’s hard cover,how much pages it has, the book rating(L,+10,+12) and there’s even a trigger warning, which are things that the book talks about that may trigger something bad(things like violence, suicide, health issues)So, in conclusion,Booktok and Booktt help many people to create the habit of reading by showing them every kinds of books, from romance to horror, it helped so much people since the quarantine, reading is something that can help many people keep their mental health good, everyone can be included and every new book can be talked about."

    },
    {

        texto: "Many twitter users have accused Round 6 from plagiarism because it tells a story where people have to compete for their lives while playing children games, the same thing as “as the gods will”, but the director was able to prove that he did not copy the japanese movie, since he wrote “Round 6” in 2009 but was only able to make it a true project recently.“Round 6” is also really similar to “3%”, but it’s not similar enough for twitter users to say he also copied “3%” since in “3%” the only similar thing is that they have to do tests where they risk their lives, but the prize is being able to continue living on earth,and they don’t even play child games."

    },
    {

        texto: "A lot of people at the games world talk about the main games of soccer that we have nowadays, FIFA and PES.Now, we will see some things in which Fifa is better than PES and later we will see what PES is better than FIFA"

    },
    {

        texto: "Nowadays the tallest rollercosater in the world is the Kingda Ka, the rollercoster is located in “Six Flags Great Adventure” in the USA, the roller coaster has 139 meters, has a speed up to 206 km/h, the duration of a turn is 50 seconds and the Kingda Ka was inaugurated on May 21, 2005."

    },
    {

        texto: "Round 6” is a korean series from netflix,it was directed and written by Hwang Dong-hyuk.During the series we see many people fight for their lives and for a chance to pay off all of their debt, and to fight for their lives they have to win child games."

    }

];

const titulo = [{
        titulo: "FIFA Vs PES"

    },
    {
        titulo: "The Tallest Rollercoaster"

    },
    {
        titulo: "Booktok and Booktt:what are they and do they help?"

    },
    {
        titulo: "The big Round 6 family"

    },
    {
        titulo: "Booktok and Booktt:what are they and do they help? Pt1"

    },
    {
        titulo: "Booktok and Booktt:what are they and do they help? Pt2"

    },
    {
        titulo: "The big Round 6 family Pt1"
    },
    {
        titulo: "PES AND FIFA, WHICH IS BETTER?"
    },
    {
        titulo: "The tallest rollercoster in the world"
    },
    {
        titulo: "The big Round 6 family Pt2"
    }
];


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


    let txt = [];
    for (let i = 0; i < texto.length; i++) {

        txt.push(
            document.querySelector(".texto" + i)
        );

    }

    for (let i = 0; i < texto.length; i++) {
        txt[i].innerHTML = texto[i].texto;
    }

    let tit = [];
    for (let i = 0; i < titulo.length; i++) {

        tit.push(
            document.querySelector("#titulo" + i)
        );

    }

    for (let i = 0; i < titulo.length; i++) {

        tit[i].innerHTML = titulo[i].titulo;
    }
});