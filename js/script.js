const container = document.querySelector(".container");
let multipleThree = "";
let multipleFive = "";

// VERSIONE Append
for (let i = 1; i <= 100; i++) {
    console.log(i);

    // creazione div generico
    const square = document.createElement("div");

    // aggiunta della classe "square" al div
    square.classList.add("square");

    // contenuto div multipli di 3
    if (i % 3 === 0) {
        square.append(i) = multipleThree
    }

    // aggiunta del contenuto al div
    square.append(i);

    // aggiunta del div al container
    container.append(square);
}