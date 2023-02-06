# Fila (Queue)

Em ciência da computação, **fila** é uma estrutura de dados abstrata para uma coleção de itens que obedece o conceito **FIFO** (acrônimo para **First In, First Out**, ou seja, **o primeiro a entrar é o primeiro a sair**). 

Na estrutura de fila o seu final é conhecido como cauda e possui os elementos mais recentes, enquanto o início é conhecido como cabeça e contem os elementos mais antigos. Diferente do que ocorre na [pilha](../stack/README.md), as operações de manipulação da fila ocorrem em lados distintos, ou seja, a adição de elementos ocorre na cauda, enquanto a remoção ocorre na cabeça. Desse modo, o elemento mais recente espera ao final da fila.

Os métodos implementados para a fila são:
- `enqueue(element)`: adiciona um elemento ao final da fila;
- `dequeue()`: remove um elemento do início da fila;
- `peek()`: retorna o elemento que está no início fila;
- `isEmpty()`: retorna `true` caso a fila não contenha nenhum elemento;  
- `clear()`: remove todos os elementos da fila;
- `size()`: retorna a quantidade de elementos enfileirados; 
- `toString()`: retorna uma representação da fila em formato de string;