let km = prompt(`inserisci il numero di chilometri che vuoi percorrere`);
console.log(`Vuoi percorrere` + ` ` + km + ` ` + `chilometri`)

let age = prompt(`inserisci la tua eta`);
console.log(`Hai` + ` ` + age + ` ` + `anni` )

const kmPrice = 0.21;

let ticketPrice = (km * kmPrice)

if (age < 18){
  (ticketPrice / 100 * 20)
  console.log(`Dato che hai` + ` ` + age + ` ` + `anni viene applicato uno sconto del 20%`)
  ticketPrice.toFixed(2)
}

if (age > 65){
  (ticketPrice / 100 * 40)
  console.log(`Dato che hai` + ` ` + age + ` ` + `anni viene applicato uno sconto del 40%`)
}

console.log(`Il prezzo del biglietto è' di` + ` ` + ticketPrice + ` ` + `euro`)

