const hero = "Izuku Midoriya"
const xp = 10000
const limits = [0, 1000, 2000, 5000, 7000, 8000, 9000, 10000]
const categories = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

let level = "Ferro"
let message = ""

for (let index = 0; index < limits.length; index++) {
  if (xp > limits[index]) {
    level = categories[index]
  }
}

message = "O Herói de nome " + hero + " está no nível de " + level
console.log(message)
