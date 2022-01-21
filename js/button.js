// function updateMemoryButton(button){
// const buttonInput = document.getElementById('extra');
// const buttonNumber = buttonInput.Value;
// const buttonNumber = parseInt(buttonNumber);
// }
// document.getElementById('unified-memory').addEventListener('click',function(){
//     updateMemoryButton('button', 180);
// });


document.getElementById('unified-memory').addEventListener('click', function(){
    const buttonInput = document.getElementById('button-number');
    const buttonNumber = buttonInput.innerText;
    buttonInput.innerText = parseInt(buttonNumber) + 1;
})

// document.getElementById('unified-memory').addEventListener('click', function(){
    
// })