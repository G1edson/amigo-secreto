## Amigo Secreto
## Challenge amigo secreto ![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)
Um desafio de lógica de programação da Oracle Next Education + Alura para a fixação do aprendizado.

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
## Instalar / Testar
Para testar o desafio é só fazer o clone do projeto e abrir com o arquivo index.html com plugin ´five server´ no VSCode por exemplo.
![image](https://github.com/user-attachments/assets/67f2f3cf-a7a0-4e9f-b11f-42ebbcebb09e)

## adicionarAmigo()
Nesse método tem a lógica de adicionar um amigo em um array.
```bach
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

    document.getElementById('amigo').value = '';
    document.getElementById('sortear').disabled = false;
    atualizarLista();
}
```
## atualizarLista()
Quanto um amigo é adicionado na lista ou sorteado esse método é chamado.
```bach
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    arrayAmigos.forEach(amigo => {
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        lista.appendChild(novoAmigo);
    });
}
```
## sortearAmigo()
Este método faz o sorteio do amigo secreto e removi o amigo sorteado da lista para não ser sorteado novamente.
```bach
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
```
### Adicionar amigos na lista
Tela que mostra onde adicionar amigos
![image](https://github.com/user-attachments/assets/997439e1-0ba4-46cc-a929-1c2e1259e6ec)

### Sortear amigo secreto
![image](https://github.com/user-attachments/assets/7c8f278c-5cea-45e5-88fc-b0566ed31d89)
Após o sorteio Angelica saiu da lista
![image](https://github.com/user-attachments/assets/96a1189f-e297-4a1b-ba63-8e24854864ce)

