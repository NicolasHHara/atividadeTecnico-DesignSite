// Array global que será usado por todas as funções
let minhaCesta = [];

function renderArray() {
    console.log(minhaCesta);
}

function showArray(array) {
    // Remove o container antigo, se existir
    let existente = document.querySelector(".containerMinhaCesta");
    if (existente) {
        existente.remove();
    }

    // Cria o novo container
    let containerMinhaCesta = document.createElement("div");
    containerMinhaCesta.classList.add("containerMinhaCesta");
    containerMinhaCesta.innerHTML = `
        <h2>Minha Cesta</h2>
        <ul id="cestaList"></ul>
    `;

    // Adiciona o container ao body
    document.body.appendChild(containerMinhaCesta);

    // Preenche a lista com os itens do array
    let cestaList = containerMinhaCesta.querySelector("#cestaList");
    array.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        cestaList.appendChild(li);
    });
}

function addToArray() {
    let item = "Item Exemplo";
    minhaCesta.push(item);
    console.log(minhaCesta);
    showArray(minhaCesta);
}

// Executa a função para mostrar array inicial vazio
renderArray();

// Exemplo: adiciona item após 1 segundo (simula clique)
setTimeout(() => {
    addToArray();
}, 1000);