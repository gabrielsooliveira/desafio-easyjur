$(document).ready(function() {
    $.getJSON('assets/json/livros.json', function(data) {
        renderCarousel('.carousel-books__track--main', data.main);
        renderCarousel('.carousel-books__track--derived', data.derived);
    });

    function renderCarousel(trackSelector, books) {
        const track = $(trackSelector);
        books.forEach((book, index) => {
            const activeClass = index === 0 ? 'active' : '';
            const bookItem = `
                <div class="carousel-item ${activeClass}">
                    <a href="${book.link}" target="_blank">
                        <img src="${book.image}" alt="${book.title}" class="d-block w-100 carousel-books__image img-fluid">
                    </a>
                    <p class="carousel-books__title">${book.title}</p>
                </div>`;
            track.append(bookItem);
        });
    }
});
