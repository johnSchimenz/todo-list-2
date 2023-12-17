// Projects array
const projectsArray = [];

// Project factory
const ProjectFactory = (name) => {
    name = name;
    toDos = [];
    return (name, toDos);
}

// ToDo factory
const ToDoFactory = (title, description, dueDate, priority, notes, checklist) => {
    title = title;
    description = description;
    dueDate = dueDate;
    priority = priority;
    notes = notes;
    checklist = checklist;
    return {title, description, dueDate, priority, notes, checklist};
}

// DOM logic

// On click, input box displays on left side of webpage to add details for a new project
const createNewProject = document.querySelector('#create-new-project');
createNewProject.addEventListener('click', () => {
    // Select the bottom left container
    const selectBottomLeftContainer = document.querySelector('#bottom-left');

    // Create input box to write the project's name
    const projectInput = document.createElement('input');
    projectInput.setAttribute('type', 'text');
    projectInput.setAttribute('placeholder', 'Anonymous Project');
    selectBottomLeftContainer.appendChild(projectInput);

    // Create Submit button so can confirm the project's name
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submit')
    submitButton.textContent = 'Submit';
    selectBottomLeftContainer.appendChild(submitButton);

    // Once clicked, specifies what the Submit button does
    const submitAction = document.querySelector('#submit');
    submitAction.addEventListener('click', () => {
        
        // Submit button deleted from the DOM
        selectBottomLeftContainer.removeChild(submitAction);

        // Input box is deleted
        selectBottomLeftContainer.removeChild(projectInput);

        

    });

});
