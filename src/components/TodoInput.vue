<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer addBtn" @click="addTodo">
        <i class="fas fa-plus"></i>
      </span>
      <!-- use the modal component, pass in the prop -->
      <Modal v-if="showModal" @close="showModal = false">
       <template #header>경고</template>
       <template #body>오늘 할 일을 입력해주세요</template>
      </Modal>
  </div>
  
</template>
<script>
  import Modal from './common/Modal.vue'

export default {
    name : 'TodoInput',
    data()  {
      return {
        newTodoItem : '',
        showModal: false,
      }
    },
    methods : {
      addTodo(){
        if (this.newTodoItem !== ''){
          // this.$emit('addTodoItem', this.newTodoItem);
          const text = this.newTodoItem.trim();
          this.$store.commit('addTodoItem', text)
          this.clearInput();
        } else {
          this.showModal = !this.showModal;
        }
      },
      clearInput() {
        this.newTodoItem = '';
      }
    },
    components: {
      Modal,
    }
}
</script>

<style lang="scss" scoped>

  .inputBox {
    margin: 0 auto;
    width: 80%;
    background-color: white;
    height: 50px;
    // line-height: 50px;
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

    span {
      line-height: 50px;
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
  }
  



</style>