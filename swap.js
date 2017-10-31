

var input = window.prompt('Chose an id')
var input2 = window.prompt('choose another id')
 
var tag = document.getElementById(input)
var tag2 = document.getElementById(input2)

var temp = tag.innerText
tag.innerHTML = tag2.innerHTML
tag2.innerHTML = temp

// function swapList (){
//     let firstId = prompt('Choose first id')
//     let secondId = prompt('Choose second id')
    
//     let firstElement = document.getElementById(firstId)
//     let firstElement = document.getElementById(firstId)
    
//     let temp = firstElement.innerText
//     firstElement.innerText = secondElement.innerText;
//     secondElement.innerText = temp
// }