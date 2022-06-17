<template>
  <div class="clear-all-container">
    <span class="clear-all-btn" @click="clearTodo">
      Clear All
    </span>
  </div>
</template>

<script>
export default {
    name:'TodoFooter',
    data() {
      return{

      }
    },
    methods: {
      clearTodo: function() {
        this.$emit('removeAll');
      }
    }
}
</script>

<style lang="scss" scoped>
  .clear-all-container {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;

    .clear-all-btn {
      color: red;
      display: block;
      font-weight: bold;
    }
  }
</style>