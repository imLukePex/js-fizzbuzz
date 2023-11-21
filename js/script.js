const container = document.querySelector(".container");
let multipleThree = "Fizz";
let multipleFive = "Buzz";
let multipleBoth = "FizzBuzz";

// VERSIONE Append
for (let i = 1; i <= 100; i++) {
    console.log(i);

    // creazione div generico
    const square = document.createElement("div");

    // aggiunta della classe "square" al div
    square.classList.add("square");
    
    // aggiunta contenuto div multipli

    // condizione per cui i numeri sono sia multipli di 3 che di 5
    if (i % 3 === 0 && i % 5 === 0) {
        square.append(multipleBoth);
        square.classList.add("multiple-both");

    // condizione per cui i numeri siano solo multipli di 3
    } else if (i % 3 === 0) {
        square.append(multipleThree);
        square.classList.add("multiple-three");

    // condizione per cui i numeri siano solo multipli di 5
    } else if (i % 5 === 0) {
        square.append(multipleFive);
        square.classList.add("multiple-five");

    } else {
        // aggiunta del contenuto senza nessuna condizione al div
        square.append(i);
    }

    // aggiunta del div al container
    container.append(square);
}