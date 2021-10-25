document.addEventListener("DOMContentLoaded", function(event) {

    let body = document.querySelector("body")
  
  function criar_noticia (src,alt,dd ,titulo,autor,pclass,data,type,lendo, lendo2,src2,alt2){
  
    let img1 = document.createElement("img")
  
    let main = document.createElement("main")
  
    let div1 = document.createElement("div")
  
    let h2 = document.createElement("h2")
  
    let p= document.createElement("p")
  
    let p_mini = document.createElement("p")
    
  
    let div2 = document.createElement("div")
  
    let texto1 = document.createElement("p")
  
    let texto2 = document.createElement("p")
  
    let img2 = document.createElement("img")
  
  
  
    img1.src = src;
  
    img1.alt = alt;
  
    img2.className = "mw"
  
    img2.src = src2;
  
    img2.alt = alt2;
  
    img2.style = "max-width: 60% !important;"
  
  
  
    div1.className = dd;
  
  
    h2.innerHTML = titulo
  
    p.innerHTML = autor
  
    p_mini.className = !"mini"
  
    p_mini.innerHTML = data
  
    p_mini.className = pclass
  
    div2.className = type
  
    texto1.innerHTML = lendo
  
    texto2.innerHTML = lendo2
  
    texto2.style.maxWidth = "60% !important"
  
  
  
       
    main.appendChild(img1)
  
    main.appendChild(div1)
  
    div1.appendChild(h2)
  
    div1.appendChild(p)
  
    div1.appendChild(p_mini)
  
    div1.appendChild(div2)
  
    div2.appendChild(texto2)
  
    div2.appendChild(texto1)
  
  
    div2.appendChild(img2)
  
  
  
  
    return main;
  
  
  
  }
  
  let resultado;
  
  
  resultado = criar_noticia("../assets/banner3.png","3 artists to keep an eye on","coluna","3 artists to keep an eye on","Sarah Brandão","mini","03/08/2021 - 24:00","linha","AESPA is a South Korean rookie group that made their debut in November 2020 with the song 'Black Mamba' already drawing attention from there.The group's concept is totally different from what we've seen in pop or even k-pop, with a mix of reality and technology, with their name representing that. The group's name, Aespa, is a combination of 'ae', composed of the English initials of the words 'Avatar' and 'Experience', plus the word 'Aspect', which means 'two sides', and symbolizes 'finding one another'. me' and 'experience the new world'.Although the debut was such a success, it drew as much attention as its second release, 'Next Level' (a remake of a song with the same title made for the 'Fast and Furious' series), which was so successful in its country of origin and internationally.  With their latest comeback 'SAVAGE', also being their first studio album, it was totally amazing. Following the concept and keeping this futuristic narrative. The group managed to do a very rare feat on the charts which is the 'All-kill'. No doubt in the next releases they will surprise more and more, so it's good to keep an eye on them. With another Korean artist joining the list, we have JO YURI, the country's newest soloist.Her path in the industry is already relatively long for a person only 20 years old. She already participated in the 'Idol school' survival reality series in 2017 where, unfortunately, she was eliminated. The following year, she again participated in another, 'Produce 48' which was a real hit in Asia, she soon reached the heart of a large audience and managed to get third place in the ranking, thus making her debut with 11 more girls in a group called IZ*ONE.The group was a real success for 2.6 years. In April 2021 they unfortunately gave up their disband and JO YURI signed with 'WAKEONE Ent.' making her debut in October of the same year.The song is described as dance-pop with a 'lively and catchy melody' and characterized by the singer's enchanting voice.Along with the title track also came the b-side 'Express Moon' which was described as a mid-tempo song with an impressive, warm but powerful melody and instrumental along with a romantic melody.The artist promoted her songs in many programs, getting in touch with Brazilian fans! The singer even said what her dream would be to come to Brazil! (https://twitter.com/JoYuriBR/status/1450689374061015044?s=20)Obviously you have to keep an eye on the singer's upcoming releases to see her here!","  Brazilian artist Jão recently returned with his 3rd studio album which was already expected by fans 2 years after its most recent release.   The album title is 'PIRATE' and the whole concept is made with elements of beach, pirates and water , which is often mentioned in the lyrics of the songs. It's nothing new for the artist, that in his first 2 releases, he uses elements such as earth and air. What makes the concept a lot of fun for part of the audience as many things and lyrics are intertwined between the works.   The trailer released on YouTube greatly surprised the audience for its cinematic characteristics.  This work is the most pop ever released by the artist, but still keeping its previous characteristics. The sound made varies from electronic pop to ballads to cry. The lyrics are extremely poetic  addressing various experiences lived by the singer, mainly mentioning love. It is expected that your next album tackles the fire element. ","../assets/arists.jpg","Artists")
    
  body.appendChild(resultado)
  
    });
  
  

  
  
  