# Fila Duplamente Terminada (Deque)

Em ciência da computação, **fila duplamente terminada** (frequentemente abreviada para **deque**, do inglês double-ended queue) é uma [fila](../queue/README.md) especial em que os elementos podem ser adicionados ou removidos tanto no início (cabeça) quanto no final (cauda). 

Os métodos implementados para a deque são:
- `addFront(element)`: adiciona um elemento ao início da deque;
- `addBack(element)`: adiciona um elemento ao final da deque;
- `removeFront()`: remove um elemento do início da deque;
- `removeBack()`: remove um elemento do final da deque;
- `peekFront()`: retorna o elemento que está no início deque;
- `peekBack()`: retorna o elemento que está no final deque;
- `isEmpty()`: retorna `true` caso a deque não contenha nenhum elemento;  
- `clear()`: remove todos os elementos da deque;
- `size()`: retorna a quantidade de elementos enfileirados; 
- `toString()`: retorna uma representação da deque em formato de string;