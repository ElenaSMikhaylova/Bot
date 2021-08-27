// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot
// @author       ElenaMikhaylova
// @match        https://www.google.com/*
// ==/UserScript==


let btnK =document.getElementsByName("btnK")[0];
let keywords=["права на лодку", "права на катер", "яхтенная школа", "центр морского права"];
let links =document.links;
let keyword=keywords[getRandom(0, keywords.length)];

document.getElementsByName("q")[0].value=keyword;


if(btnK!=undefined){
    btnK.click();
}
else{

    for (let i=0; i<links.length; i++) {
        if (links[i].href.includes('sea-law.ru')){
            let link=links[i];
            link.click();
            console.log("Нашел строку" + links[i]);
            break;
        }
    }
}

function getRandom(min,max){
return Math.floor(Math.random()*(max-min)+min)
}
