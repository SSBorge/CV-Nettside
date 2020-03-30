// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


// Funksjon for å vise bilde ved klikk
// Source: https://stackoverflow.com/questions/25023199/in-bootstrap-open-enlarge-image-in-modal
$(function () {
    $('.pop').on('click', function () {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');
    });
});

// Popover kan nå brukes med link
$("[data-toggle=popover]")
    .popover({ html: true })

// Popover fjernes etter et intervall
// Source: https://stackoverflow.com/questions/14528442/auto-hide-bootstrap-popover/14529020
$('.dpop').popover().click(function () {
    setTimeout(function () {
        $('.dpop').popover('hide');
    }, 2000);
});
