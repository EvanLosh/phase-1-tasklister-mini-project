document.addEventListener("DOMContentLoaded", () => {
  // Log the form input
  const taskDescription = document.getElementById("create-task-form");
  taskDescription.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.description.value); // Why did have have to remove hyphens from the name of the form input?


    //Controlling our elements through creation
    const li = document.getElementById('tasks');

    const button = document.createElement('button')
    const task = document.createElement("li");

    button.classList.add("deleteButton")


    task.textContent = e.target.description.value;
    button.textContent = 'delete';

    li.append(task);
    li.append(button)



    button.addEventListener('click', (e) => {
      task.remove()
      button.remove()
    })


    // const deleteButton = document.getElementsByClassName('deleteButton')

    // deleteButton[0].addEventListener('click', (e) => {
    //   console.log(e)
    // })

  })
});




