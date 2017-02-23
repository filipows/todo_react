import {addTodo, findById, toggleTodo, updateTodo, removeTodo} from './todoHelpers';

test('addTodo should add the passed todo to the list', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  
  const newTodo = {id: 3, name: 'three', isComplete:false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete:false}
  ];

  const result = addTodo(startTodos, newTodo);

  expect (result).toEqual(expected); 
});

test('addTodo should not mutate existing array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  
  const newTodo = {id: 3, name: 'three', isComplete:false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete:false}
  ];

  const result = addTodo(startTodos, newTodo);

  expect(result).not.toBe(startTodos); 
});

test('findById should return the expeted item from an array', ()=> {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete:false}
  ];

  const expected = {id: 2, name: 'two', isComplete: false}
  const result = findById(2, startTodos);

  expect(result).toEqual(expected); 
 
});

  const startTodo = {id: 1, name: 'one', isComplete: false};
test('toggle todo should toggle the isComplete prop of a todo', () => {
  
  const expected = {id: 1, name: 'one', isComplete: true};
  const result = toggleTodo(startTodo);
  expect(result).toEqual(expected);
});

test('toggle should not mutate the original todo', () => {
  const startTodo = {id: 1, name: 'one', isComplete: false};
  const result = toggleTodo(startTodo);
  expect(result).not.toBe(startTodo);
});

test('updateTodo should update an item by Id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete:false}
  ];

  const updatedTodo = {id: 2, name: 'twotwo', isComplete: true};
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'twotwo', isComplete: true},
    {id: 3, name: 'three', isComplete:false}
  ];

  const result = updateTodo(startTodos, updatedTodo);

  expect(result).toEqual(expected);
});


test('updateTodo should not mutate the original array', ()=> {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete:false}
  ];

  const updatedTodos = updateTodo(startTodos, {});

  expect(updatedTodos).not.toBe(startTodos);
});

test('removeTodo should remove an item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete:false}
  ];
  const targetId = 2;
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 3, name: 'three', isComplete:false}
  ];

  const result = removeTodo(startTodos, targetId);

  expect(result).toEqual(expected);
});


test('removeTodo should not mutate original array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete:false}
  ];
  const targetId = 2;
  const result = removeTodo(startTodos, targetId);

  expect(result).not.toBe(startTodos);
});