// Projects array
const projectsArray = [];

// Project factory
const ProjectFactory = (name, toDos) => {
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
