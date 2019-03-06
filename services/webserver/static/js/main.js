"use strict";
console.log("start");
// @ts-ignore
$(document).ready(function () {
    setDashboard();
    buildNav();
});
var testSet = false;
var container = document.getElementById("container");
// let content = document.getElementById("main-content");  
var nav = document.getElementById("nav-bar");
function buildNav() {
    if (nav == null) {
        console.log("could not get nav bar");
        return;
    }
    nav.className += " nav-padding";
    nav.innerHTML =
        "<span class=\"services-header\">navigation</span>\n                    <br>\n                    <div class=\"collection\">\n                    <a href=\"#!\" class=\"collection-item active white\"></a>\n                    <a href=\"#!\" class=\"collection-item\"></a>\n                    <a href=\"#!\" class=\"collection-item\"></a>\n                    <a href=\"#!\" class=\"collection-item\"></a>\n                    <a href=\"#!\" class=\"collection-item\"></a>\n                    </div>\n                    ";
}
function setDashboard() {
    var content = document.getElementById("main-content");
    if (content == null) {
        console.log("error=could not get main-content div");
        return;
    }
    content.innerHTML = "\n    <h3>Testing Tool</h3>\n    \n    <div class=\"input-field\">\n    <input id=\"input_text\" type=\"text\" data-length=\"10\">\n    <label for=\"input_text\">number</label>\n    </div>\n    <a class=\"waves-effect waves-light btn grey\" onclick=\"runTest();\">test</a>\n    ";
}
function runTest() {
    console.log("running test");
    var content = document.getElementById("main-content");
    if (content == null) {
        console.log("error=could not get main-content div");
        return;
    }
    if (!testSet) {
        content.appendChild(document.createElement('br'));
        content.appendChild(document.createElement('br'));
        var o = document.createElement('span');
        o.innerHTML = "results";
        content.appendChild(o);
        content.appendChild(document.createElement('br'));
        var ta = document.createElement("textarea");
        ta.style.height = "unset";
        ta.id = "output";
        ta.setAttribute('rows', '20');
        ta.setAttribute('cols', '84');
        content.appendChild(ta);
        content.appendChild(document.createElement('br'));
        content.appendChild(document.createElement('br'));
        testSet = true;
    }
    else {
        var out = document.getElementById("output");
        out.innerHTML = "";
    }
    var once = function (target, i, max) {
        var out = document.getElementById("output");
        out.innerHTML += "(" + (i + 1) + "/" + max + ") contacting c0\n";
        $.ajax({
            method: "GET",
            url: target,
        }).done(function (msg) {
            var out = document.getElementById("output");
            out.innerHTML += msg;
        });
        // var result = function(startTime) {
        //     let out = document.getElementById("output");
        //     out.innerHTML += msg;
        // }
        // var error = function(startTime) {
        // }
    };
    var times = document.getElementById('input_text').value;
    var max = 500;
    try {
        max = parseInt(times);
    }
    catch (_a) {
        console.log("could not parse");
    }
    for (var i = 0; i < max; i++) {
        setTimeout(once, i * 10, "c0", i, max);
    }
}
