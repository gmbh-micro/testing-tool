console.log("start")

$(document).ready(function(){
    // $('.collapsible').collapsible();
    setDashboard();
    // retrieveData();
    buildNav();
});

let container = document.getElementById("container");
// let content = document.getElementById("main-content");  
let nav = document.getElementById("nav-bar")

// @ts-ignore
let parsedServices;
let parsedRemotes;


function getAddress(){

}

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

content.innerHTML =
`<h3>Testing Tool</h3>
`;

}
