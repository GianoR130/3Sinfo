function mostra1(){
    
    let card = document.getElementById("cardNascosta1");
    let bottone = document.getElementById("bottone1");
    if(card.classList.contains("d-none")){
        card.classList.remove("d-none");
        bottone.innerHTML = "Nascondi";
    }else{
        card.classList.add("d-none");
        bottone.innerHTML = "Mostra";
    }
}

function mostra2(){
    
    let card = document.getElementById("cardNascosta2");
    let bottone = document.getElementById("bottone2");
    if(card.classList.contains("d-none")){
        card.classList.remove("d-none");
        bottone.innerHTML = "Nascondi";
    }else{
        card.classList.add("d-none");
        bottone.innerHTML = "Mostra";
    }
}

function mostra3(){
    
    let card = document.getElementById("cardNascosta3");
    let bottone = document.getElementById("bottone3");
    if(card.classList.contains("d-none")){
        card.classList.remove("d-none");
        bottone.innerHTML = "Nascondi";
    }else{
        card.classList.add("d-none");
        bottone.innerHTML = "Mostra";
    }
}
