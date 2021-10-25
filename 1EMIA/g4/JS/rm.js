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


resultado = criar_noticia("../assets/bunner4.png","Minecraft vs. Roblox; Which is better for kids?","coluna","Minecraft vs. Roblox; Which is better for kids?","Sarah Brandão","mini","07/08/2021 - 23:45","linha","Unfortunately, the Roblox community is made up of more kids than Minecraft and, in terms of security, that sucks.Many parents have reported theft of credit cards, information and so on. There are also many reports of child-inappropriate games in their content but no content oversight.The Minecraft community, on the other hand, is very mixed, made up of children from low age to adults. Although there is inappropriate content in the game, it is still safer than Roblox. In addition to having many educational versions where it is impossible to find any type of content of this type.Both games can enhance children's creativity, Minecraft with its creative or survival mode and Roblox with the ease of creating your own games.Still, many people prefer to play multiplayer on servers, and that's the most troubling issue of all. Players can have contact with all kinds of people, where in most cases they are unknown.Honestly, personally I prefer Minecraft to Roblox.Your community is more polite than that of the other game and is the biggest one.And, with its educational versions it is the best among all.","Roblox was a game founded in 2006 by two friends, having a very large audience for the next few years.Minecraft was released in 2011 and is the best-selling game of all time. Both games have a lot of active players per month, but in a higher position, Minecraft is played more than Roblox. ","../assets/logod.png","Marvel Successes")
  
body.appendChild(resultado)

  });
