"use strict";
console.log("start");
$(document).ready(function () {
    // $('.collapsible').collapsible();
    setDashboard();
    // retrieveData();
    buildNav();
});
var container = document.getElementById("container");
// let content = document.getElementById("main-content");  
var nav = document.getElementById("nav-bar");
// @ts-ignore
var parsedServices;
var parsedRemotes;
function getAddress() {
}
function buildNav() {
    if (nav == null) {
        console.log("could not get nav bar");
        return;
    }
    nav.className += " nav-padding";
    nav.innerHTML =
        "<span class=\"services-header\">navigation</span>\n<br>\n<div class=\"collection\">\n<a href=\"#!\" class=\"collection-item active white\"></a>\n<a href=\"#!\" class=\"collection-item\"></a>\n<a href=\"#!\" class=\"collection-item\"></a>\n<a href=\"#!\" class=\"collection-item\"></a>\n<a href=\"#!\" class=\"collection-item\"></a>\n</div>\n";
}
function setDashboard() {
    var content = document.getElementById("main-content");
    if (content == null) {
        console.log("error=could not get main-content div");
        return;
    }
    content.innerHTML =
        "<h3>Testing Tool</h3>\n";
}
