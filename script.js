function insert(num){//inserir numeros
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean(){//limpar
    document.getElementById('resultado'). innerHTML="";
}
function back(){//remover elemento 1 a 1
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1)
}
function calcular(){//resultado do calculo
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        window.alert('Nada para Calcular!')
    }
}