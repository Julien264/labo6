const buttons = document.querySelectorAll('.button');

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    
    button.addEventListener('click', openModal);
}

function openModal(){
    console.log("allo");
}