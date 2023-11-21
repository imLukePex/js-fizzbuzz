const container = document.querySelector(".container");
let multipleThree = "Fizz";
let multipleFive = "Buzz";
let multipleBoth = "FizzBuzz"

// VERSIONE Append
for (let i = 1; i <= 100; i++) {
    console.log(i);

    // creazione div generico
    const square = document.createElement("div");

    // aggiunta della classe "square" al div
    square.classList.add("square");
    
    // aggiunta contenuto div multipli di 3
    if (i % 3 === 0) {
        square.append(multipleThree);
    } else if (i % 5 === 0) {
        square.append(multipleFive);
    } else if (i % 3 === 0 && i % 5 === 0) {
        square.append(multipleBoth);
    } else {
        // aggiunta del contenuto al div
        square.append(i);
    }

    // aggiunta del div al container
    container.append(square);
}