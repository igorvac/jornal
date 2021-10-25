document.addEventListener("DOMContentLoaded", function(event) {

  let main = document.querySelector("main")

function criar (dc1, dc2, dc3, srci, alt, titulo,txt,ref, resizer){



  let div1= document.createElement("div");

  let div2= document.createElement("a");

  let div3= document.createElement("div");


  let h3 = document.createElement("h3");
  let img = document.createElement("img");



  let p = document.createElement("p");


  div1.className = dc1;

  div2.className = dc2;

  div3.className = dc3;

  img.src = srci;

  img.alt = alt;

  if(resizer==true){
    img.style.maxWidth = "30rem"
  }


  h3.innerHTML = titulo;

  p.innerHTML = txt;


  div2.href =  ref



  div1.appendChild(div2)

  div2.appendChild(img)

  div2.appendChild(div3)

  div3.appendChild(h3)

  div3.appendChild(p)


  console.log(div1)

  return div1;

}

let div_basica= document.createElement("div");

div_basica.className = "coluna"

main.appendChild(div_basica)


let div_first_line= document.createElement("div");

div_first_line.className = "linha"

div_basica.appendChild(div_first_line)


let div_second_line= document.createElement("div");

div_second_line.className = "linha"

div_basica.appendChild(div_second_line)




let retorno;

retorno = criar("all","linha","coluna","./assets/montanha_russa.jpg","The biggest roller coaster photo","The biggest roller coaster in the world!","Would have courage to enter in this adventure?","./html/montanha_russa.html")

div_first_line.appendChild(retorno)

retorno = criar("all","linha","coluna","./assets/marvel_samples.jpg","Marvel Successes samples","Marvel Successes"," In the year 2021 the Marvel cinematographic universe rocked and surprised fans with the new series of heroes and villains.  Productions so good that it's hard to choose which was the best. ","./html/marvel_sucess.html")

div_first_line.appendChild(retorno)

retorno = criar("linha","all","coluna","./assets/arists.jpg","artists to keep an eye on","3 artists to keep an eye on","  Brazilian artist Jão recently returned with his 3rd studio album which was already expected by fans 2 years after its most recent release.","./html/artists.html",true)

div_second_line.appendChild(retorno)



let div_first_column= document.createElement("div");

div_first_column.className = "coluna"

div_second_line.appendChild(div_first_column)


retorno = criar("all","linha","coluna","./assets/mine_roblox.jpeg","Minecraft vs. Roblox photo","Minecraft vs. Roblox; Which is better for kids?","Roblox was a game founded in 2006 by two friends, having a very large audience for the next few years.Minecraft was released in 2011 and is the best-selling game of all time.","./html/rm.html")

div_first_column.appendChild(retorno)

retorno = criar("all","linha","coluna","https://cdn-icons-png.flaticon.com/512/25/25231.png","Git hub logo","interact with us","you can do it in our social networks","https://github.com/habdig7oficial/Jornal-IWD-PDS-ING-ac2")

div_first_column.appendChild(retorno)

retorno = criar("all","linha","coluna","https://www.gnu.org/graphics/gnu-head.jpg","GNU logo","Know the GNU project","amazsadcsdsdsddsing","https://www.gnu.org/")

div_second_line.appendChild(retorno)



  });



