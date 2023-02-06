# Pilha (Stack)

Em ciência da computação, **pilha** é uma estrutura de dados abstrata para uma coleção ordenada de itens que obedece o conceito **LIFO** (acrônimo para **Last In, First Out**, ou seja, **o último a entrar é o primeiro a sair**). 

Na estrutura de pilha o seu final é conhecido como topo e possui os elementos mais recentes, enquanto o início é conhecido como base e contem os elementos mais antigos. As operações de manipulação da pilha (adição e remoção de elementos) ocorrem no mesmo lado: o topo da pilha.  

Os métodos implementados para a pilha são:
- `push(element)`: adiciona um elemento ao topo da pilha;
- `pop()`: remove um elemento do topo da pilha;
- `peek()`: retorna o elemento que está no topo da pilha;
- `isEmpty()`: retorna `true` caso a pilha não contenha nenhum elemento;  
- `clear()`: remove todos os elementos da pilha;
- `size()`: retorna a quantidade de elementos empilhados; 
- `toString()`: retorna uma representação da pilha em formato de string;