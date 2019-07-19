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

var package1 = new tourObj('package 1', 500, 5, 'budget', 'package1.jpg');
var package2 = new tourObj('package 2', 800, 5, 'budget', 'package2.jpg');
var package3 = new tourObj('package 3', 800, 5, 'budget', 'package3.jpg');
var package4 = new tourObj('package 4', 500, 5, 'budget', 'package4.jpg');
var package5 = new tourObj('package 5', 800, 5, 'budget', 'package5.jpg');
var package6 = new tourObj('package 6', 800, 5, 'budget', 'package6.jpg');

// Add a description to each package

package1.desc = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

package2.desc = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

package3.desc = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

package4.desc = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

package5.desc = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

package6.desc = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

packageList = [package1, package3, package4, package5, package6];
function displayPackages() {
    for (var i = 0; i < packageList.length; i++) {
        var package = packageList[i];
        var item = document.createElement('div');
        item.setAttribute('class', 'item');
        var title = document.createElement('h4');
        title.innerHTML = package.packName;
        var image = document.createElement('img');
        image.setAttribute('src', 'images/' + package.image);
        item.appendChild(title);
        item.appendChild(image);
        document.getElementById('package-container').appendChild(item);
    }
}

window.addEventListener('load', displayPackages);
