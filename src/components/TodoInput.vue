<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer addBtn" v-on:click="addTodo">
        <i class="fas fa-plus"></i>
      </span>
  </div>
</template>

<script>
export default {
    name : 'TodoInput',
    data()  {
      return {
        newTodoItem : '',
      }
    },
    methods : {
      addTodo : function (){
        if (this.newTodoItem !== ''){
          this.$emit('addTodoItem', this.newTodoItem);
          this.clearInput();
        }
      },
      clearInput : function () {
        this.newTodoItem = '';
      }
    }
}
</script>

<style lang="scss" scoped>

  .inputBox {
    margin: 0 auto;
    width: 80%;
    background-color: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    display: flex;

    input {
      border-style: none;
      font-size: 0.9rem;
      text-align: center;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 5px;

    @at-root .addBtn {
    color: white;
    vertical-align: middle;
    }
  }



</style>