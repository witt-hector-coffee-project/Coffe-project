"use strict"

// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     // html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }

//changed function to use divs instead of tables

function renderCoffee(coffee){
    let html = '<div class=coffee">';
    //commenting out to hide display id
    // html += '<div>' + coffee.id + '</div>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (roastSelection.value === "All") {
            filteredCoffees.push(coffee);
        }
    });
    //added revers to get the
    let x = document.getElementById("coffees");
    x.style.display = "block";
    tbody.innerHTML = renderCoffees(filteredCoffees.reverse());
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#brew-submit');
var roastSelection = document.querySelector('#brew-type');

// add .reverse to coffees on line 55 to fix array order

//now the coffees won't load on page start until you select them
// tbody.innerHTML = renderCoffees(coffees.reverse());

submitButton.addEventListener('click', updateCoffees);


//testing functions
// function NameHere (){
//     let search = document.getElementById("name-coffee").value
//
//     for(let i = 0; i < coffees.length; i++ ){
//         if (coffees[i] === search){
//             return coffees
//         }else{
//
//         }
//
//     }
// }
// Adds the the search ability by coffee type to the page
function CoffeeInput (){
    let input = document.getElementById("name-coffee").value
    //the .toUpperCase() makes it so the input can be case-insensitive
    input=input.toUpperCase();
    // returns the search options in an array matching the input
    let filteredCoffees = [];
    coffees.forEach(function (coffee){
        if (coffee.name.toUpperCase().includes(input)){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
let searchBar =document.querySelector('#name-coffee');
searchBar.addEventListener('keyup', CoffeeInput);
//CODE TO STORE NEW COFFEE DATA
let coffeeAdd = document.querySelector('#name-coffee2');
let roastAdd = document.querySelector('#brew-type2');
let userSubmit = document.querySelector('#brew-submit2');

function addToCoffees(e) {
    e.preventDefault();
    let newCoffee = [];
    newCoffee.id = coffees.length+1;
    newCoffee.name = coffeeAdd.value;
    newCoffee.roast = roastAdd.value;
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees)
}

userSubmit.addEventListener('click', addToCoffees);

//FUNCTION FOR NAV POSITION TOP ON SCROLL
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-bar").style.top = "0";
    } else {
        document.getElementById("nav-bar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}