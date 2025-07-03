let minhaCesta = [];

function renderArray() {
    if (!document.querySelector(".containerMinhaCesta")) {
        let containerMinhaCesta = document.createElement("div");
        containerMinhaCesta.classList.add("containerMinhaCesta");
        containerMinhaCesta.innerHTML = `
            <h2>Minha Cesta</h2>
            <ul id="cestaList"></ul>
        `;
        document.body.appendChild(containerMinhaCesta);
    }
}

function updateCesta() {
    let cestaList = document.querySelector("#cestaList");
    cestaList.innerHTML = "";
    minhaCesta.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        cestaList.appendChild(li);
    });
}

function addToArray(nomeCidade) {
    minhaCesta.push(nomeCidade);
    renderArray();
    updateCesta();
    console.log(minhaCesta);
}
