function jugar(valor) {


    valorMaquina=Math.round(1+Math.random()*(3-1));
    pinta(0);//limpiar pagina

    if(valor==valorMaquina){
        pinta(valor);
        pinta(valorMaquina)
        document.getElementById("resultado").innerHTML+="Has empatado"
    }
    if(valor==1 && valorMaquina==3){
        pinta(valor);
        pinta(valorMaquina)
        document.getElementById("resultado").innerHTML+="Ganas"
    } if(valor==1 && valorMaquina==2){
        pinta(valor);
        pinta(valorMaquina)
        document.getElementById("resultado").innerHTML+="Pierdes"
    }
    if(valor==2 && valorMaquina==1){
        pinta(valor);
        pinta(valorMaquina)
        document.getElementById("resultado").innerHTML+="Ganas"
    } if(valor==2 && valorMaquina==3){
        pinta(valor);
        pinta(valorMaquina)
        document.getElementById("resultado").innerHTML+="Pierdes"
    }
    if(valor==3 && valorMaquina==2){
        pinta(valor);
        pinta(valorMaquina)
        document.getElementById("resultado").innerHTML+="Ganas"
    } if(valor==3 && valorMaquina==1){
        pinta(valor);
        pinta(valorMaquina)
        document.getElementById("resultado").innerHTML+="Pierdes"
    }
    

    function pinta (prmtro) {

               
        if(prmtro==0){
            document.getElementById("resultado").innerHTML=""
        }
        if(prmtro==1){
        document.getElementById("resultado").innerHTML+="<div><img class='btnresultado' src='img/piedra-slide.png'><div>"
    }
    if(prmtro==2){
        document.getElementById("resultado").innerHTML+="<div><img class='btnresultado' src='img/papel-slide.png'><div>"
    }
    if(prmtro==3){
        document.getElementById("resultado").innerHTML+="<div><img class='btnresultado' src='img/tijera-slide.png'><div>"
    }
    }
}