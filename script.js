let km = prompt(`inserisci il numero di chilometri che vuoi percorrere`);
console.log(`Vuoi percorrere` + ` ` + km + ` ` + `chilometri`)

let age = prompt(`inserisci la tua eta`);
console.log(`Hai` + ` ` + age + ` ` + `anni` )

const kmPrice = 0.21;

let ticketPrice = km * kmPrice;

let discount = 0;

let discountPercentage = 0; 

if (age < 18){

  discount = (ticketPrice / 100 * 20);
  discountPercentage = 20
  
} else if (age > 65){
  
  discount = (ticketPrice / 100 * 40);
  discountPercentage = 40

}

ticketPrice = ticketPrice - discount

console.log(`Dato che hai` + ` ` + age + ` ` + `anni viene applicato uno sconto del` + ` ` + discountPercentage + `%`)

console.log(`Il prezzo del biglietto è' di` + ` ` + ticketPrice.toFixed(2) + ` ` + `euro`)

