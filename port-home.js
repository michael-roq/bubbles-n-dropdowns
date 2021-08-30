let entirePage = document.querySelector('.entire-page')
let ulDropDown = document.querySelectorAll(".ul-dd");

let op1 = document.querySelector('.op1')
let op2 = document.querySelector('.op2')
let op3 = document.querySelector('.op3')
let op4 = document.querySelector('.op4')
let op5 = document.querySelector('.op5')

let bubbleDiv = document.querySelectorAll('.bubble-div');
let bubbleRow = document.querySelector('.bubble-row');

let bDiv1 = document.querySelector('.b-div2');
let bDiv2 = document.querySelector('.b-div1');
let bDiv3 = document.querySelector('.b-div3');
let bDiv4 = document.querySelector('.b-div4');


let bubbleRowStyle = window.getComputedStyle(bubbleRow, null)
let bubbleRowHeight = bubbleRowStyle.getPropertyValue("height");
let desiredBubbleDivHeight = `${parseInt(bubbleRowHeight) * .8}px`;


/* --- The following code is to make the border of the bubbles get brighter when you hover them --- */

for(let i = 0; i < ulDropDown.length; i++) {

    bubbleDiv[i].addEventListener("mouseover", function(event){
        
        bubbleDiv[i].style.borderColor = "#eee";
        bubbleDiv[i].style.backgroundColor = "#4f5c6e88";
        
    });
    bubbleDiv[i].addEventListener("mouseout", function(event){
        
        bubbleDiv[i].style.borderColor = "#ffffff90";
        bubbleDiv[i].style.backgroundColor = "#1c2b4288";
    
    });
    bubbleDiv[i].style.transition = "border-color .4s, background-color .4s"
};

/* ------ The following code is to dim the background items when the ul items are selected ------ */

for(let i = 0; i < ulDropDown.length; i++) {

    ulDropDown[i].addEventListener("mouseover", function(event){
        entirePage.style.backgroundColor = "#1c2b4288"

        for(let j = 0; j < bubbleDiv.length; j++) {

            bubbleDiv[j].style.borderColor = "#eeeeee40"

            bubbleDiv[i].style.transition = "background-color .4s, border-color .4s";
        }

    });

    ulDropDown[i].addEventListener("mouseout", function(event){

        entirePage.style.backgroundColor = "#ffffff00";


        for(let j = 0; j < bubbleDiv.length; j++) {
            
            bubbleDiv[j].style.borderColor = "#ffffff90";

            bubbleDiv[j].style.transition = "background-color .4s, border-color .4s";
        };

    });

    bubbleDiv[i].style.transition = "background-color .4s, border-color .4s";
    entirePage.style.transition = "background-color .4s"
};


/* --------- The code below deals with resizing of the bubbleDiv bubbles ---------- */

for(let i = 0; i < bubbleDiv.length; i++) {

    bubbleDiv[i].style.height = desiredBubbleDivHeight;
    bubbleDiv[i].style.width = desiredBubbleDivHeight;

    /* ---- mouseover codeing ------ */
    bubbleDiv[i].addEventListener('mouseover', function(event){
        console.log(`The expanded pixel height of the bubble is ${parseInt(desiredBubbleDivHeight) * 1.25}px`);

        //the block below is just for console.logging
        console.log(`The bubble height is ${parseInt(desiredBubbleDivHeight) * 1.25 / parseInt(window.innerHeight)} percent of the window's height`);
        console.log(`The bubble height is ${parseInt(desiredBubbleDivHeight) * 1.25 / parseInt(window.innerWidth)} percent of the window's width`);

        //the block below is for changing the bubble width/height on mouseover events.
        bubbleDiv[i].style.width = `${parseInt(desiredBubbleDivHeight) * 1.25}px`;
        bubbleDiv[i].style.height = `${parseInt(desiredBubbleDivHeight) * 1.25}px`;
        
        bubbleDiv.forEach(el => {
            if(el !== bubbleDiv[i]) {

            el.style.width = `${parseInt(desiredBubbleDivHeight) * .8}px`;
            el.style.height = `${parseInt(desiredBubbleDivHeight) * .8}px`;
            };


            el.style.transition = "width .25s, height .25s, background-color .25s, border .25s";


        });

        /*bubbleDiv[i].style.transition = "width .10s, height .10s"; margin-left .25s ease in margin-right .25s ease-in, margin .25s ease-in";*/


    });
    /* ----- mouseout code ----- */

    bubbleDiv[i].addEventListener('mouseout', function(event){
        bubbleDiv[i].style.width = `${parseInt(desiredBubbleDivHeight)}px`;
        bubbleDiv[i].style.height = `${parseInt(desiredBubbleDivHeight)}px`;

        bubbleDiv.forEach(el => {
            if(el !== bubbleDiv[i]) {

            el.style.width = desiredBubbleDivHeight;
            el.style.height = desiredBubbleDivHeight;
            };

            el.style.transition = "width .9s, height .9s, background-color .9s, border .9s";
        });

    });

};

console.log(parseInt(bubbleDiv[0].style.width));


/* -------------------------------------------- */

/* -- The code below is to make the divs grow and shrink with the screen size. */



/* ----- The code below is to make the font size grow or shink based on the element size the font is inside----- */ 


for(let i = 0; i < ulDropDown.length; i++) {

    let ulDropDownStyle= window.getComputedStyle(ulDropDown[i], null);
    let ulWidth = ulDropDownStyle.getPropertyValue("width");

    ulDropDown[i].style.fontSize = `${ulWidth * .1}`;
    /*console.log(`The ulDropDowns width is ${parseInt(ulDropDown[i].style.getPropertyValue("innerWidth"))}`);*/

    /*ulDropDown[i].style.fontSize = `${parseInt(ulDropDown[i].innerWidth)}px`*/

};















/* --- The content below is for reactive if statments --- */

//If any of the uls or any of the bubble-divs are hovered, all the others dim in color.  
//Maybe even a border around all the elements could put put with an opacity of 1 and it gets semi transparent when you hover over an element.  But It'd have to be behind them all.  Maybe just a background color of semi opaque.  

//If a dropdown is used, the rest will dim aroun it.  Maybe only to dim the bubbles if the drop down is used.  


/* -- The code below is to make each ul change to the look of a ul or li any time that is is clicked -- */

/*

for(let i = 1; i < ulDropDown.length - 1; i++) {

    ulDropDown[i].addEventListener('mousedown', function(event) {

        ulDropDown[i].style.color = "#ffffff"

    });

    ulDropDown[i].addEventListener('mouseup', function(event) {

        ulDropDown[i].style.color = "#ffffff"

    });
};

*/



console.log("***Break***");