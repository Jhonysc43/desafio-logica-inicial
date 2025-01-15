let nomeHeroi = "Chico"
let pontosExp = 10010
let pontosRestante = 0

if(pontosExp ===0){
    console.log("O personagem " + nomeHeroi +  " não possui pontos de Experiência e está na categoria camponês. Precisará comer bastante feijão.")
    pontosRestante = 1000 - pontosExp
    console.log("Faltam " + pontosRestante + " pontos para o " + nomeHeroi + " ser promovido a Herói de ferro")
}

else if(pontosExp <=1000){
    console.log("O personagem " + nomeHeroi + " possui " + pontosExp + " pontos de Experiência e está na categoria Herói de Ferro. Já é capaz de ganhar brigas na taberna e caçar animais de pequeno porte.")
    pontosRestante = 2000 - pontosExp
    console.log("Faltam " + pontosRestante + " pontos para o " + nomeHeroi + " ser promovido a Herói de Bronze")
}

else if(pontosExp<=2000){
    console.log("O personagem " + nomeHeroi + " possui " + pontosExp + " pontos de Experiência e está na categoria Herói de Bronze. Você é capaz de resgatar donzelas no alto de torres de castelos.")
    pontosRestante = 5000 - pontosExp
    console.log("Faltam " + pontosRestante + " pontos para o " + nomeHeroi + " ser promovido a Herói de Prata")
}

else if(pontosExp<=5000){
    console.log("O personagem " + nomeHeroi + " possui " + pontosExp + " pontos de Experiência e está na categoria Herói de Prata. Pronto para vencer combates contra os melhores cavaleiros do reino.")
    pontosRestante = 7000 - pontosExp
    console.log("Faltam " + pontosRestante + " pontos para o " + nomeHeroi + " ser promovido a Herói de Ouro.")
}

else if(pontosExp<=7000){
    console.log("O personagem " + nomeHeroi + " possui " + pontosExp + " pontos de Experiência e está na categoria Herói de Ouro. Pronto para derrotar criaturas malignas de médio porte")
    pontosRestante = 8000 - pontosExp
    console.log("Faltam " + pontosRestante + " pontos para o " + nomeHeroi + " ser promovido a Herói de Platina.")
}

else if(pontosExp<=8000){
    console.log("O personagem " + nomeHeroi + " possui " + pontosExp + " pontos de Experiência e está na categoria Herói de Platina. Muito forte, muito forte mesmo!")
    pontosRestante = 9000 - pontosExp
    console.log("Faltam " + pontosRestante + " pontos para o " + nomeHeroi + " ser promovido a Herói Ascendente.")
}

else if(pontosExp<=9000){
    console.log("O personagem " + nomeHeroi + " possui " + pontosExp + " pontos de Experiência e está na categoria Herói Ascendente. Bravo demais! Nem o maior dos dragões te derrotará!")
    pontosRestante = 10000 - pontosExp
    console.log("Faltam " + pontosRestante + " pontos para o " + nomeHeroi + " ser promovido a Herói Imortal.")
}

else if(pontosExp<=10000){
    console.log("O personagem " + nomeHeroi + " possui " + pontosExp + " pontos de Experiência e está na categoria Herói Imortal. Este nível de poder é realmente necessário?")
    pontosRestante = 10001 - pontosExp
    console.log("Faltam " + pontosRestante + " pontos para o " + nomeHeroi + " ser promovido a Herói Radiante.")
}

else if(pontosExp>=10001){
    console.log("O personagem " + nomeHeroi + " possui " + pontosExp + " pontos de Experiência e está na categoria Herói Radiante.")
    console.log("Parabéns, " + nomeHeroi +"!" +" Você se tornou um guerreiro formidável, destemido, implacável e não existe nenhum ser mais forte que você.")
}
