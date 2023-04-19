

 




 let numA = 0
 let numB = 1
 let numC = 0
 let fibonacci=[0,1,];


 for(var c = 0;c < 18; c++){
    numC = numA + numB;
    fibonacci.push(numC)

    numA = numB
    numB = numC

}

console.log(fibonacci);

function finalizar(){
    let res = document.getElementById('res');
    res.innerHTML = ''
    let inputNumero = document.getElementById('numInput')

    if(fibonacci.includes(Number(inputNumero.value))){
        res.innerHTML+= `<p class = "resp"> Os 20 primeiros números da sequência fibonacci são: ${fibonacci} </p>`
        res.innerHTML+= `<p class = "resp"> Você digitou o numero: ${Number(inputNumero.value)}, esse número pertence a sequência fibonacci! </p>`
    }else{
        res.innerHTML+= `<p class = "resp"> Os 20 primeiros números da sequência fibonacci são: ${fibonacci},  </p>` 
        res.innerHTML+= `<p class = "resp"> você digitou o numero: ${Number(inputNumero.value)}, esse número não pertence a sequência  fibonacci! </p>`   
    }

    inputNumero.value = ''
}

