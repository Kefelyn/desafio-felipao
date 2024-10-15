let nomeHeroi = "Kesty"
let Exp = 40000
let nivel = ""

if(Exp <1000){
    nivel = "Ferro"}

else if(Exp >1001 && Exp <2000){
    nivel = "Bronze"}
        
else if(Exp >2001 && Exp <5000){
    nivel = "Prata"}

else if(Exp >5001 && Exp <7000){
    nivel = "Ouro"}
        
else if(Exp >7001 && Exp <8000){
    nivel = "Platina"}

else if(Exp >8001 && Exp <9000){
    nivel = "Ascendente"}

else if(Exp >9001 && Exp <10000){
    nivel = "Imortal"}

else if(Exp >= 10001){
    nivel = "Radiante"}
  
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel)