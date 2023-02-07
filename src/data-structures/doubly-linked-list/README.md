# Lista Duplamente Ligada (Double Linked List)

Em ciência da computação, **lista duplamente ligada**,assim como na [lista ligada](../linked-list/README.md), utilizamos ponteiros para manter a sequência dos nós.

Contudo, nessa estrutura existe uma dupla ligação onde um nó possui dois ponteiros: um para o elemento anterior e outro para o próximo. Desse modo, é possível percorrer a lista do começo para o fim ou vice-versa.

Os métodos implementados para a lista duplamente ligada são:

- `push(element)`: adiciona um elemento ao final da lista;
- `remove(element)`: remove um elemento da lista;
- `removeAt(index)`: remove o elemento no índice especificado;
- `insert(element, index)`: insere um elemento no índice especificado
- `indexOf(element)`: retorna o índice do elemento caso esteja na lista, caso contrário retorna `-1`;
- `getAt(index)`: retorna o elemento do índice especificado;
- `getHead()`: retorna o elemento que está no início lista;
- `isEmpty()`: retorna `true` caso a lista não contenha nenhum elemento;
- `clear()`: remove todos os elementos da lista;
- `size()`: retorna a quantidade de elementos;
- `toString()`: retorna uma representação da lista em formato de string;
