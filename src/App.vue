<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  data() {
    return {
      // todoList : [],
    }
  },
  methods : {
    // addTodoItem(todoItems) {
    //   var obj = {completed: false, item: todoItems};
    //   localStorage.setItem(todoItems, JSON.stringify(obj));
    //   this.$store.state.todoList.push(obj);
    // },
    // removeOne(todoItems, index) {
    //   localStorage.removeItem(todoItems.item);
    //       this.$store.state.todoList.splice(index, 1);
    // },
    // toggleOneItem(todoItems , index) {
    //   //  todoItems.completed = !todoItems.completed;
    //    this.$store.state.todoList[index].completed = !todoItems.completed;
    //     // localStorage.removeItem(todoItems.item);
    //     localStorage.setItem(todoItems.item, JSON.stringify(todoItems));
    // },
    // removeAll() {
    //     localStorage.clear();
    //     this.$store.state.todoList = [];
    //   },
  },

  components: {
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoList,
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
