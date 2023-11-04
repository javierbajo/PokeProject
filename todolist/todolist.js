

const ul$$ = document.querySelector('#listaTareas');
const empty$$ = document.querySelector('.empty');


const noHayTareas = () => empty$$.innerHTML = "<p>No hay tareas</p>";

const borrarTarea = (e) => {
    const item = e.target.parentElement;
    ul$$.removeChild(item);

    const arrayTareas$$ = document.querySelectorAll('li');
    if(arrayTareas$$.length === 0) noHayTareas();
}


const nuevaTarea = (tarea) => {
    if(tarea != ""){
    const li$$ = document.createElement('li');
    p$$ = document.createElement('p');
    p$$.textContent = tarea;
    deleteButton$$ = document.createElement('button');
    deleteButton$$.textContent = "X";
    deleteButton$$.className = "btn-delete";
    li$$.appendChild(p$$);
    li$$.appendChild(deleteButton$$);
    ul$$.appendChild(li$$);
    
    empty$$.innerHTML = ""
    deleteButton$$.addEventListener('click', (e) => borrarTarea(e))

    }else console.log("Entrada vacía");
}


const takeInput = () => {
    const input$$ = document.querySelector('input');
    const addButton$$ = document.querySelector('.btn-add');
    addButton$$.addEventListener('click',  (evento) => {
        evento.preventDefault();
        nuevaTarea(input$$.value);
        input$$.value = "";
    });
}

const init = () => {
    noHayTareas();
    takeInput();
}

init();