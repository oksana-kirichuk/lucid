// AOS Animation

AOS.init();

// Tabulator

$('.tabulator-container').tabPlugin({
    animationSpeed: 500,
    transitionFunction: 'ease-out'
});

// Modal window

$('.modal-container').modalPlugin({
    animationSpeed: 700,
    dataAttr: 'data-modal'
});

// Mobile menu

$('[data-mobile]').click(function () {
    var selector = $(this).attr('data-mobile');

    if (selector === 'close') {
        $('.overlay').removeClass('active');
        $('.mobile-nav').removeClass('active');
    } else {
        $('.overlay').addClass('active');
        $('.mobile-nav').addClass('active');
    }
});