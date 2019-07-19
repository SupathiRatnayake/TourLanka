var title = document.createElement('h1');
title.innerHTML = "Tour Lk";
document.getElementById('site-name').appendChild(title);

var index = {name: 'Home', id:'index', file: 'index.html'};
var tpack = {name: 'Tour Packages', id:'tours', file: 'tourPackages.html'};
var quiz = {name: 'Quiz', id:'quiz', file: 'quiz.html'};
var gallery = {name: 'Gallery', id:'gal', file: 'gallery.html'};
var about = {name: 'About', id:'about', file: 'about.html'};

navLinks = [index, tpack, quiz, gallery, about];

var ul = document.createElement('ul');
//ul.setAttribute('id', 'main-navigation');
for (var i = 0; i < navLinks.length; i++) {
    var li = document.createElement('li');
    li.setAttribute('id', navLinks[i].id);
    var a = document.createElement('a');
    a.setAttribute('href', navLinks[i].file);
    li.appendChild(a);
    //li.innerHTML = "<a href="+navLinks[i].file+">"+navLinks[i].name+"</a>";
    ul.appendChild(li);
};
document.getElementById('menu').appendChild(ul);
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
