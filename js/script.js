const container = document.querySelector(".container");

// VERSIONE Append
for (let i = 1; i <= 100; i++) {
    console.log(i);

    // creazione div generico
    const square = document.createElement("div");

    // aggiunta della classe "square" al div
    square.classList.add("square");

    // aggiunta del contenuto al div
    square.append(i);

    // aggiunta del div al container
    container.append(square);
}