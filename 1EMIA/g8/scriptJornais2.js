const news = [
{
    Image: "https://drive.google.com/file/d/18kzgNv_E2ZaXr7Nq7RauORtisrL76Z_-/view?usp=sharing",
    Image1: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/04/Venom-Aranha.jpg",
    title: "Venom X Spider-Man",
    txt1: "Autor: Caio Eduardo Sampaio de Souza",
    txt2: "20/10/2021 - 10:20"
},
{
    txt1: "``Venom´´ is a film that tells the story of an anti-hero, named Venom, based on the character of",
    txt2: "the same name from Marvel Comics. The Venom in the movie is a space parasite that came to Earth",
    txt3: "and destroy the planet. He embodies the body of Eddie Brock, the protagonist, and they now work",
    txt4: "together to punish criminals with death. Sony began development on a Venom movie after the",
    txt5: "character made his theater debut in Spider-Man 3.",
    txt6: "``Spider-Man'' is a 2002 American film, adapted from the most popular Marvel Comics character,",
    txt7: "Spider-Man. The story tells about Peter Parker who is poisoned by a spider at school, and who",
    txt8: "happens to have powers. So Peter, with his powers, decides to do good for the world, saving",
    txt9: "people and arresting criminals and super villains. Directed by Sam Raimi, produced by Ian Bryce",
    txt10: "and Laura Ziskin and script written by David Koepp, based on characters created by Stan Lee.",
    Image: "https://www.torredevigilancia.com/wp-content/uploads/2021/09/Venom-Vs-Spiderman.jpg"
}
];

window.addEventListener("DOMContentLoaded", function(){

    const img = document.querySelector("#pic1");
    img.src = news[0].Image;

    const img2 = document.querySelector("#pic2");
    img2.src = news[0].Image1;

    const img3 = document.querySelector("#pic3");
    img3.src = news[1].Image;

    const titulo1 = document.querySelector("#tit1");
    const p1 = document.querySelector("#p1");
    const p2 = document.querySelector("#p2");
    titulo1.innerHTML = news[0].title;
    p1.innerHTML = news[0].txt1;
    p2.innerHTML = news[0].txt2;

    const Rt1 = document.querySelector("#Rt1");
    const Rt2 = document.querySelector("#Rt2");
    const Rt3 = document.querySelector("#Rt3");
    const Rt4 = document.querySelector("#Rt4");
    const Rt5 = document.querySelector("#Rt5");
    const Rt6 = document.querySelector("#Rt6");
    const Rt7 = document.querySelector("#Rt7");
    const Rt8 = document.querySelector("#Rt8");
    const Rt9 = document.querySelector("#Rt9");
    const Rt10 = document.querySelector("#Rt10");
    Rt1.innerHTML = news[1].txt1;
    Rt2.innerHTML = news[1].txt2;
    Rt3.innerHTML = news[1].txt3;
    Rt4.innerHTML = news[1].txt4;
    Rt5.innerHTML = news[1].txt5;
    Rt6.innerHTML = news[1].txt6;
    Rt7.innerHTML = news[1].txt7;
    Rt8.innerHTML = news[1].txt8;
    Rt9.innerHTML = news[1].txt9;
    Rt10.innerHTML = news[1].txt10;
})