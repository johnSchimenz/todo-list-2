// Projects array
const projectsArray = [];

// Current project variable
let currrentProject;

// Project factory
const ProjectFactory = (name) => {
    name = name;
    toDos = [];
    return {name, toDos};
}

// ToDo arguments array
const toDoArgumentsArray = ['title', 'description', 'dueDate', 'priority', 'notes', 'checklist'];

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
    const selectListOfProjectsContainer = document.querySelector('#list-of-projects-container');

    // Create input box to write the project's name
    const projectInput = document.createElement('input');
    projectInput.setAttribute('type', 'text');
    projectInput.setAttribute('id', 'projectTitle');
    projectInput.setAttribute('name', 'projectTitle');
    projectInput.setAttribute('placeholder', 'Anonymous Project');
    selectListOfProjectsContainer.appendChild(projectInput);

    // Create Submit button so can confirm the project's name
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submit')
    submitButton.textContent = 'Submit';
    selectListOfProjectsContainer.appendChild(submitButton);

    // Once clicked, specifies what the Submit button does
    const submitAction = document.querySelector('#submit');
    submitAction.addEventListener('click', () => {

        // Resets the list of projects on left side so don't double-list a project
        selectListOfProjectsContainer.textContent = '';

        // Create project using ProjectFactory and push it to projectsArray
        const newestProject = ProjectFactory(projectInput.value);
        projectsArray.push(newestProject);

        // Display projectsArray on left side of webpage
        for (let i = 0; i < projectsArray.length; i++) {
            const projectListed = document.createElement('button');
            projectListed.textContent = projectsArray[i].name;
            projectListed.setAttribute('class', 'project');
            selectListOfProjectsContainer.appendChild(projectListed);
        }

        // Make Projects clickable
        const projects = document.querySelectorAll('.project');
        projects.forEach((project) => {
            project.addEventListener('click', () => {

                // Reset display of listed ToDos on right by deleting and recreating ToDos container
                const selectBottomRightContainer = document.querySelector('#bottom-right');
                const selectToDosContainer = document.querySelector('#list-of-todos-container');
                selectBottomRightContainer.removeChild(selectToDosContainer);

                const createToDosContainer = document.createElement('div');
                createToDosContainer.setAttribute('id', 'list-of-todos-container');
                createToDosContainer.textContent = project.textContent;
                selectBottomRightContainer.appendChild(createToDosContainer);

                // Search projectsArray for name of the clicked project and display Name (soon to be ToDos) on right side
                for (let i = 0; i < projectsArray.length; i++) {
                    if (project.textContent === projectsArray[i].name) {
                        const allToDosCurrentProject = document.createElement('div');
                        allToDosCurrentProject.textContent = projectsArray[i].name;
                        selectToDosContainer.appendChild(allToDosCurrentProject);

                        // Makes newly created project the currentProject
                        currrentProject = projectsArray[i];
                    }              
                }
            });
        });
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

    // Loop around to create labels and input fields for ToDo Item form
    for (let i = 0; i < toDoArgumentsArray.length; i++) {
        // Create label for input box
        const toDoItemLabel = document.createElement('label');    
        toDoItemLabel.setAttribute('for', toDoArgumentsArray[i]);
        toDoItemLabel.textContent = toDoArgumentsArray[i];
        toDoItemFieldset.appendChild(toDoItemLabel);
    
        // Create title input box
        const toDoItemInput = document.createElement('input');    
        toDoItemInput.setAttribute('type', 'text');
        toDoItemInput.setAttribute('id', toDoArgumentsArray[i]);
        toDoItemInput.setAttribute('name', toDoArgumentsArray[i]);
        toDoItemFieldset.appendChild(toDoItemInput);
    }

    // Create Submit button for ToDo item fieldset
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submit')
    submitButton.textContent = 'Submit';
    toDoItemFieldset.appendChild(submitButton);

    // Once clicked, specifies what the Submit button does
    const submitAction = document.querySelector('#submit');
    submitAction.addEventListener('click', () => {

        // Create array to put values from ToDo item fieldset inputs
        const newestToDoItemArray = [];

        // Get ToDo Item values from input boxes
        for (let i = 0; i < toDoArgumentsArray.length; i++) {
            const getToDoItemInput = document.querySelector('#' + toDoArgumentsArray[i]);
            newestToDoItemArray.push(getToDoItemInput.value);
        }

        // Creates ToDo object, but I don't like that it's hard-coded
        const newestToDoItem = ToDoFactory(newestToDoItemArray[0],
            newestToDoItemArray[1],
            newestToDoItemArray[2],
            newestToDoItemArray[3],
            newestToDoItemArray[4],
            newestToDoItemArray[5],
            )
        
        // Add newest ToDo Item to the currentProject
        console.log(currrentProject);
        currrentProject.toDos.push(newestToDoItem);
        console.log (currrentProject);

        /*
        // Text from input box posted on left side of the webpage
        const projectPosted = document.createElement('div');
        projectPosted.setAttribute('id', projectInput.value);
        projectPosted.textContent = projectInput.value;
        selectBottomRightContainer.appendChild(projectPosted);

        // Add newest Project to Projects array
        projectsArray.push(projectInput.value);
        console.log(projectsArray);
*/
        // fieldset for new ToDo item is deleted
        selectBottomRightContainer.removeChild(toDoItemFieldset);
    });
});
