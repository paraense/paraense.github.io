function remove() {
    let position = document.getElementById("remove").value;
    let number = document.getElementById(position); 
    number.innerHTML = " "
    number.style.backgroundColor = "#fe0d49"
    
    setTimeout(() => moveNumbersToLeft(position), 3000);
    setTimeout(() => number.style.backgroundColor = "white" , 4000);
}

function moveNumbersToLeft(currentePosition) {
    for(i = (Number(currentePosition) + 1); i <= 7; i++) {
        let current = document.getElementById(i);
        let newPosition = document.getElementById((i - 1));
        
        newPosition.innerHTML = current.innerHTML;
        current.innerHTML = " "
    }
}