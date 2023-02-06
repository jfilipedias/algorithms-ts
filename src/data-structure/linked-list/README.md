# Lista Ligada (Linked List)

Em ciência da computação, **lista ligada** é uma estrutura de dados abstrata para uma coleção de itens composta por nós que juntos representam uma sequência.

Na lista ligada, cada nó guarda o valor do elemento propriamente dito e uma referência, ou ponteiro, para o endereço de memória do próximo nó da lista. Desse modo, caso deseje acessar um elemento no meio da lista, será necessário partir do início da lista (head).

Os métodos implementados para a lista ligada são:

- `push(element)`: adiciona um elemento ao final da lista;
- `remove(element)`: remove um elemento da lista;
- `removeAt(index)`: remove o elemento no índice especificado;
- `set(element, index)`: altera o elemento no índice especificado;
- `insert(element, index)`: insere um elemento no índice especificado
- `indexOf(element)`: retorna o índice do elemento caso esteja na lista, caso contrário retorna `-1`;
- `getAt(index)`: retorna o elemento do índice especificado;
- `getHead()`: retorna o elemento que está no início lista;
- `isEmpty()`: retorna `true` caso a lista não contenha nenhum elemento;
- `clear()`: remove todos os elementos da lista;
- `size()`: retorna a quantidade de elementos;
- `toString()`: retorna uma representação da lista em formato de string;
