// gallery lightbox in landing page
$(document).ready(function() {
    $('.gallery-desc').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery : {
            enabled: true
        }
    })
});

// // slider for menu page
// $('.slider-menu').slick( {
//     arrows: true,
//     infinite: true,
//     autoplay: false,
//     prevArrow: $('.prevMenu'),
//     nextArrow: $('.nextMenu')
// });
// gallery lightbox in landing page
$(document).ready(function() {
    $('.gallerys').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery : {
            enabled: true
        }
    })
});