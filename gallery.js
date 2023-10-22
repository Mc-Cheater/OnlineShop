

const stored=sessionStorage.getItem("stored");
if(stored==null){
    window.location="./index.html";
}

const logoG= JSON.parse(sessionStorage.getItem("logo"));
const navbarG=JSON.parse(sessionStorage.getItem("navbar"));
const searchAreaG=JSON.parse(sessionStorage.getItem("searchArea"));
/*<div class="banner">
        <div class="logo" id="logo">

        </div>
        <nav class="navbar" id="navbar"></div>
        <div class="searchArea" id="searchArea"></div>
    </div>*/

const banner=document.createElement("div");
banner.classList.add("banner");
banner.appendChild(logoG);
banner.appendChild(navbarG);
banner.appendChild(searchAreaG);
const place=document.getElementById("firstplaceHolder");

place.insertAdjacentElement("beforebegin",banner);
