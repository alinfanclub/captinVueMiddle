<template>
  <div id="todoAll">
    <ul>
      <li v-for="(todoItems,index ) in todoList" :key="todoItems.item" :class="{lineCompleted : todoItems.completed}" v-on:click="toggleComplete(todoItems, index)">
          <i class="checkBtn fas fa-check" :class="{checkBoxCompleted : todoItems.completed}" ></i>
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
    props: {
      todoList : String,
    },
    methods : {
      removeTodo : function(todoItems, index) {
        this.$emit('removeOne', todoItems, index);
      },
      toggleComplete : function(todoItems, index) {
       this.$emit('toggleOneItem', todoItems, index)
      },
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
      .lineCompleted {
        background-color: rgb(212, 212, 212);
      }
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
           text-decoration: line-through;
        }
        .checkBoxCompleted  {
          color: grey;
        }
        .trashCompleted {
          opacity: 0;
          pointer-events: none;
        }
      }
    }
  }
 

</style>