//Função do botão multiplicar
function clickmult(){
    let num1 = document.getElementById('num1');
    num1 = Number(num1.value);
    let num2 = document.getElementById('num2');
    num2 = Number(num2.value);

    mult(num1, num2)
}

//Função do botão fatorial
function clickfat(){
    let num = document.getElementById('numf');
    num = Number(num.value);
    let numinicial = document.getElementById('numf');
    numinicial = Number(numinicial.value);

    fatorial(num, numinicial)
}

function mult(n1, n2){
        var res = document.getElementById('result-mult');

        //Estrutura de condição: Confere se ambos campos estão preenchidos
        if(n1 == '' || n2 == ''){
            return res.innerHTML = (`Preencha os dois campos`);
        }else{
            let calculo = n1 * n2;
            return res.innerHTML = `a multiplicação desses números é ${calculo}`;
        }
}

function fatorial(num, numinicial){
    var res = document.getElementById('result-fatorial');

    //Estrutura de repetição para calcular o fatorial do número inserido e exibir o resultado em tela
    if(num == ''){
        return res.innerHTML = `Por favor, insira um número`
    }else if(num == 0 || num == 1){
        return res.innerHTML = `O fatorial de ${numinicial} é 1`
    }else{
        for (var i = num - 1; i >= 1; i--){
            num *= i;
        }
        return res.innerHTML = `O fatorial de ${numinicial} é ${num}`
    }
}