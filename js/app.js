let amigos = [];

function adicionar() {
    let nome = document.getElementById("nome-amigo");
    if(nome.value == ''){
        alert("Digite um nome!");
        return;
    }

    let amigosIncluidos = document.getElementById("lista-amigos");
        amigos.push(nome.value);
        if (amigosIncluidos.textContent == '') {
            amigosIncluidos.textContent = nome.value;
        } else {
            amigosIncluidos.textContent += ', ' + nome.value;
        }
    
        
    nome.value = '';

    atualizarLista();
    atualizarSorteio();

}



function sortear() {

    if (amigos.length < 4) {
        alert("Por favor, adicione até quatro participantes ou mais");
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById("lista-sorteio"); 

    for(let i = 0; i < amigos.length; i++) {

    if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
    }
    
   }

}


function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}



function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}



function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}


function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = '';
    document.getElementById("lista-sorteio").innerHTML = '';
}