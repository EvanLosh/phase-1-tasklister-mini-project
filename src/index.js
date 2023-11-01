document.addEventListener("DOMContentLoaded", () => {
  // Log the form input
  const taskDescription = document.getElementById("create-task-form");
  taskDescription.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.description.value); // Why did have have to remove hyphens from the name of the form input?

    const li = document.getElementById('tasks');
    const task = document.createElement("li");
    task.textContent = e.target.description.value;
    li.append(task);
  })

  

  // Add a list element upon submit event

});
