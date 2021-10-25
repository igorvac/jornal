const imgs = [
    {
        url: ".//Imagens/DINO.jpg",
        url1: ".//Imagens/vs go.jpg",
        url2: ".//Imagens/Sem_titulo.jpg",
        url3: ".//Imagens/floresta.jpg",
        url4: ".//Imagens/piscina.jpg",
        url5: ".//Imagens/montanha_russa.jpg",
        url6: ".//Imagens/alice 6.jpg"
    }
]
const textos = [
    {
        txt1: "Contatos",
        txt2: "Informações",
        txt3: "Comparações",
        txt4: "Materias",
        txt5: "Sobre"
    }
]
const text = [
    {
        text1:"Valorant and CSGO are fps games, the biggest difference being the unique abilities of each character. making the team depend on each other and play more as a team and less alone. But talking about championships CSGO players earn much bigger rewards compared to Valorant rewards",
        text2:"Schools with technology have many advantages over traditional schools, the main fact is that they teach children to develop websites which now and in the future will be increasingly used, and as they provide vision for the future for students, I say this from my own experience because I've studied at both types of schools.",
        text3:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos ex sequi modi praesentium perspiciatis rem nostrum soluta cupiditate architecto, temporibus veritatis laboriosam? Necessitatibus expedita molestiae quidem blanditiis, harum itaque.",
        text4:"The city of Algarrobo is approximately 1:30 am from Santiago, it is home to the San Alfonso del Mar resort, which is responsible for building the largest swimming pool in the world. This huge swimming pool is simply 6 times bigger than the second place in the ranking of the biggest swimming pools in the world.",
        text5:"Montezum, which is located inside Hopi Hari Park, in the city of Vinhedo, 70 km from São Paulo, is far from being one of the largest in the world, but it is the largest wooden roller coaster in Latin America and the largest in Brazil , in the items extension, height, fall and speed.",
        text6:"ROUND 6 is generally better known and more watched but if you compare her content and story with ALICE BORDERLAND, ROUND 6 is inferior. In compensation ROUND 6 the performances are much better",
    }
]
window.addEventListener("DOMContentLoaded", function () {
    const img0 = document.querySelector("#img0");
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const img3 = document.querySelector("#img3");
    const img4 = document.querySelector("#img4");
    const img5 = document.querySelector("#img5");
    const img6 = document.querySelector("#img6");
    img0.src = imgs[0].url;
    img1.src = imgs[0].url1;
    img2.src = imgs[0].url2;
    img3.src = imgs[0].url3;
    img4.src = imgs[0].url4;
    img5.src = imgs[0].url5;
    img6.src = imgs[0].url6;
    
})

window.addEventListener("DOMContentLoaded", function() {
    const inu = document.querySelector("#nspn1");
    const inu2 = document.querySelector("#nspn2");
    const inu3 = document.querySelector("#nspn3");
    const inu4 = document.querySelector("#nspn4");
    const inu5 = document.querySelector("#nspn5");
    inu.innerHTML = textos[0].txt1;
    inu2.innerHTML = textos[0].txt2;
    inu3.innerHTML = textos[0].txt3;
    inu4.innerHTML = textos[0].txt4;
    inu5.innerHTML = textos[0].txt5;

})

window.addEventListener("DOMContentLoaded", function() {
    const textoo1 = document.querySelector("#txt1");
    const textoo2 = document.querySelector("#txt2");
    const textoo3 = document.querySelector("#txt3");
    const textoo4 = document.querySelector("#txt4");
    const textoo5 = document.querySelector("#txt5");
    const textoo6 = document.querySelector("#txt6");
    textoo1.innerHTML = text[0].text1;
    textoo2.innerHTML = text[0].text2;
    textoo3.innerHTML = text[0].text3;
    textoo4.innerHTML = text[0].text4;
    textoo5.innerHTML = text[0].text5;
    textoo6.innerHTML = text[0].text6;
})
