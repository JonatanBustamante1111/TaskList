// info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// task container
const taskContainer = document.getElementById('taskContainer');

const setDate = () => {
    // appi de js para obtener fecha actual
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es',{day: 'numeric'});
    dateText.textContent = date.toLocaleString('es',{weekday: 'long'});
    dateMonth.textContent = date.toLocaleString('es',{month: 'short'});
    dateYear.textContent = date.toLocaleString('es',{year: 'numeric'});
};
// cuando el usuario agregue una nueva tarea llamamos a event
const addNewTask = event => {
    // evitamos que el form nos lleve a otra pagina
    event.preventDefault();
    // del evento tomamos el valor de taskText
    const {value} = event.target.taskText;
    if(!value) return;
    // creamos un elemento de tipo div
    const task = document.createElement('div');
    // agregamos dos clases
    task.classList.add('task','roundBorder');
    // cuando hagamos click cambiamos el estado
    task.addEventListener('click', changeTaskState);
    // dentro del elemento ponemos el text que ingreso el usario
    task.textContent = value;
    // agregamos al principio de la lista
    taskContainer.prepend(task);
    // reseteamos el form para que este vacio
    event.target.reset();
}
// cuando se hace click en la tarea recibimos un evento
const changeTaskState = event =>{
    // accedemos a la lista de clases del evento y si tiene done
    // lo quitamos, si no lo agregamos
    event.target.classList.toggle('done');
}
const order = () =>{
    const done = [];
    const toDo = [];
    taskContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) :toDo.push(el);
    })
    // devuelve un array donde las tareas por hacer estan primeras
    // y las que se hicieron estan al final
    return [...toDo,...done];
}
const renderOrderTasks = () =>{
    // llamamos a order que nos devuelve el array y lo iteramos
    // lo vamos a agregar a task container 1 por 1
    order().forEach(el =>taskContainer.appendChild(el))
}
setDate();


