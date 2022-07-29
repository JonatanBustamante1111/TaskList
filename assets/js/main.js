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
}

setDate();


