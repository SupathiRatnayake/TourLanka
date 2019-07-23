
var aTag = document.createElement('a');
aTag.setAttribute('href', 'index.html');

var img = document.createElement('img');
img.setAttribute('src', 'images/banner.png');
img.setAttribute('alt', 'Tour Lanka Logo');

aTag.appendChild(img);

document.getElementById('header').appendChild(aTag);
// --------- Header Complete -----------

// --------- Making Main Navigation Bar ---------

// ------------- Page data base -----------------
var index = {name: 'Home', id:'index', file: 'index.html', developer: 'Rakitha'};
var tpack = {name: 'Tours', id:'tours', file: 'tourPackages.html', developer: 'Supathi'};
var quiz = {name: 'Quiz', id:'quiz', file: 'quiz.html', developer: 'Adeesha'};
var gallery = {name: 'Gallery', id:'gal', file: 'gallery.html', developer: 'Kaushika'};
var blog = {name: 'Blog', id:'blog', file: 'blog.html', developer: 'Supathi'};
var about = {name: 'About', id:'about', file: 'about.html', developer: 'Rakitha'};

navLinks = [index, tpack, quiz, gallery, blog, about];

var btnMenu = document.createElement('button');
btnMenu.setAttribute('type', 'button');
btnMenu.setAttribute('onclick', 'displayMenu()');
btnMenu.innerHTML = 'menu <i class="fa fa-angle-down"></i>';

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

// ----------- footer ------------
var footer = document.getElementById('footer');

var hr = document.createElement('hr');
footer.appendChild(hr);

// ------ make data list ----------
var dl = document.createElement('dl');
dl.setAttribute('class', 'footer-data');


var dt = document.createElement('dt');
dt.innerHTML = 'Contact';
dl.appendChild(dt);

var dd = document.createElement('dd');
dd.innerHTML = '+xx-xxx xxx xxxx';
dl.appendChild(dd);

var dd = document.createElement('dd');
dd.innerHTML = '+xx-xxx xxx xxxx';
dl.appendChild(dd);

var dd = document.createElement('dd');
dd.innerHTML = '+xx-xxx xxx xxxx';
dl.appendChild(dd);

footer.appendChild(dl);

//--------- New data list For Address-----------
var dl = document.createElement('dl');
dl.setAttribute('class', 'footer-data');

var dt = document.createElement('dt');
dt.innerHTML = 'Address';
dl.appendChild(dt);

var dd = document.createElement('dd');
dd.setAttribute('class', 'address');
// ----- address --------

var p = document.createElement('p');
p.innerHTML = 'Tour Lanka';
dd.appendChild(p);

var p = document.createElement('p');
p.innerHTML = 'IIT';
dd.appendChild(p);

var p = document.createElement('p');
p.innerHTML = 'No. 57';
dd.appendChild(p);

var p = document.createElement('p');
p.innerHTML = 'Ramakrishna Road';
dd.appendChild(p);

var p = document.createElement('p');
p.innerHTML = 'Colombo 06';
dd.appendChild(p);

var p = document.createElement('p');
p.innerHTML = 'Sri Lanka';
p.setAttribute('id', 'address-locality');
dd.appendChild(p);

dl.appendChild(dd);

footer.appendChild(dl);
// ----- end address ------

//--------- New data list For Email-----------
var dl = document.createElement('dl');
dl.setAttribute('class', 'footer-data');

var dt = document.createElement('dt');
dt.innerHTML = 'Email';
dl.appendChild(dt);

var dd = document.createElement('dd');
var a = document.createElement('a');
a.setAttribute('href', 'mailto:inquiries@tourlanka.com');
a.innerHTML = 'inquiries@tourlanka.com';
dd.appendChild(a);
dl.appendChild(dd);

var dt = document.createElement('dt');
dt.innerHTML = 'Fax';
dl.appendChild(dt);

var dd = document.createElement('dd');
dd.innerHTML = 'xx-xxx xxx xxxx';
dl.appendChild(dd);

footer.appendChild(dl);

//--------- Additional Data ----------
var dataBox = document.createElement('div');
dataBox.setAttribute('id', 'databox');
dataBox.setAttribute('class', 'footer-data');

    // ------ credits --------

    var creditsDiv = document.createElement('div');
    creditsDiv.setAttribute('id', 'credits');

    var p = document.createElement('p');
    p.innerHTML = 'Copyright © 2019 Tour Lanka';
    creditsDiv.appendChild(p);

    var p = document.createElement('p');
    p.innerHTML = 'Website designed and developed by<br />SARK Web Devepolers';
    creditsDiv.appendChild(p);

    var p = document.createElement('p');
    p.innerHTML = 'Student: ';

    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('id', 'dev');
    a.innerHTML = "";

    p.appendChild(a);
    creditsDiv.appendChild(p);

    var p = document.createElement('p');
    p.innerHTML = 'Website designed and developed by<br />SARK Web Devepolers';
    creditsDiv.appendChild(p);

    dataBox.appendChild(creditsDiv);

    // -------- More Data ----------------

    var a = document.createElement('a');
    a.setAttribute('href', 'sitemap.html');
    a.setAttribute('id', 'sitemap');
    a.innerHTML = "Sitemap";

    dataBox.appendChild(a);

    // line break
    var br = document.createElement('br');
    br.innerHTML = "Terms & Conditions";

    dataBox.appendChild(br);

    var a = document.createElement('a');
    a.setAttribute('href', 'terms.html');
    a.setAttribute('id', 'terms');
    a.innerHTML = "Terms & Conditions";

    dataBox.appendChild(a);


footer.appendChild(dataBox);

document.getElementById('plus').innerHTML ='<button type="button" id="inc" class="btn"><i class="fa fa-plus"></i></button>';
document.getElementById('minus').innerHTML ='<button type="button" id="dec" class="btn"><i class="fa fa-minus"></i></button>';

document.getElementById('inc').addEventListener("click", increase);
document.getElementById('dec').addEventListener("click", decrease);

var fsize = 18;  //default font size 18
function increase(){

    if (fsize < 22) {

        var elements = document.getElementsByTagName('*');

        fsize++;

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.fontSize = fsize + "px";
        }

        return fsize;

    }else {
        alert('You cannot increase font size greater that 21!')
    }

}

function decrease(){

    if (fsize > 14) {

        var elements = document.getElementsByTagName('*');

        fsize--;

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.fontSize = fsize + "px";
        }

        return fsize;

    }else {
        alert('You cannot decrease font size smaller that 14!')
    }
}
