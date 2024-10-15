let nomeHeroi = "Kesty"
let quantExp = 40.000
let nivel = ""

switch(quantExp){
    case 0<1000:
        nivel = "Ferro" 
        console.log("O Herói de nome " + nomeHeroi
            + " está no nível de " + nivel
        )
        break

        case 1001<2000:
        nivel = "Bronze" 
        console.log("O Herói de nome " + nomeHeroi
            + " está no nível de " + nivel
        )
        break

        case 2001<=5000:
        nivel = "Prata" 
        console.log("O Herói de nome " + nomeHeroi
            + " está no nível de " + nivel
        )
        break

        case 5001<=7000:
        nivel = "Ouro" 
        console.log("O Herói de nome " + nomeHeroi
            + " está no nível de " + nivel
        )
        break

        case 7001<=8000:
        nivel = "Platina" 
        console.log("O Herói de nome " + nomeHeroi
            + " está no nível de " + nivel
        )
        break

        case 8001<=9000:
        nivel = "Ascendente" 
        console.log("O Herói de nome " + nomeHeroi
            + " está no nível de " + nivel
        )
        break

        case 9001<=10000:
        nivel = "Imortal" 
        console.log("O Herói de nome " + nomeHeroi
            + " está no nível de " + nivel
        )
        break

        case 10001>=10001:
        nivel = "Radiante" 
        console.log("O Herói de nome " + nomeHeroi
            + " está no nível de " + nivel
        )
        break
}