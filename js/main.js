$('.bromo__slider').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick__btn slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M10.5813 25.6062L21.1875 15L10.5813 4.3937L8.8125 6.1612L17.6525 15L8.8125 23.8387L10.5813 25.6062Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick__btn slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M10.5813 25.6062L21.1875 15L10.5813 4.3937L8.8125 6.1612L17.6525 15L8.8125 23.8387L10.5813 25.6062Z" fill="white"/></svg></button>',
});

// scroll down
jQuery(document).ready(function() {
jQuery("a.main__scroll").click(function () {
elementClick = jQuery(this).attr("href")
destination = jQuery(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 2100);
return false;
});
});
