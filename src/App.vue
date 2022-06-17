<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addTodoItem"></TodoInput>
    <TodoList v-bind:todoList='todoList' v-on:removeOne="removeOne" v-on:toggleOneItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:removeAll="removeAll"></TodoFooter>
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
      todoList : [],
    }
  },
  methods : {
    addTodoItem : function(todoItems) {
      var obj = {completed: false, item: todoItems};
      localStorage.setItem(todoItems, JSON.stringify(obj));
      this.todoList.push(obj);
    },
    removeOne : function(todoItems, index) {
      localStorage.removeItem(todoItems.item);
          this.todoList.splice(index, 1);
    },
    removeAll : function() {
      localStorage.clear();
      this.todoList = [];
    },
    toggleOneItem : function(todoItems , index) {
      //  todoItems.completed = !todoItems.completed;
       this.todoList[index].completed = !todoItems.completed;
        // localStorage.removeItem(todoItems.item);
        localStorage.setItem(todoItems.item, JSON.stringify(todoItems));
    }
  },
  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length ; i ++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          this.todoList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          //  this.todoList.push(localStorage.key(i));
        }
      }
    }
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
