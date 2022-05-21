//Objeto JSON

let Heroes = [{
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ]



  //*************************************************************************************************************************************************************************************************************************************************/
  //EJERCICIO #1
  //Paso 1: Realice un objeto llamado “Heroes” que almacene toda la información del del archivo Javascript, guárdelo en un localstorage  llamado “Datos”.
  localStorage.setItem("Datos",JSON.stringify(Heroes)) 


  //Notas:
  //Con stringify transformamos el objeto JSON "Heroes" a string, pues localstorage solo admite string.
  //Con setItem guardamos todo el objeto JSON "Heroes" en el localstorage: Datos.
  //Todo lo guardado en localstorage se almacena como string





  //*************************************************************************************************************************************************************************************************************************************************/
  //EJERCICIO #2
  //Paso #1 Realice un objeto llamado  “Heroes2” y almacene el objeto adjunto. 

  let Heroes2=JSON.parse(localStorage.getItem("Datos")) 
  console.log(Heroes2)
  console.log(typeof(Heroes2))


  //Notas:
  //Con getItem recuperamos toda la información del localstorage "Datos"
  //Pero esa información viene string, por ello es necesario usar Parse, para convertirla nuevamente en Objeto JSON
  //Ahora en Heroes2 almacenamos toda la info del localstorage "Datos" en formato JSON
  //Con typeof solo compruebo el tipo de dato (string o objeto)
 
 
 
 
 
 
  //*************************************************************************************************************************************************************************************************************************************************/
  //EJERCICIO #2
  //Paso #2 Debe de realizar JavaScript dinámico con los dos métodos vistos en la última clase (créate element y backtick(Patron Literal ) 
  //Parte A

  //EJERCICIO #2
  //Paso #4 crear botones para llamar los dos métodos , al realizar clic debe reflejarse la información del objeto (Pintar dinámicamente Nombre, Imagen , Biografía como mínimo ) -->
  //Parte B


  //*************************************************************FUNCION ADD1****************************************************************/
  
  function add1 () {

      //Antes de pintar sobre div "uno" debemos limpiarlo o asegurarnos que esté limpio
      document.getElementById("uno").innerHTML=""

      //Se crean 3 elementos con Javascript dinamico "hijos"
        let NewImg1 = document.createElement ('img')
        let NewH31 = document.createElement ('h3')
        let NewP1 = document.createElement ('p')

      //Se toma el valor seleccionado por el usuario en la lista desplegable
        let Heroebuscado2=document.getElementById("select1").value
      
      //Se busca la información del heroe seleccionado  (img, nombre y bio) y se carga en los elementos creados dimamicamente
        switch (Heroebuscado2){
            case "Aquaman":
                  NewImg1.setAttribute ('src', 'assets/img/aquaman.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH31.innerHTML = `${element.nombre}` 
                          NewP1.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Batman":
                  NewImg1.setAttribute ('src', 'assets/img/batman.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH31.innerHTML = `${element.nombre}` 
                          NewP1.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Daredevil":
                  NewImg1.setAttribute ('src', 'assets/img/daredevil.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH31.innerHTML = `${element.nombre}` 
                          NewP1.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Hulk":
                  NewImg1.setAttribute ('src', 'assets/img/hulk.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH31.innerHTML = `${element.nombre}` 
                          NewP1.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Linterna Verde":
                  NewImg1.setAttribute ('src', 'assets/img/linterna-verde.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH31.innerHTML = `${element.nombre}` 
                          NewP1.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Spider-Man":
                  NewImg1.setAttribute ('src', 'assets/img/spiderman.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH31.innerHTML = `${element.nombre}` 
                          NewP1.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Wolverine":
                  NewImg1.setAttribute ('src', 'assets/img/wolverine.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH31.innerHTML = `${element.nombre}` 
                          NewP1.innerHTML = `${element.bio}`    
                      }
                  })
              break;
            default:
                  alert("Debes seleccionar un Héroe")
        }

      //Creamos el Padre, le añadimos la información de los hijos y le indicamos que la pinte en el Div "uno"
        let addhere1 = document.getElementById ('uno') 
        addhere1.appendChild (NewImg1)
        addhere1.appendChild (NewH31)
        addhere1.appendChild (NewP1)
  }






  //*************************************************************FUNCION ADD2****************************************************************/
  
  function add2 () {

      //Antes de pintar sobre div "dos" debemos limpiarlo o asegurarnos que esté limpio
        document.getElementById("dos").innerHTML=""

      //Se crean 3 elementos con Javascript dinamico "hijos"
        let NewImg2 = document.createElement ('img')
        let NewH32 = document.createElement ('h3')
        let NewP2 = document.createElement ('p')

      //Se toma el valor seleccionado por el usuario en la lista desplegable
        let Heroebuscado2=document.getElementById("select2").value
      
      //Se busca la información del heroe seleccionado  (img, nombre y bio) y se carga en los elementos creados dimamicamente
        switch (Heroebuscado2){
            case "Aquaman":
                  NewImg2.setAttribute ('src', 'assets/img/aquaman.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH32.innerHTML = `${element.nombre}` 
                          NewP2.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Batman":
                  NewImg2.setAttribute ('src', 'assets/img/batman.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH32.innerHTML = `${element.nombre}` 
                          NewP2.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Daredevil":
                  NewImg2.setAttribute ('src', 'assets/img/daredevil.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH32.innerHTML = `${element.nombre}` 
                          NewP2.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Hulk":
                  NewImg2.setAttribute ('src', 'assets/img/hulk.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH32.innerHTML = `${element.nombre}` 
                          NewP2.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Linterna Verde":
                  NewImg2.setAttribute ('src', 'assets/img/linterna-verde.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH32.innerHTML = `${element.nombre}` 
                          NewP2.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Spider-Man":
                  NewImg2.setAttribute ('src', 'assets/img/spiderman.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH32.innerHTML = `${element.nombre}` 
                          NewP2.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Wolverine":
                  NewImg2.setAttribute ('src', 'assets/img/wolverine.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH32.innerHTML = `${element.nombre}` 
                          NewP2.innerHTML = `${element.bio}`    
                      }
                  })
              break;
            default:
                  alert("Debes seleccionar un Héroe")
        }

      //Creamos el Padre, le añadimos la información de los hijos y le indicamos que la pinte en el Div "dos"
        let addhere2 = document.getElementById ('dos') 
        addhere2.appendChild (NewImg2)
        addhere2.appendChild (NewH32)
        addhere2.appendChild (NewP2)
  }






  //*************************************************************FUNCION ADD3****************************************************************/
  
  function add3 () {

      //Antes de pintar sobre div "tres" debemos limpiarlo o asegurarnos que esté limpio
        document.getElementById("tres").innerHTML=""

      //Se crean 3 elementos con Javascript dinamico "hijos"
        let NewImg3 = document.createElement ('img')
        let NewH33 = document.createElement ('h3')
        let NewP3 = document.createElement ('p')

      //Se toma el valor seleccionado por el usuario en la lista desplegable
        let Heroebuscado2=document.getElementById("select3").value
      
      //Se busca la información del heroe seleccionado (img, nombre y bio) y se carga en los elementos creados dimamicamente
        switch (Heroebuscado2){
            case "Aquaman":
                  NewImg3.setAttribute ('src', 'assets/img/aquaman.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH33.innerHTML = `${element.nombre}` 
                          NewP3.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Batman":
                  NewImg3.setAttribute ('src', 'assets/img/batman.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH33.innerHTML = `${element.nombre}` 
                          NewP3.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Daredevil":
                  NewImg3.setAttribute ('src', 'assets/img/daredevil.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH33.innerHTML = `${element.nombre}` 
                          NewP3.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Hulk":
                  NewImg3.setAttribute ('src', 'assets/img/hulk.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH33.innerHTML = `${element.nombre}` 
                          NewP3.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Linterna Verde":
                  NewImg3.setAttribute ('src', 'assets/img/linterna-verde.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH33.innerHTML = `${element.nombre}` 
                          NewP3.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Spider-Man":
                  NewImg3.setAttribute ('src', 'assets/img/spiderman.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH33.innerHTML = `${element.nombre}` 
                          NewP3.innerHTML = `${element.bio}`    
                      }
                  })
                  break;
            case "Wolverine":
                  NewImg3.setAttribute ('src', 'assets/img/wolverine.png')    
                  Heroes2.forEach (element =>{
                      if (`${element.nombre}` == Heroebuscado2) {
                          NewH33.innerHTML = `${element.nombre}` 
                          NewP3.innerHTML = `${element.bio}`    
                      }
                  })
              break;
            default:
                  alert("Debes seleccionar un Héroe")
        }

      //Creamos el Padre, le añadimos la información de los hijos y le indicamos que la pinte en el Div "tres"
        let addhere3 = document.getElementById ('tres') 
        addhere3.appendChild (NewImg3)
        addhere3.appendChild (NewH33)
        addhere3.appendChild (NewP3)
 }
  









