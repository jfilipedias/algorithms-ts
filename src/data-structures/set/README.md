# Conjuntos (Set)
Em ciência da computação, **conjunto** é uma estrutura de dados abstrata para uma coleção de itens sequenciais composto por **elementos únicos**. Desse modo, essa estrutura de dados obedece ao conceito matemático de conjuntos finitos.

Os métodos implementados para o conjunto são:
- `add(element)`: adiciona um elemento que ainda não faça parte do conjunto;
- `delete(element)`: remove um elemento do conjunto;
- `union(set)`: retorna a união do conjunto atual com o conjunto passado como parâmetro;
- `intersection(set)`: retorna os valores que pertencem tanto ao conjunto atual como ao conjunto passado como parâmetro; 
- `difference(set)`: retorna os valores que pertencem ao conjunto atual, mas **não** ao conjunto passado como parâmetro; 
- `isEmpty()`: retorna `true` caso o conjunto não contenha nenhum elemento;  
- `clear()`: remove todos os elementos do conjunto;
- `size()`: retorna a quantidade de elementos do conjunto; 
- `values()`: retorna um array com os elementos do conjunto; 
- `toString()`: retorna uma representação do conjunto em formato de string;