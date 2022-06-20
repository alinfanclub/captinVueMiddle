<template>
  <div id="todoAll">
    <transition-group name="list" tag="ul">
      <li v-for="(todoItems,index ) in this.todoList" :key="todoItems.item" :class="{lineCompleted : todoItems.completed}">
          <i class="checkBtn fas fa-check" :class="{checkBoxCompleted : todoItems.completed}" v-on:click="toggleComplete({todoItems, index})"></i>
       <span :class="{textCompleted : todoItems.completed}"> {{todoItems.item}}</span>
        <span class="removeBtn" :class="{trashCompleted : todoItems.completed}" v-on:click="removeTodo({todoItems, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
export default {
    name : 'TodoList',
    methods : {
      // removeTodo(todoItems, index) {
      //   this.$store.commit('removeOne', {todoItems, index});
      // },
      // toggleComplete(todoItems, index) {
      //  this.$store.commit('toggleOneItem', {todoItems, index});
      // },
      ...mapMutations({
        removeTodo : "removeOne",
        toggleComplete : 'toggleOneItem'
      }),
    },
    computed: {
      // ...mapGetters(['storedTodoItems'])
      ...mapGetters({
        todoList : "storedTodoItems"
      })
    }

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
          cursor: pointer;
        }

        .checkBtn {
          width: 3rem;
          // cursor: pointer;
        }

        .textCompleted {
          color: grey;
           text-decoration: line-through;
        }
        .checkBoxCompleted  {
          color: red;
        }
        .trashCompleted {
          opacity: .5;
        }
      }
    }
  }
 
  // 리스트아이템 트랜지션효과
  .list-enter-active, .list-leave-active {
    transition: all .3s;
  }
.list-enter, .list-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>