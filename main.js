/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(todo) {
  return todo.text;
}

const getPriority = function(todo) {
  return todo.priority;
}

const isComplete = function(todo) {
  return todo.complete;
}

const isHighPriority = function(todo) {
  if(todo.priority === 2) {
    return true;
  }

  return false;
}

const getNameAndPriority = function(todo) {
  return `${todo.text} - ${todo.priority}`;
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = function(todos) {
  const names = todos.map(getTodoName);
  return names;
}

const priorities = function(todos) {
  const priorities = todos.map(getPriority);
  return priorities;
}

const namesAndPriorities = function(todos) {
  names_priorities = todos.map(getNameAndPriority);

  return names_priorities;
}












// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
