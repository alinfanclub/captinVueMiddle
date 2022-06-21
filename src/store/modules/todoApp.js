const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length ; i ++) {
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                //  this.todoList.push(localStorage.key(i));
            }
            }
        }
        return arr;
    }
};

const state = {
     todoList: storage.fetch(),
  };

const getters = {
    storedTodoItems(state) {
        return state.todoList;
    }
};

const mutations = {
    addTodoItem(state, todoItems) {
        var obj = {completed: false, item: todoItems};
        localStorage.setItem(todoItems, JSON.stringify(obj));
        state.todoList.push(obj);
    },
    removeOne(state, a) {
        localStorage.removeItem(a.todoItems.item);
        state.todoList.splice(a.index, 1);
      },
    toggleOneItem(state, a) {
    state.todoList[a.index].completed = !state.todoList[a.index].completed ;
    localStorage.removeItem(a.todoItems.item);
        localStorage.setItem(a.todoItems.item, JSON.stringify(a.todoItems));
    },
    removeAll(state) {
        localStorage.clear();
        state.todoList = [];
    }
};


export default {
    state,
    getters,
    mutations,
}
