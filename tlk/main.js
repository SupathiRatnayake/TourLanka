
var aTag = document.createElement('a');
aTag.setAttribute('href', 'index.html');

var logo = document.createElement('div');
logo.setAttribute('id', 'logo');

var img = document.createElement('img');
img.setAttribute('src', 'logo_banner.png');
img.setAttribute('alt', 'Tour Lanka Logo');

logo.appendChild(img);

aTag.appendChild(logo);

var websiteName = document.createElement('div');
websiteName.setAttribute('id', 'site-name');
var h1 = document.createElement('h1');
h1.innerHTML = "Tour Lanka";

websiteName.appendChild(h1);

aTag.appendChild(websiteName);

document.getElementById('header').appendChild(aTag);
// --------- Header Complete -----------

// --------- Making Main Navigation Bar ---------
var index = {name: 'Home', id:'index', file: 'index.html'};
var tpack = {name: 'Tour Packages', id:'tours', file: 'tourPackages.html'};
var quiz = {name: 'Quiz', id:'quiz', file: 'quiz.html'};
var gallery = {name: 'Gallery', id:'gal', file: 'gallery.html'};
var about = {name: 'About', id:'about', file: 'about.html'};

navLinks = [index, tpack, quiz, gallery, about];

var btnMenu = document.createElement('button');
btnMenu.setAttribute('type', 'button');
btnMenu.setAttribute('onclick', 'displayMenu()');
btnMenu.innerHTML = 'menu';

document.getElementById('nav').appendChild(btnMenu);

var navContainer = document.createElement('div');
navContainer.setAttribute('id', 'menu');

var ul = document.createElement('ul');

//ul.setAttribute('id', 'main-navigation');
for (var i = 0; i < navLinks.length; i++) {
    var li = document.createElement('li');
    //li.setAttribute('id', navLinks[i].id);
    var a = document.createElement('a');
    a.setAttribute('href', navLinks[i].file);
    a.innerHTML = navLinks[i].name;
    li.appendChild(a);
    //li.innerHTML = "<a href="+navLinks[i].file+">"+navLinks[i].name+"</a>";
    ul.appendChild(li);
};

navContainer.appendChild(ul);

document.getElementById('nav').appendChild(navContainer);

// Drop Down Menu - Mobile devices Only
function displayMenu() {
    var menu = document.getElementById('menu');

    if (menu.style.display === "block") {
        menu.style.display = "none";
    }else {
        menu.style.display = "block";
    }
}


/*
document.getElementById('incr').innerHTML ='<button type="button" id="inc" class="btn">+</button>';
document.getElementById('decr').innerHTML ='<button type="button" id="dec" class="btn">-</button>';

document.getElementById('inc').addEventListener("click", increase);
document.getElementById('dec').addEventListener("click", decrease);

var fsize = 18;  //default font size 18
function increase(){
    fsize++;
    document.getElementById('bd').style.fontSize = fsize + "px";
    return fsize;
}

function decrease(){
    fsize--;
    document.getElementById('bd').style.fontSize = fsize + "px";
    return fsize;
}
*/
