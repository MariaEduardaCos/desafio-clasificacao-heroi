
let nomeHeroi = "Pikachu"
let quantidadeDeXP = 990
let classificacaoHeroi = ""

if (quantidadeDeXP <= 1000){
    classificacaoHeroi = "Ferro"
}else if (quantidadeDeXP <=2000){
    classificacaoHeroi = "Bronze"
}else if (quantidadeDeXP <= 6000){
    classificacaoHeroi = "Prata"
}else if (quantidadeDeXP <=7000){
    classificacaoHeroi = "Ouro"
}else if (quantidadeDeXP <= 8000){
    classificacaoHeroi = "Platina"
}else if (quantidadeDeXP <= 9000){
    classificacaoHeroi = "Ascendente"
}else if (quantidadeDeXP <= 10000){
    classificacaoHeroi = "Imortal"
}else{
    classificacaoHeroi = "Radiante"
}
console.log(`O Herói de nome ${nomeHeroi} esta no nível de ${classificacaoHeroi}`)