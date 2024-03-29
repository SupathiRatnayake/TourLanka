// This javascript program validates the bookPackage form, gets data and informs user.

// This is the blueprint for all the inputs
function inputObj(id, format) {
    this.id = id;       // has an id
    this.format = format;   // has a type
    this.valid = false;
    this.value ="";
    this.setVal = function() {
        this.value = document.getElementById(id).value;
        this.validate();
    }

    this.validate = function(){
        if (this.value.match(this.format)) {
            this.valid = true;
            document.getElementById(this.id).style.borderColor = "green";
            //alert('Okay');
        }
        else {
            document.getElementById(this.id).style.borderColor = "red";
            //alert('not ok');
        }
    }


}

// *    *   *    All the input objects  *   *   *

var fName = new inputObj('fName', /^[A-Za-z ]+$/); // first name - data type: letters only

var lName = new inputObj('lName', /^[A-Za-z ]+$/); // last name - data type: letters only

// Telephone number data type: '+' symbol '-' symbol after country code, numbers and space
var telNo = new inputObj('telNo', /^\+?([0-9]{2,3})\)?[-]([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

// email - standard email format
var email = new inputObj('email', /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

var nat = new inputObj('nat', /^[A-Za-z ]+$/); // nationality data type: letters only

// Departure date
var depDate = new inputObj('depDate', /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/);

// Return date
var retDate = new inputObj('retDate', /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/);

// package input type: select
var package = {

    id : 'package',

    value: "",

    valid: false,

    setVal : function () {
        this.value = document.getElementById(this.id).value;
        this.validate();
    },

    validate : function () {
        if (this.value != "") {
            this.valid = true;
        }else {
            this.valid = false;
            alert("Sum ting wong");
        }
    }
}


var accomodation ={
    //type: 'radio'
    radList: [],
    valid: false,  // if any radio button of group is settled, this will become true
    value: '',
    getRadList: function() {
        this.radList = document.getElementsByName('accomodation');
    },
    getInput: function() {
        for (var i = 0; i < this.radList.length; i++) {
            if(this.radList[i].checked){
                this.valid = true;
                this.value = this.radList[i].value;
                break;
            }

        }

        cost.setHotelCost(parseInt(accomodationCost[this.value]));
    }
}

// number of adults - data type: numbers
var adults = new inputObj('adults', /^([1-9]|[12][0-5])$/);

//number of children - data type: numbers
var children = new inputObj('children', /^([0-9]|[12][0-5])$/);

var terms = {
    //type: 'checkbox'
    id: 'terms',
    isChecked: function(){
        return document.getElementById(this.id).checked;
    }
}

// *    *   *   End of input object list *   *   *

function dateValidation(input, id){
    var d,m,y;
    var date = input.split('/');
    d = parseInt(date[0]);
    m = parseInt(date[1]);
    y = parseInt(date[2]);

    var lastDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (m > 0 && m <=12) {
        if (d <= lastDate[m-1]){
            document.getElementById(id).style.borderColor = "green";
            return true;
        }
        else if (m == 2 && y % 4 == 0 && d == 29) {
            document.getElementById(id).style.borderColor = "green";
            return true;

        }
        else {
            document.getElementById(id).style.borderColor = "red";
            alert("Date is invalid!");
            return false;
        }
    }
    else {
        return false;
        document.getElementById(this.id).style.borderColor = "red";
        alert("Date is invalid!");
    }
}

var perAdult = 0.20;
var perChild = 0.10;

var accomodationCost = {'5 Star Hotels': 400, '4 Star Hotels': 300, '3 Star Hotels': 250, 'Villas and Bungalows': 300};
var packagePrice = {
    'package 1': 200,
    'package 2': 350,
    'package 3': 250,
    'package 4': 450,
    'package 5': 400,
    'package 6': 350,
};

var cost = {

    bCost: 0,
    aCost: 0,
    chCost: 0,
    hotelCost: 0,

    setBasicCost: function (cost) {
        this.bCost = cost;
        this.displayTotal();

    },

    setAdultCost: function (cost) {
        this.aCost = cost;
        this.displayTotal();

    },

    setChildCost: function (cost) {
        this.chCost = cost;
        this.displayTotal();

    },
    setHotelCost: function (cost) {
        this.hotelCost = cost;
        this.displayTotal();

    },

    displayTotal: function () {
        var total = this.bCost + this.aCost + this.chCost + this.hotelCost;
        document.getElementById('total').innerHTML = total;
    }

}

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// set the attribute 'list' to data list 'countryList'
document.getElementById('nat').setAttribute('list','countryList');
var list = ['Sri Lanka', 'Japan', 'Australia', 'China', 'Germany', 'Russia']; // a small sample
/*
    * For each country nae in country list,
    we create an option.
    Since we don't use any framework to work with database
    we are giving only few options to combo box.
*/
for (var i = 0; i < list.length; i++) {
    var item = document.createElement('OPTION');
    item.setAttribute('value',list[i]);
    document.getElementById('countryList').appendChild(item);
}

// Adding packages to SELECT packages

var packages = ['package 1', 'package 2', 'package 3', 'package 4', 'package 5', 'package 6'];
var item = document.createElement('OPTION');
item.setAttribute('value',"");
item.innerHTML = "Please Select";
document.getElementById('package').appendChild(item);
for (var i = 0; i < packages.length; i++) {
    item = document.createElement('OPTION');
    item.setAttribute('value',packages[i]);
    item.innerHTML = packages[i];
    document.getElementById('package').appendChild(item);
}


//************ Event Listeners **************************

//First Name
document.getElementById('fName').onchange = function() {
fName.setVal();
}
//Last Name
document.getElementById('lName').onchange = function() {
lName.setVal();
}
// Telephone Number
document.getElementById('telNo').onchange = function() {
telNo.setVal();
}
// Email Address
document.getElementById('email').onchange = function() {
email.setVal();
}
// Country
document.getElementById('nat').onchange = function() {
nat.setVal();
}
// Departure
document.getElementById('depDate').onchange = function() {
depDate.setVal();
if (depDate.valid) {
    depDate.valid = dateValidation(depDate.value, 'depDate');
}

}
// Return
document.getElementById('retDate').onchange = function() {
retDate.setVal();
if (retDate.valid) {
    retDate.valid = dateValidation(retDate.value, 'retDate');
}

}
// Package
document.getElementById('package').onchange = function() {
    package.setVal();
    if (package.valid) {
        cost.setBasicCost(packagePrice[package.value]);
    }
}

// Accomodation
accomodation.getRadList();
for (var i = 0; i < accomodation.radList.length; i++) {
accomodation.radList[i].onclick = function() {
    accomodation.getInput();
    }
}

// adults
document.getElementById('adults').onchange = function() {
adults.setVal();
    if (adults.valid) {
        var adultCost = parseInt(adults.value) * perAdult * cost.bCost;
        cost.setAdultCost(adultCost);
    }
}

// Children
document.getElementById('children').onchange = function() {
children.setVal();
    if (children.valid) {
        var childCost = parseInt(children.value) * perChild * cost.bCost;
        cost.setChildCost(childCost);
    }
}

//************* END Event Listeners ***********************

// Form submission process

var inputList = [fName, lName,telNo, email, nat, depDate, retDate, package, accomodation,adults, children];

function Submission() {
    var i;
    alert("function submission works!");
    for (i = 0; i < inputList.length; i++) {
        if (inputList[i].valid) {
            continue;
        }
        else {
            document.getElementById(inputList[i].id).focus();
            break;
        }
    }
    if (i == inputList.length) {
        if (terms.isChecked()) {
            var message = 'Hi '+ fName.value
            +'\n Your departure date is ' + depDate.value
            +'\nYour return day is ' + retDate.value
            + '\nYou\'ve chosen ' + package.value
            + '\nYour accomodation will be ' + accomodation.value
            + '\nBooking will be done for ' + adults.value + ' adults and ' + children.value + ' children.';
            confirm(message);
        }
        else {
            alert("Terms and conditions not checked!")
        }

    }
}
