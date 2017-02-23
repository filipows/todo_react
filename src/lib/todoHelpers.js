export const addTodo = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random()*1000000);

export const findById = (id, list) => list.find( (elem) => elem.id === id );

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete});

export const updateTodo = (list, updateTodo) => {
  const index = list.findIndex( (item) => item.id === updateTodo.id );

  return [
    ...list.slice(0, index), 
    updateTodo, 
    ...list.slice(index+1, list.length)]
}


export const removeTodo = (list, id) => {
  const index = list.findIndex((elem) => elem.id === id );
  return [
    ...list.slice(0, index), 
    ...list.slice(index+1, list.length)]
};