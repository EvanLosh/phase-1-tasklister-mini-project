document.addEventListener("DOMContentLoaded", () => {
  // Log the form input
  const taskDescription = document.getElementById("create-task-form");
  taskDescription.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.description.value); // Why did have have to remove hyphens from the name of the form input?

    //Focus on where we want to our new elements
    const li = document.getElementById('tasks');


    //Creating both a list and button for our new submissions 
    const button = document.createElement('button')
    const task = document.createElement("li");

    //Taking our form submissions and saving it to our task li element 
    task.textContent = e.target.description.value;

    //Giving our button "delete" text so it looks like a delete button(s)
    button.textContent = 'delete';

    //Assigning a class of "deleteButton" to the button(s)
    button.classList.add("deleteButton")

    //Appending both the task submitted and button to parent li with Id 'tasks'
    li.append(task);
    li.append(button)

    //reset the form after we submit a response 
    taskDescription.reset()

    //Our button eventListener that removes both the task and button 
    button.addEventListener('click', (e) => {
      task.remove()
      button.remove()
    })


  })
});




