"use strict";

$('img').click(function () {
    let imgPath = $(this).attr('src');
    $('.here img').attr('src',imgPath);
});