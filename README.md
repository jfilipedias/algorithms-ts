# Algoritmos e Estrutura de Dados

<p align="center">
  <img alt="Developer" src="https://img.shields.io/badge/developer-jfilipedias-blue">
  <img alt="GitHub" src="https://img.shields.io/github/license/jfilipedias/algorithms">
</p>
<br>

Esse projeto foi desenvolvido com o objetivo de estudar algoritmos e estrutura de dados com TypeScript. O projeto se inspira no repositório [JavaScript Algorithms and Data Structures
](https://github.com/trekhleb/javascript-algorithms) do [Oleksii Trekhleb
](https://twitter.com/Trekhleb) e usa como base o livro [Estruturas de dados e algoritmos com JavaScript](https://novatec.com.br/livros/estruturas-de-dados-algoritmos-em-javascript-2ed/) da [Loiane Groner](https://twitter.com/loiane).

<div align="center">
  <img alt="Stack" title="stack" src="./docs/cover.png" />
</div>

## Algoritmos

### Search

- [Binary Search](./src/algorithms/search/binary-search/index.ts)

### Sorting

- [Bubble Sort](./src/algorithms/sorting/bubble-sort/index.ts)
- [Insertion Sort](./src/algorithms/sorting/insertion-sort/index.ts)
- [Merge Sort](./src/algorithms/sorting/merge-sort/index.ts)
- [Quicksort](./src/algorithms/sorting/quicksort/index.ts)
- [Selection Sort](./src/algorithms/sorting/selection-sort/index.ts)


## Estrutura de Dados

- [Deque](./src/data-structure/deque/index.ts)
- [Doubly Linked List](./src/data-structure/doubly-linked-list/index.ts)
- [Linked List](./src/data-structure/linked-list/index.ts)
- [Queue](./src/data-structure/queue/index.ts)
- [Stack](./src/data-structure/stack/README.md)

## Getting Started

Para executar esse projeto será necessário ter o [Node.js](https://nodejs.org/) e o [pnpm](https://pnpm.io/) instalados.

O projeto é coberto por tests automatizados que executam os algoritmos e estrutura de dados implementados. 

Para isso executar os testes execute o comando:

```bash
pnpm test
```

Para verificar a cobertura de testes execute o comando:

```bash
pnpm coverage
```

## Tecnologias

- [ESLint](https://eslint.org/)
- [Node.js](https://nodejs.org/)
- [Prettier](https://eslint.org/)
- [TypeScript](https://typescriptlang.org/)
- [Vitest](https://vitest.dev/)