let count = 1

function increment() {
    document.querySelector("h2").innerText = count++;
}

function reset() {
        document.querySelector("h2").innerText = 0;
        count = 0;
}
