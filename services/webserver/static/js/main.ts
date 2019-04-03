console.log("start")

// @ts-ignore
$(document).ready(function(){
    setDashboard();
    // buildNav();
});

var testSet = false

let container = document.getElementById("container");
// let content = document.getElementById("main-content");  
let nav = document.getElementById("nav-bar");



function buildNav(){
    if(nav == null){
        console.log("could not get nav bar");
        return
    }
    nav.className += " nav-padding";

    nav.innerHTML = 
                    `<span class="services-header">navigation</span>
                    <br>
                    <div class="collection">
                    <a href="#!" class="collection-item active white"></a>
                    <a href="#!" class="collection-item"></a>
                    <a href="#!" class="collection-item"></a>
                    <a href="#!" class="collection-item"></a>
                    <a href="#!" class="collection-item"></a>
                    </div>
                    `;
}

function setDashboard(): void{
    
    let content = document.getElementById("main-content");
    if (content == null) {
        console.log("error=could not get main-content div")
        return;
    }  

    content.innerHTML = `
    <h3>Testing Tool</h3>
    
    <div class="input-field">
    <input id="input_text" type="text" data-length="10">
    <label for="input_text">number</label>
    </div>
    <a class="waves-effect waves-light btn grey" onclick="runTest(false);">test</a>
    <a class="waves-effect waves-light btn grey" onclick="runTest(true);">periodic</a>
    `;
}

function runTest(again){
    console.log("running test");


    let content = document.getElementById("main-content");
    if (content == null) {
        console.log("error=could not get main-content div")
        return;
    } 

    if( !testSet){
        content.appendChild(document.createElement('br'));
        content.appendChild(document.createElement('br'));
        let o = document.createElement('span');
        o.innerHTML = "output";
        content.appendChild(o);
        content.appendChild(document.createElement('br'));
    
        let ta = document.createElement("textarea");
        ta.style.height = "unset";
        ta.id = "output";
        ta.setAttribute('rows','20')
        ta.setAttribute('cols','84')
        content.appendChild(ta);
        content.appendChild(document.createElement('br'));
        content.appendChild(document.createElement('br'));

        testSet = true;
    } else {
        let out = document.getElementById("output");
        out.innerHTML = "";
    }

    var once = function(target: string, i: number,max: number){
        let out = document.getElementById("output");
        let t = new Date();
        $.ajax({
            method: "POST",
            url: target,
        }).done(function( msg ) {
            let f = new Date()
            let e = f - t;
            out.innerHTML += "(" + (i+1) + "/" + max +") ["+target+"] ["+e+"ms] "+ msg;
        }).fail(function(){
            let f = new Date()
            let e = f - t;
            out.innerHTML += "FAILED (" + (i+1) + "/" + max +") ["+target+"] ["+e+"ms]";
        });
    }

    let times = document.getElementById('input_text').value;
    let max = 500;
    try {
        max = parseInt(times);
    } catch {
        console.log("could not parse");
    }

    let opts = ["c0","c1","c2","c3","c4"];
    for(let i = 0; i < max; i++){
        setTimeout(once, i * 10, opts[Math.floor(Math.random() * opts.length)],i,max);
    }

    if(again){
        console.log("running again in 15 seconds");
        setTimeout(runTest,15000,true)
    }
}