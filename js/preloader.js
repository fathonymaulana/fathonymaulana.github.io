'use strict';

/**
 * | PRELOAD
 * |
 * | loading will be and after document is loaded
*/

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});