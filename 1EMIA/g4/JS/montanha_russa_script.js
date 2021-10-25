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


    img2.src = src2;

    img2.alt = alt2;

    img2.style = "max-width: 30% !important;"


  
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

  resultado = criar_noticia("../assets/bunner.png","The biggest roller coaster in the world!","coluna","The biggest roller coaster in the world!","Mariana Ribeiro","mini","21/10/2021 - 17:19","linha","The name of the attraction will be “Falcon's Flight”, it will have 4,000 meters of rails and will reach a maximum height of 160 meters.  They will have vertical decisions with a speed of 250 km/h and tunnels with light games at the end of the attraction.  Falcon’s Fllight broke records for height and speed making it the biggest roller coaster of all.    Would have courage? a roller coaster that has been in existence since 2005 is called “kingda Ka” it is the tallest roller coaster in the world, which has already left the planning at a time different from the aforementioned!  it is 139 meters high, equaling a 40-story building.  It reaches 206 km/h, being the second fastest in the world. "," The world's biggest roller coaster has yet to come out of paper, but is planned to open in 2023 at Six Flags Qiddiya roller coaster park in New Jersey, USA. ","../assets/montanha_russa.jpg","The biggest roller coaster photo")
  
  body.appendChild(resultado)
  
    });
  
  
  
  