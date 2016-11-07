/*window.addEventListener("load", init);
 
var todos = [];
 
function init()
{
    var add = document.querySelector("#add");
    add.addEventListener("click", addTodo);
}
 
function addTodo(event)
{
    //prevenimos el evento del enlace
    event.preventDefault();
    //comprobamos que tenga texto
    if(document.querySelector("#todo").value === "") return;
 
    //creamos el objeto con la información del li
    var li = 
    {
        index: todos.length + 1,
        value: document.querySelector("#todo").value
    };
    todos.push(li);
    displayTodos(li);
}
 
function displayTodos(li)
{
    //creamos el elemento li
    var node = document.createElement("li");  
    node.classList.add("col-md-12");   
    node.id = "todo"+li.index;
 
    //creamos el contenido del elementi li
    var textnode = document.createTextNode(li.value);    
    node.appendChild(textnode);   
    document.querySelector("#todoList").appendChild(node); 
    document.querySelector("#todo").value = "";
 
    //añadimos el botón
    var deleteButton = createButton(li);
    node.appendChild(deleteButton);
}
 
function createButton(li)
{
    //creamos un input
    var todo = document.createElement("input");
    //de tipo button
    todo.type = "button";
    //añadimos un margen
    todo.style.marginTop = "12px";
    //flotamos a la derecha
    todo.style.float = "right";
    //el texto del input
    todo.value = "Eliminar";
    //añadimos un margen
    todo.style.marginLeft = "15px";
    //añadimos varias clases
    todo.classList.add("removeTodo", "btn", "btn-danger");
    //añadimos el evento click para que sea eliminado
    todo.onclick = function() 
    { 
        var toDelete = document.querySelector('#todo'+li.index);
        toDelete.parentNode.removeChild(toDelete);
    };
    //devolvemos el nuevo elemento
    return todo;
}*/


function twitter(){
    var nodoTexto= document.getElementById("todo").value;
    var cajaMadre= document.getElementById("contenedortwitter");
    var caja= document.createElement("div");
    var texto= document.createTextNode(nodoTexto);
    caja.setAttribute("class","agregar");
    //agregat input
    var marcar= document.createElement("input");
    marcar.setAttribute("id" , "check");
    marcar.setAttribute("type", "checkbox");
    //agregar corazon


    //creamos un span donde meteremos un corazon y le damos un tipo
    var botonCorazon= document.createElement("span");
    botonCorazon.setAttribute("class" , "movCorazon");
    // el tipo le da la funcionalidad
    botonCorazon.setAttribute("type", "button");
    // le dimos otro atributo que al apretar, el onclick cumpla la funcion cambiar de color llamada meGusta, la cual crearemos dsp
    
    //creamos un i al que despues le meteremos un icono
    var iconoCorazon=document.createElement("i");
    iconoCorazon.setAttribute("class", "glyphicon glyphicon-heart");

    //agregar basurero

    //Creamos el span donde valos a meter in i, al cual dsp le meteremos un icono
    var spanBasura=document.createElement("span");
    //le damos el atributo boton
    spanBasura.setAttribute("id", "borrarpb");
    spanBasura.setAttribute("type" , "button");
    //atributo onclick al basurero y que llame la funcion borrar llamada borrarpb
    //spanBasura.setAttribute("onclick" , "borrarpb");
    spanBasura.addEventListener("click", function(event){
        borrarTarea(caja);
        });
    //creamos un i al que despues le meteremos el icono
    var iconoBasura= document.createElement("i");
    iconoBasura.setAttribute("class", "glyphicon glyphicon-trash");



    //subir input al div, antes del texto
    caja.appendChild(marcar);
    //2 lugar texto en el div
    caja.appendChild(texto);
    // 3 lugar meter icono corazon dentro del boton
    botonCorazon.appendChild(iconoCorazon);
    //4 meter boton al div
    caja.appendChild(botonCorazon);
    // 5 meter icono al boton
    spanBasura.appendChild(iconoBasura);
    //6 meter boton con icono basura al div
    caja.appendChild(spanBasura);
    //se une el div al html
    cajaMadre.appendChild(caja);
    //dejar al final colocar todo por prioridad, primero hacer, 2 concatenar dsp funciones
    botonCorazon.addEventListener("click", function(){
        botonCorazon.classList.toggle("rojo");
    });
    //evento para tachar tarea
    marcar.addEventListener("click", function(){
        caja.classList.toggle("tachar");
    });
}

//funcion borrar
    function borrarTarea(borrar){
        
        borrar.parentNode.removeChild(borrar);
    }


