// let h1 = document.createElement("h1");

let contenedor = document.querySelector(".contenedor")
let paragraph = document.getElementById("paragraph")

let cantVisitas = parseInt(localStorage.getItem("local")) || 0
let cantSesion = parseInt(sessionStorage.getItem("session")) || 0
// let usuario=`key 0`||"Bienvenido a"
// let usuarios=[];
//  usuarios=cantSesion<0?  ["sin"]:localStorage.getItem("key");
// let usuarios = [{"nom":"jorge2"}]
let usuario = JSON.parse(localStorage.getItem("key")) == null ? [] : JSON.parse(localStorage.getItem("key"));

// console.log("objeto : "+usuario[1]["usuario"]);
// usuario[usuarios.length] 



paragraph.addEventListener("click", (e) => {
    identificarUsuario()

})


identificarUsuario = () => {
    let un = prompt("Angrese su nombre para identificarse:")
    let usuariosC = {
        // id:usuarios[usuarios.length-1] ,
        usuario: un
        }
    
        usuario.push(usuariosC);

    localStorage.setItem("key", JSON.stringify(usuario))
}

bienvenida = () => {
   
    // let n = (usuario ==" "||usuario.length<1) ? "Bienvenido 2" : ` Bienvenido usuario: ${usuario[usuario.length-1]["usuario"]}`;
    let n = (usuario=="") ? "Bienvenido 2" : ` Bienvenido usuario: ${usuario[usuario.length-1]["usuario"]}`;

    console.log("usuario:"+ usuario.length  );
    paragraph.innerText = n

    // usuario[usuario.length]

}


let i=0
bienvenida()
function contador(f) {
    console.log(cantVisitas);
    cantVisitas = cantVisitas + 1;
    cantSesion++
  
    let n = document.createElement("h1").appendChild(document.createTextNode("contador sesion: " +cantSesion))
    n.className="colo"
    //  let texto2 = document.createTextNode("contador sesion: " +cantSesion)
    //  let h1 = document.createTextNode(h1).appendChild(texto2)
    setInterval(() => {
       
        // f(texto2 = document.createTextNode("contador sesion: " +cantSesion++)),console.log(i++);
    }, 1000)

    f(n)

    let nuevaEtiqueta = document.createElement("texto")
    
   
    nuevaEtiqueta.innerText = ` contador Visitas: ${cantVisitas }`;

    contenedor.append(nuevaEtiqueta);


    localStorage.setItem("local", cantVisitas);
    sessionStorage.setItem("session", cantSesion);

}

contador( (n) => document.body.appendChild(n) )



// f(cantVisitasp)
// document.body.appendChild(nuevaEtiqueta)
// nuevaEtiqueta.appendChild(nuevaTexto)