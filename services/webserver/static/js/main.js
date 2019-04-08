"use strict";
console.log("start");
// @ts-ignore
$(document).ready(function () {
    setDashboard();
    // buildNav();
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
    content.innerHTML = "\n    <h3>Testing Tool</h3>\n    \n    <div class=\"input-field\">\n    <input id=\"input_text\" type=\"text\" data-length=\"10\">\n    <label for=\"input_text\">number</label>\n    </div>\n    <a class=\"waves-effect waves-light btn grey\" onclick=\"runTest(false);\">test</a>\n    <a class=\"waves-effect waves-light btn grey\" onclick=\"runTest(true);\">periodic</a>\n    ";
}
function runTest(again) {
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
        o.innerHTML = "output";
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
        var t = new Date();
        $.ajax({
            method: "POST",
            url: target,
        }).done(function (msg) {
            var f = new Date();
            var e = f - t;
            out.innerHTML += "(" + (i + 1) + "/" + max + ") [" + target + "] [" + e + "ms] " + msg;
        }).fail(function () {
            var f = new Date();
            var e = f - t;
            out.innerHTML += "FAILED (" + (i + 1) + "/" + max + ") [" + target + "] [" + e + "ms]";
        });
    };
    var times = document.getElementById('input_text').value;
    var max = 500;
    try {
        max = parseInt(times);
    }
    catch (_a) {
        console.log("could not parse");
    }
    var opts = ["c0", "c1", "c2", "c3", "c4", "n1", "n2"];
    for (var i = 0; i < max; i++) {
        setTimeout(once, i * 10, opts[Math.floor(Math.random() * opts.length)], i, max);
    }
    if (again) {
        console.log("running again in 15 seconds");
        setTimeout(runTest, 15000, true);
    }
}
