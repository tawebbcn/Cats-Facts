## ITERACIÓN 1: 
La idea es crear una función que haga un loop por todos los elementos de la array. Para cada elemento de la array (para cada fact) crearemos un nuevo elemento <li> y asignamos su propiedad innerHTML a la curiosidad; Finalmente solo nos queda colocar este <li> dentro de la lista. No nos olvidemos de invocar a la función. 

```js
const list = document.getElementById("cats-facts-list"); // seleccionamos la <ul> del documento y la guardamos en la variable list. 

function loadFacts(){   //definimos la función

    factsArray.forEach(fact => {
        var li = document.createElement("li") // creo un elemento <li>
        li.innerHTML = fact; // le asigno el texto de la curiosidad al <li>
        list.appendChild(li) // añado el li a mi <ul>
    })
}

loadFacts() // Invocamos la función
```

## ITERACIÓN 2:

Primero tenemos que definir una función que al invocarla elimine el último elemento de mi array y volvemos a llamar a la función de la iteración 1 para que muestre los elementos de mi array en el HTML. 

Luego, debemos usar addEventListener para que al pulsar el botón con la id "remove-button" se llame a la función. 

```js
function removeFact(){
    factsArray.pop() // Elimino el último elemento de la array
    loadFacts() // vuelvo a cargar las curiosidades de la array en el HTML
}

const removeButton = document.getElementById("remove-button"); // almaceno el botón en una variable
removeButton.addEventListener("click", removeFact) // le añado la propiedad addEventListener con la función de quitar facts. 
```

Si hacemos esto veremos que cuando pulsamos por primera vez el botón remove-button estamos se añade la primera frase a la <ul> en vez de quitar el último elemento. 

Esto se debe a que cuando llamamos a la función loadFact cuando pulsamos el botón, no estamos eliminando los elementos antiguos que teníamos desplegados en el DOM. Para ello deberíamos modificar la función loadFacts y añadir esta línea de código:

``` js
function loadFacts(){

    list.innerHTML=""  // Con esta línea borro las curiosidades anteriores que contenía el <ul>

    factsArray.forEach(fact => {
        var li = document.createElement("li")
        li.innerHTML = fact;
        list.appendChild(li)
    })
}
```

Ahora si que debería de funcionar. 

## ITERACIÓN 3: 

La idea es traer una nueva curiosidad con fetch y almacenarla en la variable fact. Luego hacer un push de esta curiosidad a la array de curiosidades y volver a llamar a loadFacts.

```js
async function addFacts (){
    let response = await fetch(url); // Hago la llamada a la API
    let json= await response.json(); // Paso la respuesta a JSON
    let fact= json.fact // Extraigo del JSON la curiosidad que me interesa y la almaceno en la variable fact. 
    
    factsArray.push(fact) // Añado la curiosidad a mi array//
    loadFacts() // Vuelvo a invocar a la función loadFacts
}

// selecciono el botton "add-button" y le añado el addEventListener con mi función. 
const addButton = document.getElementById("add-button") 
addButton.addEventListener("click", addFacts)
```

## ITERACIÓN 5: 

```js
function changeButtonText(){
    let num = input.value

    addButton.innerHTML = `Add ${num} cat facts`
    removeButton.innerHTML = `Remove ${num} cat facts`
}

const input = document.getElementById("number-input")
input.addEventListener("change", changeButtonText)
```
