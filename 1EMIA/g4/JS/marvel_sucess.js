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


resultado = criar_noticia("../assets/banner2.png","Marvel Successes","coluna","Marvel Successes","Mariana Ribeiro","mini","07/08/2021 - 23:45","linha","Productions so good that it's hard to choose which was the best.  The first to be released was “Wanda Vision”, with an impeccable setting and an innovative script, the costumes and music for me were the best among the 3 series released so far.  “Falcon and the Winter Solider” brought a political script different from the other two series.  “Loki” already introduced themes like the “multiverse” that will be expected in the next films.  In my opinion Wanda Vision was better than Loki, precisely because of the innovative script and costumes.       But Loki was better than Falcon for bringing up a more important theme.  But all are impeccable and worth watching.","In the year 2021 the Marvel cinematographic universe rocked and surprised fans with the new series of heroes and villains. ","../assets/logod.png","Marvel Successes")
  
body.appendChild(resultado)

  });
