# Pilha (Stack)

Em ciência da computação, **pilha** é uma estrutura de dados abstrata para uma coleção ordenada de itens que obedece o conceito **LIFO** (acrônimo para **Last In, First Out**, ou seja, **o último a entrar é o primeiro a sair**). As operações de manipulação da pilha ocorrem no mesmo lado. Na estrutura de pilha o seu final é conhecido como topo e possui os elementos mais recentes, enquanto o início é conhecido como base e contem os elementos mais antigos.

As implementados para a pilha são:
- `push(element: T): void`: adiciona um elemento ao topo da pilha;
- `pop():void`: remove um elemento do topo da pilha;
- `peek(): T`: retorna o elemento que está no topo da pilha;
- `isEmpty(): boolean`: retorna `true` caso a pilha não contenham nenhum elemento;  
- `clear(): void`: remove todos os elementos da pilha;
- `size(): number`: retorna a quantidade de elementos empilhados; 