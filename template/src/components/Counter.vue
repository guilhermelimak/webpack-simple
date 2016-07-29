<template>
<div>
  <h2>Counter {{ counterValue}}</h2>
  <button class="increment-button" @click="incrementCounter(1)">+</button>
</div>
</template>

<script>
import { counterValue } from '../getters/countGetters'
import { incrementCounter } from '../actions/counterActions';

export default {
  vuex: {
    getters: {
      counterValue,
    },
    actions: {
      incrementCounter,
    }
  },
}
</script>

<style lang="sass">
.increment {
  &-button {
    border: none;
  }
}
</style>
