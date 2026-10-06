function calcularPrecio() {
    const precio= document.getElementById("precio").value;
    const radioSI=document.getElementById("radioSI").checked;
    const radioNO=document.getElementById("radioNO").checked;
    const disSI=document.getElementById("disSI").checked;
    const disNO=document.getElementById("disNO").checked;
    const disME=document.getElementById("disME").checked;

    if (radioSI==true) {
        let precioFinal= precio*0.25;    
        if (disSI==true){
            let precioFinal2= precioFinal*0.5;
            alert(precioFinal2)
        }
        else if (disNO==true){
            alert(precioFinal)
        }
        else if (disME==true){
            let precioFinal2=precioFinal*0.8;
            alert(precioFinal2)
        }

    }

    else if (radioNO==true) {
        if (disSI==true){
            let precioFinal=precio*0.50;
            alert(precioFinal)
        }
        else if (disNO==true){
            alert(precio)
        }
        else if (disME){
            let precioFinal2=precio*0.8;
            alert (precioFinal2)
        }
    }



    
    else{
        
        alert("no has escrito nada");
    }

}
