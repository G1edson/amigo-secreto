const arrayAmigos = [];

function adicionarAmigo() {
    const nome = document.getElementById('amigo').value;
    
    if(nome.trim() === '') {
        alert('Por favor, insira um nome válido!');
        return;
    } else if (nome.length < 2) {
        alert('Por favor, insira um nome com mais de 1 caracter!');
        return;
    }

    arrayAmigos.push(nome);
    console.log(arrayAmigos);

    document.getElementById('amigo').value = '';
    document.getElementById('sortear').disabled = false;
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    arrayAmigos.forEach(amigo => {
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        lista.appendChild(novoAmigo);
    });
}

function sortearAmigo() {
    const amigo = Math.floor(Math. random() * arrayAmigos.length);
    console.log(arrayAmigos[amigo]);
    
    if(arrayAmigos.length === 0) {
        alert('Não há amigos para sortear, lista vazia!');
        document.getElementById('sortear').disabled = true;
        return
    } else {
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        const novoItem = document.createElement('li');
        novoItem.textContent = "O amigo secreto sorteado é: " + arrayAmigos[amigo];
        resultado.appendChild(novoItem);
        console.log(novoItem);
        arrayAmigos.splice(amigo, 1);
    }

    atualizarLista();
}



