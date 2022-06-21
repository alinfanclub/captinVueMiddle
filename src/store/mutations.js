const addTodoItem = (state, todoItems) => {
    var obj = {completed: false, item: todoItems};
    localStorage.setItem(todoItems, JSON.stringify(obj));
    state.todoList.push(obj);
}
const removeOne = (state, a) => {
    localStorage.removeItem(a.todoItems.item);
    state.todoList.splice(a.index, 1);
  }
  const toggleOneItem = (state, a) => {
    state.todoList[a.index].completed = !state.todoList[a.index].completed ;
    localStorage.removeItem(a.todoItems.item);
      localStorage.setItem(a.todoItems.item, JSON.stringify(a.todoItems));
  }
  const removeAll = (state) => {
      localStorage.clear();
        state.todoList = [];
    }


    export {addTodoItem, removeOne, toggleOneItem, removeAll};