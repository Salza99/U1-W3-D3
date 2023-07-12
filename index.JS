const lineThrough = () => {
  const listaAggiunte = document.querySelectorAll("li");
  listaAggiunte.forEach((li) => li.classList.toggle("completeTask"));
};
const removeTask = () => {};
const inserisciNuovoTask = (onSubmit) => {
  onSubmit.preventDefault();
  const form = onSubmit.target;
  console.log(form);
  const inputElement = form.elements;
  //console.log(inputElement);
  let taskObjects = {};
  for (let i = 0; i < inputElement.length - 1; i++) {
    const valoreInput = inputElement[i].value;
    const idInput = inputElement[i].id;
    taskObjects[idInput] = valoreInput;
  }

  console.log(taskObjects);
  const posListaCoseDaFare = document.querySelector("ol");
  posListaCoseDaFare.innerHTML += `<li>${taskObjects.taskInput}</li><button>rimuovi</button>`;
  const listaAggiunte = document.querySelectorAll("li");
  listaAggiunte.forEach((li) => li.addEventListener("click", lineThrough));
  const listaBottoni = document.querySelectorAll("div ol button");
  listaBottoni.forEach((button) => button.onclick(removeTask));
};
