const informações = [
    {
      imagem: "data:image/png;base64,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",
      imagem1: "https://veja.abril.com.br/wp-content/uploads/2017/04/avatar_750.jpg?quality=70&strip=info&w=750",
      imagem2: "https://s2.glbimg.com/WVPe8MvCYzIg6rbe_pgIbmKarmw=/smart/e.glbimg.com/og/ed/f/original/2019/04/24/robert_downey_jr_homem_de_ferro_marvel_vingadores.jpg",
      imagem3: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/06/cropped-avengers-justice-league-1.png",
      imagem4: "https://i.ytimg.com/vi/Ax5tTTjXxWE/maxresdefault.jpg",
      imagem5: "https://s2.glbimg.com/VQOPz1jqSUDKvWXtr_zi4zWeUjE=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/1/Y/vjfxyGR669mi4j7D0zNg/49044568397-0d99b39345-k.jpg",
      imagem6: "data:image/jpeg;base64,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",
      imagem7: "https://noticiasetecnologia.com/wp-content/uploads/2020/05/Twilight-.jpg",
      
      tema1: "Curiosities",
      tema2: "Celebrities",
      tema3: "Films",
      tema4: "Games",
      tema5: "Sports",
  
      titulo1: "Curiosities",
      titulo2: "Celebrities",
      titulo3: "Films",
      titulo4: "Games",
      titulo5: "Sports",
      titulo6: "More about games",
      titulo7: "More about films",
  
      texto1: "Sit on the couch and hold your popcorn!! Below, see the list of the world's highest-grossing films. ",
      texto2: "Do avengers get revenge in real life? Robert Downey Jr. stops following Marvel's cast and filmmakers. Know what happened",
      texto3: "The famous duel between The Justice League and The Avengers. We all know that dc and marvel are inspired by each other to create the films, want to know more about it?",
      texto4: "Sometimes it's good to create a new life, isn't it? meet the two best games if you want to escape reality ",
      texto5: "We have women in football! Learn more about this sport and female participation.",
      texto6: "The success of Valorant and Rainbow 6 being dropped (literally). Find out which games are popular.",
      texto7: "There will never never be dawn for (this) Twillight. Always on the rise, with the best possible actors for with the best possible actors for this saga. Take a quiz to find out which Twillight character you are."
    }
  ];
  
  window.addEventListener("DOMContentLoaded", function(){ 
    let img = [];
    let imgG = [];
    let imgP1 = [];
    let imgP2 = [];
    let imgP3 = [];
    let imgM1 = [];
    let imgM2 = [];
    let imgM3 = [];
  
    let tema1 = [];
    let tema2 = [];
    let tema3 = [];
    let tema4 = [];
    let tema5 = [];
  
    let titulo1 = [];
    let titulo2 = [];
    let titulo3 = [];
    let titulo4 = [];
    let titulo5 = [];
    let titulo6 = [];
    let titulo7 = [];
  
    let txt1 = [];
    let txt2 = [];
    let txt3 = [];
    let txt4 = [];
    let txt5 = [];
    let txt6 = [];
    let txt7 = [];
  
    for (let i = 0; i < informações.length;i++){
      img.push(
        document.querySelector("#img" + i)
    );
      imgG.push(
        document.querySelector("#imgG" + i)
    );
      imgP1.push(
        document.querySelector("#imgP1" + i)
    );
      imgP2.push(
        document.querySelector("#imgP2" + i)
    );
      imgP3.push(
        document.querySelector("#imgP3" + i)
    );
      imgM1.push(
        document.querySelector("#imgM1" + i)
    );
      imgM2.push(
        document.querySelector("#imgM2" + i)
    );
      imgM3.push(
        document.querySelector("#imgM3" + i)
    );
  
      tema1.push(
        document.querySelector("#tema1" + i)
    );
      tema2.push(
        document.querySelector("#tema2" + i)
    );
      tema3.push(
        document.querySelector("#tema3" + i)
    );
      tema4.push(
        document.querySelector("#tema4" + i)
    );
      tema5.push(
        document.querySelector("#tema5" + i)
    );
  
    titulo1.push(
          document.querySelector("#titulo1" + i)
    );
    titulo2.push(
        document.querySelector("#titulo2" + i)
    );
    titulo3.push(
        document.querySelector("#titulo3" + i)
    );
    titulo4.push(
        document.querySelector("#titulo4" + i)
    );
    titulo5.push(
        document.querySelector("#titulo5" + i)
    );
    titulo6.push(
        document.querySelector("#titulo6" + i)
    );
    titulo7.push(
          document.querySelector("#titulo7" + i)
    );
  
    txt1.push(
        document.querySelector("#txt1" + i)
    );
    txt2.push(
        document.querySelector("#txt2" + i)
    );
    txt3.push(
        document.querySelector("#txt3" + i)
    );
    txt4.push(
        document.querySelector("#txt4" + i)
    );
    txt5.push(
        document.querySelector("#txt5" + i)
    );
    txt6.push(
        document.querySelector("#txt6" + i)
    );
    txt7.push(
        document.querySelector("#txt7" + i)
    );
    }
    
    for (let i = 0; i < informações.length;i++){
    img[i].src = informações[i].imagem;
    imgG[i].src = informações[i].imagem1;
    imgP1[i].src = informações[i].imagem2;
    imgP2[i].src = informações[i].imagem3;
    imgP3[i].src = informações[i].imagem4;
    imgM1[i].src = informações[i].imagem5;
    imgM2[i].src = informações[i].imagem6;
    imgM3[i].src = informações[i].imagem7;
  
    tema1[i].innerHTML = informações[i].tema1;
    tema2[i].innerHTML = informações[i].tema2;
    tema3[i].innerHTML = informações[i].tema3;
    tema4[i].innerHTML = informações[i].tema4;
    tema5[i].innerHTML = informações[i].tema5;
  
    titulo1[i].innerHTML = informações[i].titulo1;
    titulo2[i].innerHTML = informações[i].titulo2;
    titulo3[i].innerHTML = informações[i].titulo3;
    titulo4[i].innerHTML = informações[i].titulo4;
    titulo5[i].innerHTML = informações[i].titulo5;
    titulo6[i].innerHTML = informações[i].titulo6;
    titulo7[i].innerHTML = informações[i].titulo7;
  
    txt1[i].innerHTML = informações[i].texto1;
    txt2[i].innerHTML = informações[i].texto2;
    txt3[i].innerHTML = informações[i].texto3;
    txt4[i].innerHTML = informações[i].texto4;
    txt5[i].innerHTML = informações[i].texto5;
    txt6[i].innerHTML = informações[i].texto6;
    txt7[i].innerHTML = informações[i].texto7;
    }
  
  });