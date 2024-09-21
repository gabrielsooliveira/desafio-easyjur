# Carousel de Livros

Este projeto implementa um componente de carousel para livros, que pode ser facilmente reutilizado em diferentes partes de uma aplicação. O carousel exibe capas de livros com seus títulos e redireciona os usuários para a página de detalhes ao clicar em uma capa.

## Tecnologias Utilizadas

- **HTML5**: Estrutura a base do componente e define a semântica do conteúdo.
- **CSS3**: Estiliza o carousel, garantindo que seja visualmente atrativo e responsivo.
- **Bootstrap**: Utilizado para facilitar a responsividade e o design do carousel, aproveitando seus componentes e classes pré-definidas.
- **JavaScript ES6**: Adiciona interatividade ao carousel, gerenciando a navegação entre os itens.
- **jQuery**: Facilita a manipulação do DOM e a execução de animações.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- `index.html`: Contém a estrutura HTML do carousel.
- `style.css`: Estilos personalizados para o carousel, seguindo a metodologia BEM.
- `main.js`: Lógica para a criação do carousel e manipulação de dados.
- `livros.json`: Arquivo JSON contendo os dados dos livros.

## Metodologia BEM para Nomenclatura de Classes CSS

### O que é BEM?

A metodologia BEM (Block, Element, Modifier) é uma abordagem para organizar e nomear classes CSS, promovendo clareza, escalabilidade e reutilização. Aqui está um breve resumo dos conceitos:

- **Block (Bloco)**: O componente principal, como o carousel (`.carousel-books`).
- **Element (Elemento)**: Parte do bloco que não faz sentido fora dele, como um item do carousel (`.carousel-books__item`).
- **Modifier (Modificador)**: Variações do bloco ou elemento, como um item ativo (`.carousel-books__item--active`).

### Exemplos de Nomenclatura

```html
<div class="carousel-books">
    <div class="carousel-books__item carousel-books__item--active">Item 1</div>
    <div class="carousel-books__item">Item 2</div>
</div>
```
### Bloco
`.carousel-books`

### Elemento
`.carousel-books__item`

### Modificador
`.carousel-books__item--active`

### Benefícios do BEM
- **Clareza**: Nomeação descritiva que indica a relação entre componentes.
- **Escalabilidade**: Facilidade na adição de novos estilos e componentes.
- **Reutilização**: Possibilidade de reutilizar componentes em diferentes contextos.

## Como Integrar o Componente na Aplicação

#### 1. Clone o repositório:

```bash
git clone https://github.com/gabrielsooliveira/desafio-easyjur.git
```

#### 2. Inclua o component no HTML
**Exemplo** : Colocando o component carousel para os livros princiapis.

```bash
<div id="mainCarousel" class="carousel slide carousel-books w-100 m-auto">
    <div class="carousel-inner carousel-books__track--main"></div>
    <a class="carousel-control-prev carousel-books__arrow--left" href="#mainCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </a>
    <a class="carousel-control-next carousel-books__arrow--right" href="#mainCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
</div>
```

#### 3. Inclua o json ao javascript
**Exemplo** : Importação dos livros princiapis que estão gravados no `livros.json`.

```bash
$.getJSON('assets/json/livros.json', function(data) {
    renderCarousel('.carousel-books__track--main', data.main);
});
```

#### 4. Personalize os dados
**Exemplo** : Caso queira ir no arquivo `livros.json` para incluir seus próprios livros estruture um nome para aquele grupo de livros e incluar eles

```bash
"exemplo": [
    {
        "title": "Título do Livro",
        "image": "caminho/para/imagem.jpg",
        "link": "https://link-para-o-livro.com"
    }
    // Adicione mais livros conforme necessário
]
```

#### 7. Adaptações

Estilize conforme necessário no arquivo style.css para se adequar ao design.

#### 8. Teste

Teste a funcionalidade do carousel abrindo o arquivo index.html em um navegador ou integrando-o diretamente em sua aplicação.

   
