# Fila Duplamente Terminada (Deque)

Em ciência da computação, **fila duplamente terminada** (double-ended queue, ou deque) é uma [fila](../queue/README.md) especial em que os elementos podem ser adicionados ou removidos tanto na cabeça quanto na cauda. 

Os métodos implementados para a fila são:
- `enqueue(element)`: adiciona um elemento ao final da fila;
- `dequeue()`: remove um elemento do início da fila;
- `peek()`: retorna o elemento que está no início fila;
- `isEmpty()`: retorna `true` caso a fila não contenha nenhum elemento;  
- `clear()`: remove todos os elementos da fila;
- `size()`: retorna a quantidade de elementos enfileirados; 
- `toString()`: retorna uma representação da fila em formato de string;