<template>
  <div id="todoAll">
    <ul>
      <li v-for="(todoItems,index ) in todoList" :key="todoItems.item">
          <i class="checkBtn fas fa-check" :class="{checkBoxCompleted : todoItems.completed}" v-on:click="toggleComplete(todoItems, index)"></i>
       <span :class="{textCompleted : todoItems.completed}"> {{todoItems.item}}</span>
        <span class="removeBtn" :class="{trashCompleted : todoItems.completed}" v-on:click="removeTodo(todoItems, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name : 'TodoList',
    data() {
      return {
        todoList : []
      }
    },
    methods : {
      removeTodo : function(todoItems, index) {
        console.log(todoItems, index);
        localStorage.removeItem(todoItems.item);
        this.todoList.splice(index, 1);
      },
      toggleComplete : function(todoItems) {
        // console.log(todoItems, index);
        // todoItems.completed = true;
        todoItems.completed = !todoItems.completed
        localStorage.removeItem(todoItems.item);
        localStorage.setItem(todoItems.item, JSON.stringify(todoItems));
      },
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
}
</script>

<style lang="scss" scoped>
  #todoAll {
    width: 80%;
    margin: 0 auto;
     ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    text-align: cneter;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0, 0.9rem;
        background: white;
        border-radius: 5px;


        .removeBtn {
          display: block;
          width: 3rem;
          border-radius: 5px;
          color: rgb(195, 62, 62);
          font-size: 20px;
        }

        .checkBtn {
          width: 3rem;;
        }

        .textCompleted {
          color: grey;
        }
        .checkBoxCompleted  {
          color: grey;
        }
        // .trashCompleted {
        //   opacity: 0;
        //   pointer-events: none;
        // }
      }
    }
  }
 

</style>