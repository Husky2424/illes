let nom='ana';
let Nom='Dani'
//alert(nom);

//esto es un comentario
/* puedo meter lo q quiera

mientras luego lo cierre */

//les constants son variables q no canvien el seu valor

const G= 9.8;
const PI=3.14;

nom= "Pepe";

function saluda() {
 let valor = document.getElementById("campNom").value;

//llamamos la funcion
document.getElementById("resultat").innerHTML = "hola, " +valor; 
}



function comprovaLogin() {
    let usuari= document.getElementById("usuari").value;
    let password= document.getElementById("password").value;
    
    if (usuari == "admin" && password == "1234") {
        alert("sesió iniciada")   
    }
    //else{
       // alert("fuera inmigrante")
    //}
    if(usuari != "admin"){
        alert("mal usuario imbecil")
    }
    else if(password != "1234"){
        alert("mal contraseña imbecil")
    }
    else{
        alert("todo mal imbecil")
    }
}