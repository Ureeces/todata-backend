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

const isIncomplete = function(todo) {
  if(!todo.complete) {
    return true;
  }

  return false;
}

const isHighPriority = function(todo) {
  if(todo.priority === 2) {
    return true;
  }

  return false;
}

const isLowPriority = function(todo) {
  if(todo.priority === 1) {
    return true;
  }

  return false;
}

const getNameAndPriority = function(todo) {
  let description = `${todo.text} - `;
  if(isHighPriority(todo)) {
    description += "High";
  }

  else {
    description += "Low";
  }

  return description;
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
  const names_priorities = todos.map(getNameAndPriority);
  return names_priorities;
}

const justNotComplete = function(todos) {
  const incompletes = todos.filter(isIncomplete);
  return incompletes;
}

const justComplete = function(todos) {
  const completes = todos.filter(isComplete);
  return completes;
}

const priority2Only = function(todos) {
  const highPriorities = todos.filter(isHighPriority);
  return highPriorities;
}

const priority1Only = function(todos) {
  const lowPriorities = todos.filter(isLowPriority);
  return lowPriorities;
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
