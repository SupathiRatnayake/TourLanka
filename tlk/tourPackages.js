// Hard coded database of TOur Packages

// Package constructor

function tourObj(packName,  bCost, numOfDays, category, image) {
    this.packName = packName; // specefies name of tour package
    this.bCost = bCost;
    this.numOfDays = numOfDays;
    this.category = category;
    this.image = image;
}

// Package objects

var package1 = new tourObj('Glorious Mountains', 500, 5, 'Adventure', 'package1.jpg');
var package2 = new tourObj('Heritage in Polonnaruwa', 800, 5, 'historical', 'package2.jpg');
var package3 = new tourObj('Elephant watching in Yala', 800, 5, 'safari', 'package3.jpg');
var package4 = new tourObj('Pilgrimage to Anuradhapura', 500, 5, 'pilgrimage', 'package4.jpg');
var package5 = new tourObj('Bird Watching', 800, 5, 'safari', 'package5.jpg');
var package6 = new tourObj('Elephant watching in Udawalawe', 800, 5, 'safari', 'package6.jpg');
var package7 = new tourObj('Trip to Galle Fort', 800, 5, 'historical', 'package7.jpg');

// Add a description to each package

package1.desc = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

package2.desc = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

package3.desc = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

package4.desc = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

package5.desc = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

package6.desc = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

packageList = [package1, package2, package3, package4, package5, package6, package7];
function displayPackages(pack) {
    for (var i = 0; i < pack.length; i++) {
        var package = pack[i];
        var item = document.createElement('div');
        item.setAttribute('class', 'item');
        var title = document.createElement('h4');
        title.innerHTML = package.packName;
        var image = document.createElement('img');
        image.setAttribute('src', 'images/' + package.image);
        var dl = document.createElement('dl');

            var dt1 = document.createElement('dt');
            dt1.innerHTML = 'cost: '
            dl.appendChild(dt1);

            var dd1 = document.createElement('dd');
            dd1.innerHTML = package.bCost;
            dl.appendChild(dd1);


            var dt2 = document.createElement('dt');
            dt2.innerHTML = 'Number of Days: '
            dl.appendChild(dt2);

            var dd2 = document.createElement('dd');
            dd2.innerHTML = package.numOfDays;
            dl.appendChild(dd2);

            var dt3 = document.createElement('dt');
            dt3.innerHTML = 'Category: '
            dl.appendChild(dt3);

            var dd3 = document.createElement('dd');
            dd3.innerHTML = package.category;
            dl.appendChild(dd3);

        var inq = document.createElement('a');
        inq.setAttribute('href', 'inquiery.html');
        inq.innerHTML = 'Inquier';

        item.appendChild(title);
        item.appendChild(image);
        item.appendChild(dl);
        item.appendChild(inq);
        document.getElementById('package-container').appendChild(item);
    }
}

window.addEventListener('load', displayPackages(packageList));

var leisure = [];
var honeymoon = [];
var historical = [package2, package7];
var adventure = [package1];
var safari = [package3, package5, package6];
var pilgrimage = [];

var categories = {
    'all': packageList,
    'leisure': leisure,
    'honeymoon': honeymoon,
    'historical': historical,
    'adventure': adventure, 'safari': safari,
    'pilgrimage': pilgrimage
};

catNames = Object.keys(categories);

var select = document.getElementById("p_categories");
select.addEventListener('change', dispayCategory);

var pContainer = document.getElementById('package-container');

function dispayCategory() {
    pContainer.innerHTML = "";
    for (var i = 0; i < catNames.length; i++) {
        if (select.value == catNames[i]) {
            displayPackages(categories[catNames[i]]);
        }
    }
};
