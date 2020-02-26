const factsArray = ["70% of your cat's life is spent asleep.", "The cat has 500 skeletal muscles (humans have 650)."]


// ITERACIÓN 1: Añade las dos curiosidades de la array para que se despliegen en la lista del HTML.

const list = document.getElementById("cats-facts-list");

function loadFacts(){
    
    list.innerHTML=""
    
    factsArray.forEach(fact => {
        var li = document.createElement("li")
        li.innerHTML = fact;
        list.appendChild(li)
    })
}
loadFacts()

// ITERACIÓN 2: Cada vez que el usuario pulse el botón de Remove a cat fact, elimina el último elemento de la lista. 

function removeFact(){
    let numberToRemove = input.value

    if (!input.value) { numberToRemove = 1 }

    for (i=0; i<numberToRemove; i++){
        factsArray.pop()
    }
    
    loadFacts()
}

const removeButton = document.getElementById("remove-button");
removeButton.addEventListener("click", removeFact)

// ITERACIÓN 3: Cada vez que el usuario pulse el botón de añadir una curiosidad, llama a la API y añade una curiosidad Random. 
// ITERACIÓN 3.BONUS: Asegurate de que nunca se despliegen curiosidades repetidas.

async function addFacts (){
    if(!input.value){
        let url = 'https://catfact.ninja/fact/';
        let response = await fetch(url);
        let json= await response.json();
        let fact= json.fact

        factsArray.push(fact)
    }

    if(input.value){
        let url = `https://catfact.ninja/facts/?limit=${input.value}`;
        let response = await fetch(url);
        let json = await response.json();
        let facts = json.data

        facts.forEach(fact=>{
            factsArray.push(fact.fact)
        })
    }

    loadFacts()
}

const addButton = document.getElementById("add-button")
addButton.addEventListener("click", addFacts)


// ITERACIÓN 4: Añade un elemento input al HTML de tipo number. Cuando el usuario cambie el número de este input cambia el texto de los botones para que aparezca "Add / Remove x cat facts"
// ITERACIÓN 4.1: modifica las funciónes anteriores para que al hacer click en el botón se añadan o quiten este número de curiosidades. 

function changeButtonText(){
    let num = input.value

    addButton.innerHTML = `Add ${num} cat facts`
    removeButton.innerHTML = `Remove ${num} cat facts`
}

const input = document.getElementById("number-input")
//input.addEventListener("change", changeButtonText)
input.onchange = changeButtonText