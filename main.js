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

// DOM logic - New Project
// On click, input box displays on left side of webpage to add details for a new project
const createNewProject = document.querySelector('#create-new-project');
createNewProject.addEventListener('click', () => {

    // Select the bottom left container
    const selectBottomLeftContainer = document.querySelector('#bottom-left');

    // Create input box to write the project's name
    const projectInput = document.createElement('input');
    projectInput.setAttribute('type', 'text');
    projectInput.setAttribute('id', 'projectTitle');
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

        // Text from input box posted on left side of the webpage
        const projectPosted = document.createElement('div');
        projectPosted.setAttribute('id', projectInput.value);
        projectPosted.textContent = projectInput.value;
        selectBottomLeftContainer.appendChild(projectPosted);

        // Add newest Project to Projects array
        projectsArray.push(projectInput.value);
        console.log(projectsArray);

        // Input box is deleted
        selectBottomLeftContainer.removeChild(projectInput);
    });
});

// DOM logic - New ToDo Item
// On click, input box displays on right side of webpage to add details for a new project
const createNewToDoItem = document.querySelector('#create-new-todo-item');
createNewToDoItem.addEventListener('click', () => {

    // Select the bottom right container
    const selectBottomRightContainer = document.querySelector('#bottom-right');

    // Create fieldset for ToDo Item form
    const toDoItemFieldset = document.createElement('fieldset');
    toDoItemFieldset.setAttribute('id', 'todo-item-fieldset');
    selectBottomRightContainer.appendChild(toDoItemFieldset);


    // Create input boxes for ToDo Item stuff
    const toDoItemInput = document.createElement('input');


    /*
    // Create
    projectInput.setAttribute('type', 'text');
    projectInput.setAttribute('id', 'projectTitle');
    projectInput.setAttribute('placeholder', 'Anonymous Project');
    selectBottomRightContainer.appendChild(projectInput);

    
    // Create Submit button so can confirm the project's name
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submit')
    submitButton.textContent = 'Submit';
    selectBottomRightContainer.appendChild(submitButton);

    // Once clicked, specifies what the Submit button does
    const submitAction = document.querySelector('#submit');
    submitAction.addEventListener('click', () => {
        
        // Submit button deleted from the DOM
        selectBottomRightContainer.removeChild(submitAction);

        // Text from input box posted on left side of the webpage
        const projectPosted = document.createElement('div');
        projectPosted.setAttribute('id', projectInput.value);
        projectPosted.textContent = projectInput.value;
        selectBottomRightContainer.appendChild(projectPosted);

        // Add newest Project to Projects array
        projectsArray.push(projectInput.value);
        console.log(projectsArray);

        // Input box is deleted
        selectBottomRightContainer.removeChild(projectInput);
    });
    */
});
