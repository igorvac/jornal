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

  resultado = criar_noticia("https://picsum.photos/3000/400","random image","coluna","Lorem Ipsum","Lorem Ipsum Silva","mini","12/03/2021 - 23:45","linha","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et nisi blandit, rhoncus tortor vitae, molestie nulla. Sed viverra metus a dolor dapibus, vel posuere ipsum tincidunt. Fusce cursus orci magna. Maecenas finibus rutrum lorem, sit amet tristique purus bibendum euismod. Sed in efficitur felis, id condimentum sem. Nunc id nunc tincidunt, mattis felis sit amet, accumsan metus. Sed in lectus a est lobortis consequat vitae congue felis. Donec consequat varius nisl, ac viverra velit vehicula vel. Duis finibus diam ut nisl dignissim, sagittis rhoncus eros viverra. Sed volutpat finibus enim quis dictum. Ut ultrices, libero ut rutrum gravida, dui metus blandit augue, a fermentum est lorem nec augue. Ut in nunc quam. Nulla turpis magna, tincidunt id arcu id, rutrum consectetur massa. Suspendisse dictum tempor felis at gravida."," Donec enim ex, congue vel ligula non, commodo dictum ex. Nulla placerat lectus vel augue blandit mollis. Maecenas dapibus lobortis elementum. Etiam in lorem at purus imperdiet consectetur et sed orci. Nullam sit amet lorem vestibulum, interdum odio eu, euismod elit. Integer mollis condimentum ante in dictum. Phasellus a sem diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus id sem sit amet quam mollis dictum id a nunc. Phasellus euismod eget leo nec placerat. ","https://picsum.photos/600/400","ramdom")
  
  body.appendChild(resultado)
  
    });
  
  
  
  